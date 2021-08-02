export interface State {
	pushPath?: string,
	include: string[]
}

const state:State = {
	pushPath: '',
	include: []
}
const getters: any = {
	pushPath: (state: State) => state.pushPath,
	include: (state: State) => state.include
}

const mutations = {
	setPushPath(state: State, payload: string) {
		state.pushPath = payload
	},
	addInclude(state: State, payload: string) {
		if (!state.include.includes(payload)) {
			state.include.push(payload)
		}
	},
	delIncludes(state: State, payload: string) {
		const index:number = state.include.indexOf(payload)
		if (index !== -1) {
			state.include.splice(index, 1)
		}
	}
}

const actions = {
	setPushPath({ commit }: any, payload: string) {
		commit('setPushPath', payload)
	},
	addInclude({ commit }: any, payload: string) {
		commit('addInclude', payload)
	},
	async delIncludes({commit}: any) {
		commit('delIncludes')
	}
}

export default { state, mutations, actions, getters }