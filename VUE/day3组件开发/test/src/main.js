//导入Vue核心包
import Vue from 'vue'
//导入App根组件
import App from './App.vue'

Vue.config.productionTip = false
//当前处于什么阶段的提示//生产环境or 开发环境

//基于Vue的实例化创建结构渲染index.html
new Vue({
  render: h => h(App)
 

}).$mount('#app')
//挂载到id为app的元素上
//等效于el: '#app',

