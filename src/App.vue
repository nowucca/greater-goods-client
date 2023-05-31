<script setup lang="ts">
import AppHeader from "@/components/TheHeader.vue";
import AppFooter from "@/components/TheFooter.vue";
import AppNavBar from "@/components/TheNavBar.vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/CategoryStore";

const route = useRoute();
const categoryStore = useCategoryStore();
categoryStore.fetchCategories();
</script>
<style lang="scss">
@import "src/styles/App";
</style>

<!--suppress SassScssResolvedByNameOnly -->
<template>
	<div id="app">
		<app-header />
		<app-nav-bar :visible="route.meta.hideNavbar !== true" />
		<router-view :key="$route.fullPath" />
		<app-footer />
	</div>
</template>
