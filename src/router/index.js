import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import about from "../views/AboutPage.vue";
import product from "../views/ProductList.vue";
import contact from "../views/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/product",
    name: "product",
    component: product,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
