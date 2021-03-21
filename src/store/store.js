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
      // EventService.apiClient.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
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
    login ({ commit }, credentials) {
      console.log('testeo')
      return EventService.postLogin(credentials).then(({ data }) => {
        console.log(data)
        commit('SET_USER_DATA', data)
      }).catch((err) => console.log(err))
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
