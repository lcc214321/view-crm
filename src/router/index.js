import Router from 'vue-router'
import routes from './routers'

const router = new Router({
  base: process.env.BASE_URL,
  routes,
  mode: 'history'
})

export default router
