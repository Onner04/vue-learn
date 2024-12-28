
import { createRouter, createWebHistory } from 'vue-router'
import authMiddleware from '@/middleware/authMiddleware.js'
import loginMiddleware from '@/middleware/loginMiddleware'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/fontend/Master.vue'),
    },
    {
      path: '/admin',
      name: 'login',
      component: () => import('../views/backend/LoginView.vue'),
      meta: {middleware:[loginMiddleware]},
    },
    {
      path: '/dashboard',
      name: 'dashboard.index',
      component: () => import('../views/backend/Dashboard.vue'),
      meta: { middleware: [authMiddleware]},
    },
    // product
    {
      path: '/admin/product',
      name: 'product.home',
      component: () => import('../views/backend/product/Home.vue'),
      meta: { middleware: [authMiddleware]},
    },
    {
      path: '/admin/product/create',
      name: 'product.create',
      component: () => import('../views/backend/product/Store.vue'),
      meta: { middleware: [authMiddleware]},
    },
    {
      path: '/admin/product/update/:id(\\d+)',
      name: 'product.update',
      component: () => import('../views/backend/product/Store.vue'),
      meta: { middleware: [authMiddleware]},
    },
    {
      path: '/admin/product/delete/:id(\\d+)',
      name: 'product.delete',
      component: () => import('../views/backend/product/Delete.vue'),
      meta: { middleware: [authMiddleware]},
    },

    // category
    // {
    //   path: '/admin/category',
    //   name: 'category.home',
    //   component: () => import('../views/backend/category/Home.vue'),
    //   meta: { middleware: [authMiddleware]},
    // },
    // {
    //   path: '/admin/category/create',
    //   name: 'category.create',
    //   component: () => import('../views/backend/category/Store.vue'),
    //   meta: { middleware: [authMiddleware]},
    // },
    // {
    //   path: '/admin/category/update/:id(\\d+)',
    //   name: 'category.update',
    //   component: () => import('../views/backend/category/Store.vue'),
    //   meta: { middleware: [authMiddleware]},
    // },
    // {
    //   path: '/admin/category/delete/:id(\\d+)',
    //   name: 'category.delete',
    //   component: () => import('../views/backend/category/Delete.vue'),
    //   meta: { middleware: [authMiddleware]},
    // },
    
    // category-child
    // {
    //   path: '/admin/category-child',
    //   name: 'category-child.home',
    //   component: () => import('../views/backend/category-child/Home.vue'),
    //   meta: { middleware: [authMiddleware]},
    // },
    // {
    //   path: '/admin/category-child/create',
    //   name: 'category-child.create',
    //   component: () => import('../views/backend/category-child/Store.vue'),
    //   meta: { middleware: [authMiddleware]},
    // },
    // {
    //   path: '/admin/category-child/update/:id(\\d+)',
    //   name: 'category-child.update',
    //   component: () => import('../views/backend/category-child/Store.vue'),
    //   meta: { middleware: [authMiddleware]},
    // },
    // {
    //   path: '/admin/category-child/delete/:id(\\d+)',
    //   name: 'category-child.delete',
    //   component: () => import('../views/backend/category-child/Delete.vue'),
    //   meta: { middleware: [authMiddleware]},
    // },


  ],
})

router.beforeEach((to , from , next) => {
  if(to.meta.middleware){
    const middleware = to.meta.middleware
    middleware.forEach(middleware => middleware(to , from , next))
  }else{
    next()
  }
})

export default router
