import { createApp } from "vue";
import App from "./App.vue";
import "./common/js/rem"; //采用网易适配方式

import store from "./store";
createApp(App).use(store).mount("#app");