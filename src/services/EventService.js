import axios from 'axios'
import { mapState } from 'vuex'
import store from '@/store/store.js'

export const apiClient = axios.create({
  baseURL: `http://localhost:3000`
})

export default {
  ...mapState(['userData']),
  postLogin: credentials => apiClient.post('/login', credentials),
  getEvents: () => apiClient.get('/dashboard'),
  setAuthToken: () => {
    console.log('verga')
    // console.log(store.userData.token)
    const token = store.state.userData.token
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      console.log('Test')
    }
  }
}
