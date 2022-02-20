import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api : process.env.VUE_APP_API_URL,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
