// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}
// })

import ApiClient from '@/services/ApiClient.js'

export const store = {
  state: {
    categories: [],
    selectedCategoryName: '',
    selectedCategoryProducts: []
  },

  selectCategory(newCategory) {
    this.state.selectedCategoryName = newCategory
  },

  deselectCategory() {
    this.state.selectedCategoryName = ''
  },

  loadCategories() {
    ApiClient.loadCategories()
      .then(cats => (this.state.categories = cats))
      .catch(reason => {
        console.log('Error loading categories ', reason)
      })
  },

  loadProductsForSelectedCategory() {
    var selectedCategoryName = this.state.selectedCategoryName
    ApiClient.loadProductsForCategory(selectedCategoryName)
      .then(products => (this.state.selectedCategoryProducts = products))
      .catch(reason => {
        console.log(
          `Error loading products for ${selectedCategoryName}`,
          reason
        )
      })
  }
}
