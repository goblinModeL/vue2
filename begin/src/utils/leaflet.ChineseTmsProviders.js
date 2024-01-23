L.TileLayer.ChinaProvider = L.TileLayer.extend({

  initialize: function (type, options) { // (type, Object)
    var providers = L.TileLayer.ChinaProvider.providers

    var parts = type.split('.')

    var providerName = parts[0]
    var mapName = parts[1]
    var mapType = parts[2]

    var url = providers[providerName][mapName][mapType]
    options.subdomains = providers[providerName].Subdomains

    L.TileLayer.prototype.initialize.call(this, url, options)
  }
})

L.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map: 'https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=af8bf6ffa7dc411f141b348822012edd',
      Annotion: 'https://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=af8bf6ffa7dc411f141b348822012edd'
    },
    Satellite: {
      Map: 'https://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=af8bf6ffa7dc411f141b348822012edd',
      Annotion: 'https://t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=af8bf6ffa7dc411f141b348822012edd'
    },
    Terrain: {
      Map: 'https://t{s}.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=af8bf6ffa7dc411f141b348822012edd',
      Annotion: 'https://t{s}.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=af8bf6ffa7dc411f141b348822012edd'
    },
    Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
  },

  MapABC: {
    Normal: {
      Map: 'http://emap{s}.mapabc.com/mapabc/maptile?&x={x}&y={y}&z={z}'
    },
    Subdomains: ['0', '1', '2', '3']
  },

  GaoDe: {
    Normal: {
      Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
    },
    Satellite: {
      Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
    },
    Subdomains: ['1', '2', '3', '4']
  },

  GoogleCN: {
    Normal: {
      Map: 'http://mt{s}.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}'
    },
    Subdomains: ['1', '2', '3']
  }
}

L.tileLayer.chinaProvider = function (type, options) {
  return new L.TileLayer.ChinaProvider(type, options)
}
