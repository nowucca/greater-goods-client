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

<style lang="scss" scoped>
.hero-box {
  @include flex(column);
  @include align-items(center);
  width: 300px;
  height: 300px;
  background-color: $background-1;

  border: 3px solid $border-1;
  padding: 20px;

  h3 {
    margin-top: 2em;
    font-size: 20px;
    color: $ci-3;
    font-weight: bold;
  }

  i {
    width: 8em;
    height: 3em;
    font-size: 3rem;
    text-align: center;
    color: $ci-3;
  }

  span {
    margin-top: 1.5em;
    font-size: 20px;
    width: 75%;
    text-align: center;
    color: $ci-3;
    font-weight: lighter;
  }
}
</style>
