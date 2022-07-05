import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import('@/views/AboutUs.vue'),
  },
  {
    path: "/prices",
    name: "prices",
    component: () => import('@/views/Prices.vue'),
  },
  {
    path: "/command",
    name: "command",
    component: () => import('@/views/Command.vue'),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import('@/views/Contact.vue'),
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
