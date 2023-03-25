import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
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
      component: ()=>import('../views/Login.vue')

    },

    {
      path: '/register',
      name: 'register',
      component: ()=>import('../views/Register.vue')

    },

    {
      path: '/edit',
      name: 'edit',
      component: ()=>import('../views/EditInfo.vue')

    },

    {
      path: '/about',
      name: 'about',

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
      children:[
        {
          path: '/category',
          name: 'category',
          component: () => import('../views/CategoryView.vue')
        }
      ]

    },

    {
      path: '/info',
      name: 'info',
      component: ()=>import('../views/AccountInform.vue')

    },

  ]
})

export default router
