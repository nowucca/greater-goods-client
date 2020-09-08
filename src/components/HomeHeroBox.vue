<template>
  <div class="hero-box">
    <font-awesome-icon :icon="faIcon" size="2x"></font-awesome-icon>
    <h3>{{ title }}</h3>
    <span :id="id">{{ byline }}</span>
  </div>
</template>

<script>
export default {
  props: {
    faIcon: {
      type: Array,
      default() {
        return []
      }
    },
    id: {
      type: String
    },
    title: {
      type: String
    },
    byline: {
      type: String
    }
  }
}
</script>

<style lang="scss">
@import 'src/styles/components/HomeHeroBox';
</style>
