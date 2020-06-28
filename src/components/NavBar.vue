<template>
  <nav id="headerNav" v-if="visible">
    <ul>
      <template v-for="cat in categories">
        <li
          :key="cat.categoryId"
          v-if="selectedCategoryName === cat.name"
          class="active"
        >
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

<style scoped>
#headerNav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #5d9756;
  display: flex;

  top: 100px;
  width: 100%;
}

li:last-child {
  border-right: none;
}
#headerNav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 12px 16px;
  text-decoration: none;
}

#headerNav li a:hover {
  background-color: #487643;
}

#headerNav .active {
  background-color: #71b869;
  border-bottom: 5px solid #4a90e2;
}
</style>
