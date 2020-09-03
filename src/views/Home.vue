<template>
  <div>
    <section id="homeHero">
      <div class="hero-text">
        <h1>Greater Goods Grocers</h1>
        <h3>Find quality fresh groceries and help your community thrive.</h3>
      </div>
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

<style scoped>
/* The hero image */
#homeHero {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  /*linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.8)
    ),*/
  background-image: url('~@/assets/images/site/neonbrand-394691-unsplash.jpg');
  /* Position and center the image to scale nicely on all screens */
  background-position: right -290px;
  background-repeat: repeat;
  background-size: cover;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #9e9393;
  padding: 20px;
  margin-top: 40px;
  background-color: #ebf2e2;
}
.hero-text h1 {
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
