// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import VueAwesomeSwiper from  'vue-awesome-swiper'
// import {swiper,swiperSlide} from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// import Swiper from 'swiper'
// Vue.use(Swiper)
// // Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{
    // 类似计算属性
    onOff:false
  },
  getters:{
    // 类似methodes

  },
  mutations:{
    getonOff(state,bol){
      state.onOff=!bol
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
  // render:c =>c(App)
})
