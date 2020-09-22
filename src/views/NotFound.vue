<template>
  <div>
    <p>We're sorry that page cannot be found on this site.</p>
    <router-link
      :to="{
        name: 'home'
      }"
    >
      <button class="normal-2x-button">Continue</button>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 1.9em;
}

div a button {
  margin-top: 1.9em;
  margin-bottom: 1.9em;
}
</style>
