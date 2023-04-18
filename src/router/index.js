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
        },
        
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
          component: ()=>import('../views/Login.vue')
        }
      ]
    },

    {
      path: '/info',
      name: 'info',
      component: Layout,
      children:[
        {
          path:'/info',
          name:'info',
          component: ()=>import('../views/AccountInform.vue')
        }
      ]
    },

    {
      path: '/edit',
      name: 'edit',
      component: Layout,
      children:[
        {
          path:'/edit',
          name:'edit',
          component: ()=>import('../views/EditInfo.vue')
        }
      ]
    },

    {
      path: '/register',
      name: 'register',
      component: Layout,
      children:[
        {
          path: '/register',
          name: 'register',
          component: ()=>import('../views/Register.vue')
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

    },
    {
      path: '/product',
      name: 'product',
      component: Layout,
      children:[
        {
          path: '/product',
          name: 'product',
          component: () => import('../views/ProductsView.vue')
        }
      ]

    },
    {
      path: '/item',
      name: 'item',
      component: Layout,
      children:[
        {
          path: '/item',
          name: 'item',
          component: () => import('../views/ItemView.vue')
        }
      ]
    },
    {
      path: '/itemInfo',
      name: 'itemInfo',
      component: Layout,
      children:[
        {
          path: '/itemInfo',
          name: 'itemInfo',
          component: () => import('../views/ItemInfoView.vue')
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Layout,
      children:[
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/CartView.vue')
        }
      ]
    },
    {
      path: '/orders',
      name: 'orders',
      component: Layout,
      children:[
        {
          path: '/orders',
          name: 'orders',
          component: () => import('../views/OrderView.vue')
        }
      ]
    },
    {
      path: '/orderInfo',
      name: 'orderInfo',
      component: Layout,
      children:[
        {
          path: '/orderInfo',
          name: 'orderInfo',
          component: () => import('../views/OrderInfoView.vue')
        }
      ]
    },
    {
      path: '/OrderLog',
      name: 'OrderLog',
      component: Layout,
      children:[
        {
          path: '/OrderLog',
          name: 'OrderLog',
          component: () => import('../views/OrderLog.vue')
        }
      ]

    }
  ]
})
export default router
