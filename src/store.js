import Vue from 'vue'
import Vuex from 'vuex'
import ApiClient from '@/services/ApiClient.js'
import { ShoppingCart } from './models/ShoppingCart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    surcharge: 500,
    categories: [],
    selectedCategoryName: '',
    selectedCategoryProducts: [],
    cart: new ShoppingCart()
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

    ADD_TO_CART(state, product, quantity = 1) {
      state.cart.addItem(product, quantity)
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

    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    }
  },
  getters: {
    surcharge(state) {
      return state.surcharge
    }
  }
})
