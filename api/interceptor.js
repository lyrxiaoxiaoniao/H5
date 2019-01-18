import axios from 'axios'

axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
  config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(res => { // 响应成功关闭loading
  return res
}, error => {
  if (error.message === 'Network Error') {
    return Promise.reject(error)
  }
})

export default axios