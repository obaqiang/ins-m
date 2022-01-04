/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-11-08 09:48:05
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-18 11:37:07
 */
import axios from 'axios'
// import store from '@/store'
import storage from 'store'
// import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import Cookies from 'js-cookie'
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = error => {
  if (error.response) {
    const data = error.response.data
    // 接口调试返回跳转
    if (error.response.status === 401 && data.code === '3000') {
      window.location.href = data.body
    }
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  let token = Cookies.get(ACCESS_TOKEN)
  if (token) {
    storage.set(ACCESS_TOKEN, 'Bearer ' + token)
    Cookies.remove(ACCESS_TOKEN)
  }
  token = storage.get(ACCESS_TOKEN)
  if (token) {
    config.headers[ACCESS_TOKEN] = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use(response => {
  return response.data
}, errorHandler)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export { installer as VueAxios, request as axios }
