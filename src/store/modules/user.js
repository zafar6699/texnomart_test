import Vue from "vue";

// local state
const state = {
    users: [],
};

const mutations = {
    CHANGE_USER(state, data) {
        state.users.push(data);
    },
    DELETE_USER(state, index) {
        state.users.splice(index, 1);
    },
    EDIT_USER(state, data) {
        state.users.splice(data.index, 1, data.data);
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
