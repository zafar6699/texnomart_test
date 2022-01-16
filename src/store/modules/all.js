import Vue from "vue";

// local state
const state = {
    isLoading: false,
};

const mutations = {
    loading(state, data) {
        state.isLoading = data;
    },
};

const actions = {};

const getters = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
