const state:any = {
  userInfo: sessionStorage.getItem('userInfo') || {}
}

const getters: any = {
  userInfo: (state: any) => state.userInfo
}

const mutations = {
  SET_USERINFO(state: any, userInfo: any) {
    state.userInfo = userInfo
    sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
  },

  REMOVE_USER(state:any) {
    sessionStorage.removeItem('userInfo')
    state.userInfo = {}
  }
}

const actions = {
  setUserInfo({ commit }: any, userInfo: any) {
    commit('SET_USERINFO', userInfo)
  },
  async delUserInfo({commit}:any) {
    commit('REMOVE_USERINFO')
  }
}

export default { state, getters, mutations, actions }