import axios from 'axios'
import { AuthResponse } from '../models/response/AuthResponse'

export const API_URL = 'http://localhost:5000/api'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

// this interceptor can inject token to every query from frontend
$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

// this interceptor can to process first 401 status from response and refresh our access token id its die
$api.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (error) {
        console.log('пользователь не авторизован')
        // rewrite to env variables
        window.location.href = 'http://localhost:3000/'
      }
    }
    throw error
  },
)

export default $api
