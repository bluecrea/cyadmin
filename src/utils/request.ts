import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
	baseURL: 'https://api.xiachuyi.com/',
	method: 'POST',
	timeout: 6000
})

export default request
