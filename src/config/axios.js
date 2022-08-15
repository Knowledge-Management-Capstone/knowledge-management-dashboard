import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default function createAxios(user) {
  if (user) {
    const { token } = user
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}
