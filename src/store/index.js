import { createStore } from "vuex";
import system from "./system";
import user from "./user";
const store = createStore({
    modules: {
        system,
        user,
    },
});

export default store;