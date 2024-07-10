import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '@/views/homePage/homePage'
import companyDetail from '@/views/companyDetail/companyDetail'
import contactUs from '@/views/contactUs/contactUs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage,
    meta: {
      title: 'Marcopolo Robotics'
    }
  },
  {
    path: '/detail/:id',
    name: 'companyDetail',
    component: companyDetail,
    meta: {
      title: 'Marcopolo Robotics'
    }
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: contactUs,
    meta: {
      title: 'Marcopolo Robotics'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
  window.scrollTo(0, 0)
})

export default router
