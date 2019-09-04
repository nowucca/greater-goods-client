<template>
  <div>
    <Header />
    <NavBar
      :categories="categories"
      :category-name="categoryName"
      v-on:change-category="$emit('change-category', $event)"
    />

    <section id="heroBoxes">
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
        :byline="
          'Save money with low prices and save Greater Goods Points for your chosen community organizations.'
        "
      />

      <HomeHeroBox
        :fa-icon="['fas', 'hands-helping']"
        :title="'Support'"
        :id="'supportText'"
        :byline="
          'Support your chosen Community organizations by donating Greater Goods Points.'
        "
      />
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

import HomeHeroBox from '@/components/HomeHeroBox.vue'

export default {
  components: {
    Header,
    NavBar,
    Footer,
    HomeHeroBox
  },
  props: ['categories', 'categoryName'],
  beforeRouteUpdate: function(to, from, next) {
    this.$emit('category-change', to.params.name)
    next()
  }
}
</script>

<style scoped>
/* The hero image */
#homeHero {
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 700px;
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url('~@/assets/site/neonbrand-394691-unsplash.jpg');
  /* Position and center the image to scale nicely on all screens */
  background-position: left -250px;
  background-repeat: repeat;
  background-size: cover;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-text h1 {
  margin-top: 40px;
  font-size: 60px;
  color: #303216;
}

.hero-text h3 {
  margin-top: 20px;
  font-size: 20px;
  color: #303216;
}

#heroBoxes {
  width: 100%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
}
</style>
