<script setup lang="ts">
import { defineProps } from "vue";
import { PriceFormatter } from "@/utils";

const props = defineProps<{
  amount: number;
}>();

</script>

<style></style>
<template>
  <span>{{ PriceFormatter.format(amount / 100.0) }}</span>
</template>
