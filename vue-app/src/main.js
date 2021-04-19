import { createApp } from "vue";
import router from "./router";
import store from "./store";

import "./bootstrap.min.css";

import App from "./App.vue";
import Loader from "./components/shared/Loader";
import Message from "./components/shared/Message";

const app = createApp(App);

app.component("app-loader", Loader);
app.component("app-message", Message);

app.use(store).use(router);

app.mount("#app");
