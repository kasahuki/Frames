// index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 安装插件
const store = new Vuex.Store({
  state: {
    count: 0,
    msg: 'hello'
  }
})
export default store
