import {store1} from './store/personnel';
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    namespace: true,
    A:store1,
  },
  plugins: [
    // 把vuex的数据存储到sessionStorage
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],

});
export default store
