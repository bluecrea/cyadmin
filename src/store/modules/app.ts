import storage from 'store'
import { login, getInfo } from "@/utils/api"

export interface AppState {
	theme: string,
	token: string,
	info: Record<string, unknown>
}
type UserInfo = {
	username?: string,
	password: string,
	phoneNumber: string
}


const state:AppState = {
	token: '',
	theme: 'auto',
	info: {}
}

const getters: any = {
	token: (state: AppState) => state.token,
	theme: (state: AppState) => state.theme,
	info: (state: AppState) => state.info
}

const mutations = {
	SET_TOKEN: (state: AppState, token: string) => {
		state.token = token
	},
	SET_THEME: (state: AppState, theme: string) => {
		state.theme = theme
		storage.set('theme', theme)
	},
	SET_INFO: (state: AppState, info: Record<string, unknown>) => {
		state.info = info
	}
}

const actions = {
	// 登录
	Login({ commit }: any, userInfo: UserInfo) {
		console.log(11111)
		return new Promise<object | void>((resolve, reject) => {
			login(userInfo).then(response => {
				console.log(2222)
				/*const result = response.data.result
				storage.set('Access-Token', result.token)
				storage.set('theme', result.theme)
				commit('SET_TOKEN', result.token)
				resolve()*/
			}).catch(error => {
				reject(error)
			})
		})
	},
	// 获取用户信息
	async getInfo ({ commit }: any) {
		await getInfo().then(response => {
			const result = response.data.result
			commit('SET_INFO', result)
			commit('SET_THEME', result.theme)
		})

	},
	Logout ( { commit}: any) {
		commit('SET_TOKEN', '')
		commit('SET_ROLES', [])
		storage.remove('Access-Token')
	}
}

export default { state, getters, mutations, actions }

