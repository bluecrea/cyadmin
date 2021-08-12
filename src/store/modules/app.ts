import storage from 'store'
import { getInfo } from "@/utils/api"

export interface AppState {
	theme: string,
	token: string,
	info: Record<string, unknown>
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
	setLogin({ commit }: any, info: Record<string, unknown>) {
		storage.set('Access-Token', info.token)
		storage.set('theme', info.theme)
		commit('SET_TOKEN', info.token)
		commit('SET_THEME', info.theme)
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
		commit('SET_THEME', '')
		storage.remove('Access-Token')
		storage.remove('theme')
	}
}

export default { state, getters, mutations, actions }

