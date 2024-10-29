import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
//导入index.js里的路由组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
  //注入router
}).$mount('#app')
