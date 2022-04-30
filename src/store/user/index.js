const state = {
    my: {
        chatTip: 2, //模拟我的界面提示
    },
};

const mutations = {};

const getters = {
    getMyTips(state) {
        let result = 0;
        for (let tmp in state.my) {
            result += state.my[tmp];
        }
        return result;
    },
};

export default {
    namespaced: true,
    mutations,
    state,
    getters,
};