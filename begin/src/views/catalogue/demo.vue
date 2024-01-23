

<template>

  <div id="map" ref="map">
    <div class="map-mask1" v-show="type == 0"></div>
  </div>


</template>

<script >
import L from 'leaflet'
import '@/utils/leaflet.chinesetmsproviders'
import 'leaflet/dist/leaflet.css'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
import '@/utils/leaflet-tilelayer-colorizr'
import '@/utils/leaflet-echarts'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'
import 'leaflet.heat'
import DesignTileLayer from '@/utils/mapStyle.js'
export default {
  data(){
    return{
   map:null,
      isZJMap: window.location.href.indexOf('jjt.sxyc.gov.cn') > -1,
      mapGroup: null,
      ZJMapGroup: null,
      type:0,
      depth:3,
      lng:0,
      lat:0,
      drawObjList: [],
      districtGroup: null,
      districtList: [],
    }
  },
  mounted() {
    this.initMap()
  },
  methods:{
    initMap () {
      console.log(this.isZJMap)
      let mapOptions = {
        crs: this.isZJMap ? L.CRS.EPSG4326 : L.CRS.EPSG3857,
        minZoom: 5,
        maxZoom: this.isZJMap ? 17 : 18,
        zoom: this.isZJMap ? 10 : 12,
        attributionControl: false,
        zoomControl: false,
        center: [30.2489634, 120.2052342]
      }
      let map = L.map('map', mapOptions)
      // map.project({lng: this.lng, lat: this.lat}, 1)
      // https://ditu.zjzwfw.gov.cn/mapserver/vmap/WMTS/1.0/zjvmap/tdt_biaozhunyangshi_2017?token=okahhh367dgb36kyggcf&service=WMTS&request=GetTile&version=1.0.0&layer=zjvmap&style=tdt_biaozhunyangshi_2017&tilematrixSet=default028mm&format=image%2Fpng&height=256&width=256&tileSize=256&fullExtent=%5Bobject%20Object%5D&tilematrix=13&tilerow=1371&tilecol=6829
      let color1 = { r: 6, g: 44, b: 61 }
      let color2 = { r: 41, g: 138, b: 134 }
      const customLayer1 = new DesignTileLayer('TianDiTu.Normal.Map', { color: color1 })
      const customLayer2 = new DesignTileLayer('TianDiTu.Normal.Annotion', { color: color2 })
      this.mapGroup = L.layerGroup([customLayer1, customLayer2])
      this.ZJMapGroup = L.layerGroup([
        L.tileLayer('https://ditu.zjzwfw.gov.cn:443/mapserver/vmap/WMTS/1.0/zjvmap/tdt_kejiganyangshi_2017?token=e74e7352-4f0f-499a-ae1e-29b7e74963f5&service=WMTS&request=GetTile&version=1.0.0&layer=zjvmap&style=tdt_biaozhunyangshi_2017&tilematrixSet=c&format=tiles&tileSize=256&tilematrix={z}&tilerow={y}&tilecol={x}', {
          zoomOffset: 1,
          maxZoom: 19,
          minZoom: 8
        }),
        L.tileLayer('https://ditu.zjzwfw.gov.cn:443/mapserver/label/WMTS/1.0/zjvmap/tdt_kejiganyangshi_2017?token=e74e7352-4f0f-499a-ae1e-29b7e74963f5&service=WMTS&request=GetTile&version=1.0.0&layer=zjvmap&style=tdt_biaozhunyangshi_2017&tilematrixSet=c&format=tiles&tileSize=256&tilematrix={z}&tilerow={y}&tilecol={x}', {
          zoomOffset: 1,
          maxZoom: 19,
          minZoom: 8
        })])
      if (this.isZJMap) {
        this.ZJMapGroup.addTo(map)
      } else {
        this.mapGroup.addTo(map)
      }
      // map.project({lng: this.lng, lat: this.lat}, 1)
      // https://ditu.zjzwfw.gov.cn/mapserver/vmap/WMTS/1.0/zjvmap/tdt_biaozhunyangshi_2017?token=okahhh367dgb36kyggcf&service=WMTS&request=GetTile&version=1.0.0&layer=zjvmap&style=tdt_biaozhunyangshi_2017&tilematrixSet=default028mm&format=image%2Fpng&height=256&width=256&tileSize=256&fullExtent=%5Bobject%20Object%5D&tilematrix=13&tilerow=1371&tilecol=6829
      // L.layerGroup([mapLayer, labelLayer]).addTo(map)
      let that = this
      map.on({
        click: (e) => {
          that.houseVisible = false
          that.placeVisible = false
        },
        zoomend: this.mapZoomChange,
        dragend: this.mapDragend
      }, this)
      this.map = map
    },
    mapDragend () {
      if ((this.type == 2 && this.layerHouse.findIndex(item => item.checked) == 0) || (this.type == 3 && this.layerPlace.findIndex(item => item.checked) == 0)) this.getHouseList()
    },
    mapZoomChange () {
      if (this.type == 0) {
        console.log(11111)
        let zoom = this.isZJMap ? this.map.getZoom() + 2 : this.map.getZoom()
        this.map.removeLayer(this.districtGroup).removeLayer(this.streetGroup).removeLayer(this.communityGroup)
        this.drawObjList.forEach(item => {
          this.map.removeLayer(item)
        })
        this.drawObjList = []
        // this.districtGroup.clearLayers()
        // this.streetGroup.clearLayers()
        // this.communityGroup.clearLayers()
        if (zoom < 14 && this.depth == 3) {
          console.log(2222)
          this.districtGroup.addTo(this.map)
          this.drawList = this.districtList.map(item => {
            return {
              id: item.id,
              name: item.name,
              latlng: item.geojson ? JSON.parse(item.geojson) : []
            }
          })
          this.getDraw('#00FFD2')
        }
        if ((zoom > 11 || this.depth != 3) && zoom < 15) {
          console.log(3333)
          this.streetGroup.addTo(this.map)
          this.drawList = this.streetList.map(item => {
            return {
              id: item.id,
              name: item.name,
              latlng: item.geojson ? JSON.parse(item.geojson) : []
            }
          })
          this.getDraw('#008728')
        }
        if ((zoom > 14 || this.depth == 5) && zoom < 18) {
          console.log(4444)
          this.communityGroup.addTo(this.map)
          this.drawList = this.communityList.map(item => {
            return {
              id: item.id,
              name: item.name,
              latlng: item.geojson ? JSON.parse(item.geojson) : []
            }
          })
          this.getDraw()
        }
        if (zoom > 15) {
          console.log(4555)
          this.drawList = this.gridList.map(item => {
            let index = this.communityList.findIndex(val => val.id == item.community)
            return {
              color: index % 3 == 0 ? '#005EF9' : index % 3 == 1 ? '#008728' : '#D57000',
              id: item.id,
              name: item.name,
              latlng: item.geojson && JSON.parse(item.geojson).length > 0 ? JSON.parse(item.geojson) : []
            }
          })
          this.getDraw('#EF4218', true)
        }
      } else if ((this.type == 2 && this.layerHouse.findIndex(item => item.checked) == 0) || (this.type == 3 && this.layerPlace.findIndex(item => item.checked) == 0)) {
        this.getHouseList()
        console.log(1111111111)
      }
    },
    getDraw (color, isDash) {
      let colorList = ['#005EF9', '#008728', '#D57000']
      this.drawList.forEach((item, index) => {
        let drawObj = L.polygon(item.latlng, { weight: isDash ? 2 : 3, color: item.color || color || (colorList[index % 3]), dashArray: isDash ? [5, 8] : null }).addTo(this.map)
        drawObj.bindTooltip(item.name)
        drawObj.name = item.name
        this.drawObjList.push(drawObj)
      })
    },
  }
}
</script>
<style scoped>
#map{
  position: absolute;
  height: 100vh;
  width: 100vw;
}
.map-mask1{
  position: absolute;
  z-index: 998;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(37, 54, 76, 0.1) 52%),
  linear-gradient(270deg, rgba(0, 0, 0, 0.7) 0%, rgba(37, 54, 76, 0.1) 52%);
}
</style>
