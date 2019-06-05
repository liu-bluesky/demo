import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/index/login/login'
import index from '../views/index'
import contents from '../components/index/content/contents'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path:'/contents',
      name:'contents',
      component:contents
    },
  ]
})
