import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import "./style.css";

import App from "./App.vue";
import ProductsList from "./views/ProductsList.vue";
import ProductDetail from "./views/ProductDetail.vue";

const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ProductsList,
    },
    {
      path: "/product/:id",
      name: "detalle",
      component: ProductDetail,
      props: true,
    },
  ],
});

createApp(App).use(router).use(pinia).mount("#app");
