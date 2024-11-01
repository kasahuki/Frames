import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  // 配置基址
  timeout: 5000
  // 请求的超时时间，单位是毫秒
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
  // 将请求回来的数据解构一层，返回给调用者
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default instance
