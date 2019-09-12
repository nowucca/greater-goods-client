import Vue from 'vue'
import Vuex from 'vuex'
import ApiClient from '@/services/ApiClient.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    selectedCategoryName: '',
    selectedCategoryProducts: []
  },

  mutations: {
    ADD_CATEGORIES(categories) {
      this.state.categories = categories
    },
    SELECT_CATEGORY(categoryName) {
      this.state.selectedCategoryName = categoryName
    },
    DESELECT_CATEGORY() {
      this.state.selectedCategoryName = ''
    },
    SELECT_CATEGORY_PRODUCTS(newProducts) {
      this.state.selectedCategoryProducts = newProducts
    }
  },

  actions: {
    selectCategory(categoryName) {
      this.commit('SELECT_CATEGORY', categoryName)
    },

    deselectCategory() {
      this.commit('DESELECT_CATEGORY')
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
    }
  }
})

export const store = {
  state: {}
}
