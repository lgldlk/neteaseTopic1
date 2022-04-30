import { createApp } from "vue";
import App from "./App.vue";
import "./common/js/rem"; //采用网易适配方式
import router from "./router";
import store from "./store";
createApp(App).use(store).use(router).mount("#app");