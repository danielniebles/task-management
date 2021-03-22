import axios from 'axios'
import store from '@/store/store.js'

export const apiClient = axios.create({
  baseURL: `http://localhost:3000`
})

export default {
  postLogin: credentials => apiClient.post('/auth/signin', credentials),
  getTasks: () => apiClient.get('/tasks'),
  setAuthToken: () => {
    const token = store.state.userData.accessToken
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }
}
