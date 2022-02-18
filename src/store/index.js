import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api : process.env.APP_VUE_API_URL,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
