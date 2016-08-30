import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      //component: require('../views/Home')
      component: (resolve) => {
      	require(['../views/Home'], resolve)
      }
    },
    {
      path: '/detail',
      name:'detail',
      component: (resolve) => {
      	require(['../views/mall/detail/index'], resolve)
      }
    }
  ]
})