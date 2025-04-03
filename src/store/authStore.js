import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const correctPassword = '123456' // 根据需求设置的密码

  // 验证密码
  const authenticate = (password) => {
    if (password === correctPassword) {
      isAuthenticated.value = true
      return true
    }
    return false
  }

  // 登出
  const logout = () => {
    isAuthenticated.value = false
  }

  return {
    isAuthenticated,
    authenticate,
    logout
  }
})
