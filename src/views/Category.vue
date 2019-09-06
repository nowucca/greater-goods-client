<template>
  <div>
    <p>
      This is the category page for category:
      {{ storeState.selectedCategoryName }}
    </p>
  </div>
</template>

<script>
import { store } from '@/store.js'

export default {
  data() {
    return {
      storeState: store.state
    }
  }
}
</script>

<style scoped></style>
