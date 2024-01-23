/*
 * L.TileLayer.Colorizr is a regular tilelayer with mapped colors.

 */

(function () {

  L.TileLayer.providers = {
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
  // L.TileLayer.Colorizr =
  var Colorizr = L.TileLayer.extend({

    initialize: function (type, options) {
      options = L.extend({}, L.TileLayer.prototype.options, {
        colorize: function (pixel) {
          return pixel;
        },
        crossOrigin: 'Anonymous'
      }, options);
      var providers = L.TileLayer.providers

      var parts = type.split('.')

      var providerName = parts[0]
      var mapName = parts[1]
      var mapType = parts[2]

      var url = providers[providerName][mapName][mapType]
      options.subdomains = providers[providerName].Subdomains
      L.TileLayer.prototype.initialize.call(this, url, options);
      L.setOptions(this, options);

      this.setColorizr(this.options.colorize);

      this.on('tileload', function (e) {
        this._colorize(e.tile);
      });
    },

    setColorizr: function (colorizrFactory) {
      if (!colorizrFactory || typeof colorizrFactory !== 'function') {
        throw 'The colorize option should be a function and return an object with at least one of "r", "g", "b", or "a" properties. Got:' +
        typeof colorizrFactory;
      } else {
        this.options.colorize = colorizrFactory;
      }

      this.redraw(false);
    },

    _createTile: function () {
      var tile = L.TileLayer.prototype._createTile.call(this);
      tile.crossOrigin = "Anonymous";
      return tile;
    },

    _colorize: function (img) {
      if (img.getAttribute('data-colorized')) {
        img.hidden = false;
        return;
      }else {
        img.hidden = true;
      }
      var _img = img;
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = _img.src;
      var _this = this;
      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var imgd = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pix = imgd.data;
        for (var i = 0, n = pix.length; i < n; i += 4) {

          var pixel = _this.options.colorize({r: pix[i], g: pix[i + 1], b: pix[i + 2], a: pix[i + 3]});

          if (!!!pixel || pixel !== Object(pixel) || Object.prototype.toString.call(pixel) === '[object Array]') {

            if (i === 0) {
              throw 'The colorize option should return an object with at least one of "r", "g", "b", or "a" properties.';
            }

          } else {

            if (pixel.hasOwnProperty('r') && typeof pixel.r === 'number') {
              pix[i] = pixel.r;
            }
            if (pixel.hasOwnProperty('g')) {
              pix[i + 1] = pixel.g;
            }
            if (pixel.hasOwnProperty('b')) {
              pix[i + 2] = pixel.b;
            }
            if (pixel.hasOwnProperty('a')) {
              pix[i + 3] = pixel.a;
            }
          }

        }
        ctx.putImageData(imgd, 0, 0);
        _img.setAttribute('data-colorized', true);
        _img.src = canvas.toDataURL();
      };
    }
  });

  (function (factory, window) {

    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
      define(['leaflet'], factory);

      // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
      module.exports = factory(require('leaflet'));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== 'undefined' && window.L) {
      window.L.tileLayer.colorizr = factory(L);
    }
  }(function (L) {
    return function (url, options) {
      return new Colorizr(url, options);
    };
  }, window));


})()

