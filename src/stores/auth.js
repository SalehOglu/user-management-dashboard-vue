import { defineStore } from 'pinia'
import { mockLogin } from '@/services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('access_token'),
    accessToken: localStorage.getItem('access_token') || null,
    refreshToken: localStorage.getItem('refresh_token') || null,
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    loading: false,
    error: null,
  }),
  actions: {
    async login(email, password) {
      this.loading = true
      this.error = null
      try {
        const data = await mockLogin(email, password)
        this.isAuthenticated = true
        this.accessToken = data.access
        this.refreshToken = data.refresh
        this.user = data.user

        localStorage.setItem('access_token', data.access)
        localStorage.setItem('refresh_token', data.refresh)
        localStorage.setItem('user', JSON.stringify(data.user))
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.isAuthenticated = false
      this.accessToken = null
      this.refreshToken = null
      this.user = null
      this.error = null

      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('user')
    },

    updateUserProfile(profileData) {
      this.user = { ...this.user, ...profileData }
      localStorage.setItem('user', JSON.stringify(this.user))
    },
  },
})
