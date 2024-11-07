import './assets/main.css'// 导入 main.css 文件
import { createPinia } from 'pinia' // 导入 createPinia
import { createApp } from 'vue' // 导入 createApp
import App from './App.vue' // 导入 App.vue 组件
const pinia = createPinia() // 创建 pinia 实例
const app = createApp(App) // 创建 vue 实例
app.use(pinia).mount('#app') // 挂载到 id 为 app 的元素上
