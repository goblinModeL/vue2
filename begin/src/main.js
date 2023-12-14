// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router/index";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import  'amfe-flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import {message} from './ui-FZ/message'
import  request from './axios/request'
import  './ui-FZ/animation.css'
import  store from './util/index.js'
Vue.prototype.$request = request
Vue.use(Antd)
Vue.use(ElementUI);
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
