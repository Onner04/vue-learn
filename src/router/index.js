import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/fontend/Master.vue'),
    },
    {
      path: '/admin',
      name: 'login',
      component: () => import('../views/backend/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard.index',
      component: () => import('../views/backend/Dashboard.vue'),
    },
    {
      path: '/user',
      name: 'user.index',
      component: () => import('../views/backend/Dashboard.vue'),
    },
    {
      path: '/user/store',
      name: 'user.index',
      component: () => import('../views/backend/Dashboard.vue'),
    },
  ],
})

export default router
