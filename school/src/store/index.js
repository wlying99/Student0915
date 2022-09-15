import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'http://localhost:7003/api/',
    isLogin:false,
    userInfo: {},
  },
  mutations: {
    update(state, [key, value]) {
      state[key] = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
