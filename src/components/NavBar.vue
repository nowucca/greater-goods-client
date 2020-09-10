<template>
  <nav class="header-navbar" v-if="visible">
    <ul>
      <template v-for="cat in categories">
        <li :key="cat.categoryId" v-if="selectedCategoryName === cat.name" class="active">
          <router-link
            :to="{
              name: 'category',
              params: { categoryName: cat.name }
            }"
            >{{ cat.name }}</router-link
          >
        </li>
        <li :key="cat.categoryId" v-else>
          <router-link
            :to="{
              name: 'category',
              params: { categoryName: cat.name }
            }"
            >{{ cat.name }}</router-link
          >
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState(['categories', 'selectedCategoryName'])
  },
  methods: {
    ...mapActions(['selectCategory'])
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/components/NavBar';
</style>
