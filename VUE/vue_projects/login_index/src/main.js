import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/vant-ui'
// 这里的导入名字可以自定义，比如：import ElementUI from 'element-ui'
import '@/styles/common.less'
// 导入成功
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
