import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:"/home",
      children:[
        {
          path:'home',
          name:'home',
          component:()=>import('../views/HomeView.vue')
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: Layout,
      children:[
        {
          path:'/login',
          name:'login',
          component: ()=>import('../views/LoginForm.vue')
        }
      ]

    },

    {
      path: '/about',
      name: 'about',

      component: Layout,
      children:[
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]

    },

    {
      path: '/category',
      name: 'category',
      component: Layout,
      children:[
        {
          path: '/category',
          name: 'category',
          component: () => import('../views/CategoryView.vue')
        }
      ]

    }


  ]
})

export default router
