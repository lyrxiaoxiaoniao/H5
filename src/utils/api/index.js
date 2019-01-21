import axios from './interceptor.js'
// import config from '../config'

export default {
  get(uri, data = null) {
    if (!uri) {
      console.log('API function call requires uri argument')
      return
    }
    return new Promise((resolve, reject) => {
      axios.get(uri, {
        params: data
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(uri, data = null) {
    if (!uri) {
      console.log('API function call requires uri argument')
      return
    }
    return new Promise((resolve, reject) => {
      axios.post(uri, data).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
