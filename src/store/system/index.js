import systemConfig from "@/config/system";
const state = {
    theme: "light", //使用主题默认浅色,
    localCache: {
        liveTip: true,
    },
    oneRem: 100,
};

const mutations = {
    setTheme(state, preload) {
        if (systemConfig.themeList.includes(preload)) {
            state.theme = preload;
        }
    },
    setOneRem(state, preload) {
        state.oneRem = preload;
    },
};

const getters = {
    getTheme(state) {
        return state.theme;
    },
    getLocalCache(state) {
        return state.localCache;
    },
    getOneRem(state) {
        return state.oneRem;
    },
};

export default {
    namespaced: true,
    mutations,
    state,
    getters,
};