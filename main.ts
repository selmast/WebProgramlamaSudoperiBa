import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./pages/index.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");