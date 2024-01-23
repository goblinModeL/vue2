import * as L from 'leaflet'
L.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map: 'https://t4.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=af8bf6ffa7dc411f141b348822012edd',
      Annotion: 'https://t4.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=af8bf6ffa7dc411f141b348822012edd'
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
var DesignTileLayer = L.TileLayer.extend({
  initialize: function (type, options) {
    var providers = L.TileLayer.ChinaProvider.providers

    var parts = type.split('.')

    var providerName = parts[0]
    var mapName = parts[1]
    var mapType = parts[2]

    var url = providers[providerName][mapName][mapType]
    options.subdomains = providers[providerName].Subdomains
    this.url = url
    L.TileLayer.prototype.initialize.call(this, url, options)
    //@ts-ignore
  },

  createTile: function (coords) {
    /**获取外部接受的颜色*/
    const {color}=this.options

    // 创建一个用于绘图的 <canvas> 元素
    var tile = L.DomUtil.create('canvas', 'leaflet-tile');

    // 根据选项设置瓦片的宽度和高度
    var size = this.getTileSize();
    tile.width = size.x;
    tile.height = size.y;

    // 获得一个 canvas 上下文，并使用 coords.x、coords.y 和 coords.z 在上面画东西
    var ctx = tile.getContext('2d');

    // 使用传入的 URL 模板替换变量
    var url = this.url
      .replace('{x}', coords.x)
      .replace('{y}', coords.y)
      .replace('{z}', coords.z);


    // 创建一个图像对象来加载瓦片
    var img = new Image();
    img.crossOrigin = ''

    img.src = url; // 替换为你的图片路径
    // 当图片加载完成后，绘制到 Canvas 上
    img.onload = function () {
      // 绘制图片到 Canvas 上
      ctx.drawImage(img, 0, 0, tile.width, tile.height);
      // 获取图像的像素数据
      var imageData = ctx.getImageData(0, 0, tile.width, tile.height);
      // 获取原来的图片的像素颜色
      var pixels = imageData.data;
      for (let i = 0; i <pixels.length; i += 4) {
        const r =pixels[i],
          g =pixels[i + 1],
          b =pixels[i + 2],
          a =pixels[i + 3];
        //计算灰度
        var grayVal = (r + g + b) / 3;
        //灰度反转--会使图片整体变成灰色--方便上色
        grayVal = 255 - grayVal;
        //将灰度替换掉原始的颜色
        pixels[i] = grayVal+color.r;
        pixels[i + 1] = grayVal +color.g;
        pixels[i + 2] = grayVal+color.b;
        //设置一个前景透明度，以便和背景混合
        if(color.a){
          pixels[i + 3] = a * color.a;
        }
      }
      // 将修改后的像素数据放回 Canvas
      ctx.putImageData(imageData, 0, 0);
    };
    // 返回瓦片，以便在屏幕上呈现
    return tile;
  }
});
export  default DesignTileLayer
