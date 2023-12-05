// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-plugin-px2rem': {
      rootValue: 185,
      propList: ['*']
    }
  }
}

// 如果使用原生vue创建 在vue-config.js中配置
// css: {
//   loaderOptions: {
//     postcss: {
//       postcssOptions: {
//         plugins: {
//           'postcss-plugin-px2rem': {
//             remUnit: 198,
//           },
//           // 这里可以添加其他的 PostCSS 插件配置
//         },
//       },
//     },
//   },
// },
