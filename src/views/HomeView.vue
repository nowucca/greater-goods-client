<!--suppress SassScssResolvedByNameOnly -->

<script>
import HomeHeroBox from "@/components/HomeHeroBox.vue";

export default {
  components: {
    HomeHeroBox,
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    this.$store.dispatch("deselectCategory");
    next();
  },
};
</script>

<style lang="scss" scoped>
/* The hero image */
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 40em;
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  /*linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.8)
    ),*/
  background-image: url("@/assets/images/site/neonbrand-394691-unsplash.jpg");
  /* Position and center the image to scale nicely on all screens */
  background-position: right -20.1em;
  background-repeat: repeat;
  background-size: cover;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 3px solid var(--border-1);
  padding: 1.4em;
  margin-top: 2.8em;
  background-color: var(--background-1);
  h1 {
    font-size: 60px;
    color: var(--ci-3);
  }
  h3 {
    margin-top: 1.4em;
    font-size: 20px;
    color: var(--ci-3);
  }
}

.hero-boxes {
  display: flex;
  flex-direction: row;;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 4em;
  margin-bottom: 2em;
}
</style>

<template>
  <div class="hero-container">
    <div class="hero-text">
      <h1>Greater Goods Grocers</h1>
      <h3>Find quality fresh groceries and help your community thrive.</h3>
    </div>
    <section class="hero-boxes">
      <i class="fas shopping-basket"></i>
      <HomeHeroBox
        :icon="'fas fa-shopping-basket'"
        :title="'Shop'"
        :id="'shopText'"
        :byline="'Shop for fresh, quality goods that are simply greater.'"
      />

      <HomeHeroBox
        :icon="'fas fa-money-bill-wave'"
        :title="'Save'"
        :id="'saveText'"
        :byline="'Save money with low prices and save Greater Goods Points for your chosen community organizations.'"
      />

      <HomeHeroBox
        :icon="'fas fa-hands-helping fa-2x'"
        :title="'Support'"
        :id="'supportText'"
        :byline="'Support your chosen Community organizations by donating Greater Goods Points.'"
      />
    </section>
  </div>
</template>
