import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import Login from '../views/login/login.vue'

Vue.use(Router)


const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['../components/HelloWorld.vue'], resolve),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]


export default new Router({
  routes,
})
