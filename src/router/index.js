import Router from 'vue-router'
import routes from './routers'

const router = new Router({
  base: 'view-crm',
  routes,
  mode: 'history'
})

export default router
