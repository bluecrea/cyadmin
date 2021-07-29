// 为 store state 声明类型
export interface State {
  token?: string
}

const state:State = {
  token: localStorage.getItem('access_token') || ''
}

const getters: any = {
  token: (state: State) => state.token
}

const mutations = {
  SET_USERINFO(state: State, userInfo: string) {
    state.token = userInfo
    localStorage.setItem('access_token', state.token)
  },

  REMOVE_USER(state:State) {
    localStorage.removeItem('access_token')
    state.token = ''
  }
}

const actions = {
  setUserInfo({ commit }: any, userInfo: string) {
    commit('SET_USERINFO', userInfo)
  },
  async delUserInfo({commit}: any) {
    commit('REMOVE_USERINFO')
  }
}

export default { state, getters, mutations, actions }