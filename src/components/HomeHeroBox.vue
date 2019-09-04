<template>
  <div class="heroBox">
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

<style scoped>
.heroBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: white;
  border: 3px solid #9e9393;
  padding: 20px;
}

.heroBox i {
  width: 100px;
  height: 40px;
  font-size: 3rem;
  text-align: center;
  color: #303216;
}

.heroBox h3 {
  margin-top: 30px;
  font-size: 20px;
  color: #303216;
  font-weight: bold;
}

.heroBox span {
  margin-top: 30px;
  font-size: 20px;
  width: 75%;
  text-align: center;
  color: #303216;
  font-weight: lighter;
}
</style>
