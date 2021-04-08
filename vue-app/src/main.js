import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./bootstrap.min.css";

const app = createApp(App);

app.use(store).use(router);

app.mount("#app");
