import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./pages/index.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.mount("#app");