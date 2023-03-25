<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  icon: string;
  id: string;
  title: string;
  byline: string;
}>();
</script>

<style lang="scss" scoped>
.hero-box {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 300px;
  background-color: var(--background-1);

  border: 3px solid var(--border-1);
  padding: 20px;

  h3 {
    margin-top: 2em;
    font-size: 20px;
    color: var(--ci-3);
    font-weight: bold;
  }

  i {
    width: 8em;
    height: 3em;
    font-size: 6rem;
    text-align: center;
    color: var(--ci-3);
  }

  span {
    margin-top: 1.5em;
    font-size: 20px;
    width: 75%;
    text-align: center;
    color: var(--ci-3);
    font-weight: lighter;
  }
}
</style>

<template>
  <div class="hero-box">
    <i :class="icon"></i>
    <h3>{{ title }}</h3>
    <span :id="id">{{ byline }}</span>
  </div>
</template>
