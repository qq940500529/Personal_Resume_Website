import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router'
import './assets/main.css'

// 创建Vue应用
const app = createApp(App)

// 创建Pinia状态管理
const pinia = createPinia()
app.use(pinia)

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 使用路由
app.use(router)

// 挂载应用
app.mount('#app')
