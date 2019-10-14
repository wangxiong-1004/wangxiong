import axios from 'axios'

const config = {
  BASE_URL: '',
  TIMEOUT: 5000
}

function toLogin(path) {
  router.replace({
    path
  })
}

function errorHandle(status) {
  switch (status) {
    case 301:
      toLogin()
      break

    case 401:
      break

    default:
      break
  }

  return false
}

const service = axios.create({
  baseURL: config.BASE_URL,
  timeout: config.TIMEOUT
})

// 请求拦截
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {

  errorHandle()

  return Promise.resolve(response)
}, error => {
  errorHandle(error.stauts)

  return Promise.reject(error)
})

/**
 * @method request
 * @param {object}
 *  @param {string} url 请求接口地址
 *  @param {object} params 请求参数
 *  @param {string} method 请求方式
 *  @param {string} loading 请求loading
 * @returns instance
 */
export function request({ url, method = 'GET', params }, config) {
  return service({
    url,
    method,
    params,
    data: params,
    ...config
  })
}

/*
* 发起请求 -> 响应 -> 成功 -> 处理数据
* 发起请求 -> 响应 -> 错误 -> 处理错误
* */
