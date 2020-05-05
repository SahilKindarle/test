import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import navbar from '../views/Nav.vue'
import Toilets from '../views/Toilets.vue'
import ToiletsView from '../views/ToiletsView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideNavigation: true }
  },
  {
    path: '/toilet',
    name: 'Toilets',
    component: Toilets
  },
  {
    path: '/toiletview/:id',
    name: 'ToiletsView',
    props: true,
    component: ToiletsView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router