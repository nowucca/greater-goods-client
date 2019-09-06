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
    selectedCategoryName: 'Dairy'
  },
  selectCategory(newCategory) {
    this.state.selectedCategoryName = newCategory
  },
  loadCategories() {
    ApiClient.loadCategories()
      .then(cats => (this.state.categories = cats))
      .catch(reason => {
        console.log('Error loading categories ', reason)
      })
  }
}
