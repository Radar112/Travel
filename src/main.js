// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store/index.js'
import 'styles/reset.css'
// styles: ../../../src/assets/styles
import 'styles/border.css'
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
