<script setup lang="ts">
import { defineProps } from "vue";

// From https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const PriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const props = defineProps<{
  amount: number;
}>();

function formatPrice(price: number): string {
  return PriceFormatter.format(price / 100.0);
}
</script>

<style></style>
<template>
  <span>{{ formatPrice(amount) }}</span>
</template>
