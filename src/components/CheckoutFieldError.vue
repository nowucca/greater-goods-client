<script setup lang="ts">
import {defineProps} from "vue";
import type {BaseValidation} from "@vuelidate/core";

const props = defineProps<{
  fieldName: BaseValidation;
}>();
</script>

<style scoped>
form > .error {
  color: #f0782aff;
  text-align: right;
  font-size: 0.8em;
  font-weight: bold;
  font-style: italic;
  margin-top: 0.1em;
}
</style>

<template>
  <template v-if="fieldName.$error">
    <span
      class="error"
      v-for="error of fieldName.$errors"
      :key="error.$uid"
      >{{ error.$message }}</span
    >
  </template>
</template>
