≈<!--suppress SassScssResolvedByNameOnly -->
<template>
  <div class="hero-container">
    <div class="hero-text">
      <h1>Greater Goods Grocers</h1>
      <h3>Find quality fresh groceries and help your community thrive.</h3>
    </div>
    <section class="hero-boxes">
      <HomeHeroBox
        :fa-icon="['fas', 'shopping-basket']"
        :title="'Shop'"
        :id="'shopText'"
        :byline="'Shop for fresh, quality goods that are simply greater.'"
      />

      <HomeHeroBox
        :fa-icon="['fas', 'money-bill-wave']"
        :title="'Save'"
        :id="'saveText'"
        :byline="'Save money with low prices and save Greater Goods Points for your chosen community organizations.'"
      />

      <HomeHeroBox
        :fa-icon="['fas', 'hands-helping']"
        :title="'Support'"
        :id="'supportText'"
        :byline="'Support your chosen Community organizations by donating Greater Goods Points.'"
      />
    </section>
  </div>
</template>

<script>
import HomeHeroBox from '@/components/HomeHeroBox.vue'

export default {
  components: {
    HomeHeroBox
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    this.$store.dispatch('deselectCategory')
    next()
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/Home';
</style>
