import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    server: "http://localhost:5000"
  },
  mutations: {
    setServer (state, server){
      state.server = server
    },
  },
  actions: {
  },
  modules: {
  }
})
