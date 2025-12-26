import { defineStore } from 'pinia'
import { fetchUsers as fetchUsersApi } from '@/services/api'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    loading: false,
    error: null,
    searchQuery: '',
    currentPage: 1,
    pageSize: 10,
  }),
  getters: {
    filteredUsers(state) {
      if (!state.searchQuery.trim()) {
        return state.users
      }
      const query = state.searchQuery.toLowerCase()
      return state.users.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
        return fullName.includes(query)
      })
    },
    pagginatedUsers() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.filteredUsers.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.pageSize)
    },
  },
  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      try {
        const data = await fetchUsersApi()
        this.users = data
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    setSearchQuery(query) {
      this.searchQuery = query
      this.currentPage = 1
    },
    setCurrentPage(page) {
      this.currentPage = page
    },
  },
})
