import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/scss/main.scss";
import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

createApp(App).use(store).use(router).mount("#app");
