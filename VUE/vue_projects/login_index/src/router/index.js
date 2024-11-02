import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LayOut from '@/views/LayOut.vue'
import AboutView from '@/views/AboutView.vue'
import index from '@/views/login/index.vue'
import telephone from '@/views/login/telephone.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/telephone',
    component: telephone
  },
  {
    path: '/LayOut',
    component: LayOut,
    children: [
      {
        path: '/home',
        component: HomeView
      },
      {
        path: '/about',
        component: AboutView
      },
      {
        path: '/contact'
      },
      {
        path: '/login',
        component: index
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
