import Vue from 'vue'
import Vuex from 'vuex'
import ApiClient from '@/services/ApiClient.js'
import { ShoppingCart } from './models/ShoppingCart'

Vue.use(Vuex)

export const CART_STORAGE_KEY = 'cart'
export const ORDER_DETAIL_STORAGE_KEY = 'orderDetail'

export default new Vuex.Store({
  state: {
    surcharge: 500,
    categories: [],
    selectedCategoryName: '',
    selectedCategoryProducts: [],
    cart: new ShoppingCart(),
    orderDetail: null
  },

  mutations: {
    ADD_CATEGORIES(state, categories) {
      state.categories = []
      for (let i = 0; i < categories.length; i++) {
        state.categories.push(categories[i])
      }
    },

    SELECT_CATEGORY(state, categoryName) {
      state.selectedCategoryName = categoryName
    },

    DESELECT_CATEGORY(state) {
      state.selectedCategoryName = ''
    },

    SELECT_CATEGORY_PRODUCTS(state, newProducts) {
      state.selectedCategoryProducts = newProducts
    },

    SET_CART(state, cartData) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData))
      let newCart = new ShoppingCart()
      cartData.items.forEach(item => {
        newCart.addItem(item.product, item.quantity)
      })
      state.cart = newCart
    },

    ADD_TO_CART(state, product, quantity = 1) {
      state.cart.addItem(product, quantity)
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart))
    },

    UPDATE_CART(state, { product, quantity }) {
      state.cart.update(product, quantity)
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart))
    },

    CLEAR_CART(state) {
      localStorage.removeItem(CART_STORAGE_KEY)
      state.cart.clear()
    },
    SET_ORDER_DETAIL(state, orderDetail) {
      state.orderDetail = orderDetail
      sessionStorage.setItem(
        ORDER_DETAIL_STORAGE_KEY,
        JSON.stringify(orderDetail)
      )
    },
    CLEAR_ORDER_DETAIL(state) {
      sessionStorage.removeItem(ORDER_DETAIL_STORAGE_KEY)
      state.orderDetail = null
    }
  },

  actions: {
    selectCategory({ commit }, categoryName) {
      commit('SELECT_CATEGORY', categoryName)
    },

    deselectCategory({ commit }) {
      commit('DESELECT_CATEGORY')
    },

    loadCategories({ commit }) {
      return ApiClient.loadCategories()
        .then(cats => commit('ADD_CATEGORIES', cats))
        .catch(reason => {
          console.log('Error loading categories ', reason)
        })
    },

    loadProductsForSelectedCategory({ commit }) {
      var selectedCategoryName = this.state.selectedCategoryName
      return ApiClient.loadProductsForCategory(selectedCategoryName)
        .then(products => {
          commit('SELECT_CATEGORY_PRODUCTS', products)
        })
        .catch(reason => {
          console.log(
            `Error loading products for ${selectedCategoryName}`,
            reason
          )
        })
    },
    placeOrder({ commit, state }, customerForm) {
      commit('CLEAR_ORDER_DETAIL')

      return ApiClient.placeOrder({
        cart: state.cart,
        customerForm: customerForm
      }).then(orderDetail => {
        commit('CLEAR_CART')
        commit('SET_ORDER_DETAIL', orderDetail)
      })
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    updateCart({ commit }, updateDetails) {
      commit('UPDATE_CART', updateDetails)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    }
  },
  getters: {
    surcharge(state) {
      return state.surcharge
    },

    defaultCategoryName() {
      return 'Fresh Produce'
    }
  }
})
