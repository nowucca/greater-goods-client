<template>
  <div>
    <p>We're sorry that page cannot be found on this site.</p>
    <router-link
      :to="{
        name: 'home'
      }"
    >
      <button class="normal2xButton">Continue</button>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 30px;
}

div a button {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
