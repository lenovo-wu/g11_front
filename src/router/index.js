import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/Register'),
    meta:{title:'注册'}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login'),
    meta:{title:'登录'}
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404'), 
    meta:{title:'404-NotFound'}
  },
  {
      path:'*',
      redirect:'/404',
      hidden: true
  },
  {
    path: '/browser',
    name: 'Browser',
    component: () => import('@/views/Browser')
  },
  {
    path: '/wallpublish',
    name: 'Wallpublish',
    component: () => import('@/views/Wallpublish')
  },
]

const router = new VueRouter({
  routes
})

export default router
