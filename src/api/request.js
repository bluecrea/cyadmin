import axios from 'axios'

// 创建 axios 实例
export const post = axios.create({
  baseURL: 'https://api.goxianguo.com',
  timeout: 6000,
  method: 'POST'
})

post.interceptors.response.use(response => {
  return response.data
})
