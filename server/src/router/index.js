import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Charts from '../pages/charts'
import Icons from '../pages/icons'
import Tables from '../pages/tables'
import swipers from '../pages/swipers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/swipers',
      name: 'swipers',
      component: swipers
    }
  ]
})
