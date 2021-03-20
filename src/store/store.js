import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.userData = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios.post('//localhost:3000/register', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    login ({ commit }, credentials) {
      return axios.post('//localhost:3000/login', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
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
