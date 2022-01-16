import Vue from "vue";

// local state
const state = {
    resultData: [],
    tests: [],
};

const mutations = {
    CHANGE_RESULT_DATA(state, data) {
        state.resultData = data;
    },
    CHANGE_TEST(state, data) {
        state.tests = [...state.tests, ...data];
    },
    DELETE_QUESTION(state, index) {
        state.tests.splice(index, 1);
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
