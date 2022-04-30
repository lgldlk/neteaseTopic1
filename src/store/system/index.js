import systemConfig from "@/config/system";
const state = {
    theme: "light", //使用主题默认浅色
};

const mutations = {
    setTheme(state, preload) {
        if (systemConfig.themeList.includes(preload)) {
            state.theme = preload;
        }
    },
};

const getters = {
    getTheme(state) {
        return state.theme;
    },
};

export default {
    namespaced: true,
    mutations,
    state,
    getters,
};