import { createRouter, createWebHistory } from 'vue-router'
import Layout from 'u-admin-component/src/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('u-admin-component/src/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
      {
        path: 'lists',
        component: () => import('u-admin-component/src/views/lists/index'),
        name: 'lists',
        meta: { title: '列表', icon: 'dashboard', affix: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
