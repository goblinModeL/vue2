// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  './ui-FZ/animation.css'
import axios from "axios";
import  'amfe-flexible'
import echarts from "echarts";
import {message} from './ui-FZ/message'
import  request from './axios/http'
import  store from './util/index.js'
import router from "./router/index";
Vue.use(ElementUI);
// Vue.prototype.$request = request
Vue.config.productionTip = false
Vue.prototype.$message = message
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
