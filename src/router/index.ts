import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)


const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['../components/HelloWorld.vue'], resolve),
  }
]


export default new Router({
  routes,
})
