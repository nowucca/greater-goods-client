<script setup lang="ts">
import { defineProps, Ref } from "vue";
import { Validation } from "@vuelidate/core";

const props = defineProps<{
  fieldName: string;
  validator: Ref<Validation>;
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
  <template v-if="validator[fieldName].$error">
    <span
      class="error"
      v-for="error of validator[fieldName].$errors"
      :key="error.$uid"
      >{{ error.$message }}</span
    >
  </template>
</template>
