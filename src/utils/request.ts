import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import store from '@/store'
import storage from 'store'
import router from "@/router";

// 创建 axios 实例
const request: AxiosInstance = axios.create({
	baseURL: '/api/',
	method: 'POST',
	timeout: 6000
})

// 异常拦截
const errorHandler = (error: { response: any }) => {
	if (error.response) {
		const data = error.response.data
		const token = storage.get('Access-Token')
		if (!(data.result && data.result.isLogin)) {
			if (token) {
				store.dispatch('Logout').then(() => {
					setTimeout(() => {
						window.location.reload()
					}, 1500)
				})
			}
		}
	}
}

request.interceptors.request.use((config: AxiosRequestConfig) => {
	const token: string = storage.get('Access-Token')
	if (token) {
		config.headers!['Authorization'] = token
	}
	return config
}, errorHandler)

request.interceptors.response.use((response) => {
	if (response.data.status === 401) {
		storage.remove('Access-Token')
		router.push('/')
	} else {
		return response.data
	}
}, errorHandler)

export default request
