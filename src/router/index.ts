import type {  RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import ConfirmationView from "@/views/ConfirmationView.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home-view",
    component: HomeView,
    alias: ["/", "/index.html"],
  },
  {
    path: "/category",
    redirect: "/category/Fresh Produce",
  },
  {
    path: "/category/:categoryName",
    name: "category-view",
    component: CategoryView,
    props: true,
  },
  {
    path: "/cart",
    name: "cart-view",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "checkout-view",
    component: CheckoutView,
    meta: { hideNavbar: true },
  },
  {
    path: "/confirmation",
    name: "confirmation-view",
    component: ConfirmationView,
    meta: { hideNavbar: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
