import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.userData = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return EventService.post('//localhost:3000/register', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    async login ({ commit }, credentials) {
      const { data } = await EventService.postLogin(credentials)
      commit('SET_USER_DATA', data)
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.userData
    }
  }
})
