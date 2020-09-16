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
            >{{ cat.name }}
          </router-link>
        </li>
        <li :key="cat.categoryId" v-else>
          <router-link
            :to="{
              name: 'category',
              params: { categoryName: cat.name }
            }"
            >{{ cat.name }}
          </router-link>
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
@import 'src/styles/variables';

.header-navbar {
  --navbar-background: #5d9756;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--navbar-background);
    display: flex;

    top: 100px;
    width: 100%;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 12px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: var(--ci-1-darker-1);
    border-bottom: var(--ci-1-darker-1);
  }

  &:last-child {
    border-right: none;
  }

  .active {
    background-color: var(--ci-1);
    border-bottom: 5px solid var(--ci-4);
  }
}
</style>
