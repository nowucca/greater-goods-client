import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store, { CART_STORAGE_KEY } from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const cartString = localStorage.getItem(CART_STORAGE_KEY)
    if (cartString) {
      const cartData = JSON.parse(cartString)
      this.$store.commit('SET_CART', cartData)
    }
  }
}).$mount('#app')
