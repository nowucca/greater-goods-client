import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store, { CART_STORAGE_KEY, ORDER_DETAIL_STORAGE_KEY } from './store'
import Vuelidate from 'vuelidate'
import TreeView from 'vue-json-tree-view'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(TreeView)

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
    const orderDetailString = sessionStorage.getItem(ORDER_DETAIL_STORAGE_KEY)
    if (orderDetailString) {
      const orderDetailData = JSON.parse(orderDetailString)
      this.$store.commit('SET_ORDER_DETAIL', orderDetailData)
    }
  }
}).$mount('#app')
