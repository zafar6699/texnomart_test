import Vue from "vue";
import axios from "axios";
// local state
const state = {
    user: null,
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    logout(state, user) {
        state.user = null;
    },
};

const actions = {
    async login({ commit }, user) {
        return axios
            .post("https://cdn.tujjor.org/api/user/seller/login", user)
            .then(async (res) => {
                localStorage.setItem("token", res.data.token);
                return axios({
                    method: "GET",
                    url: "https://cdn.tujjor.org/api/user/userMe",
                    headers: {
                        token: `Bearer ${localStorage.getItem("token")}`,
                    },
                }).then(async (user) => {
                    return commit("setUser", user.data.data);
                });
            })
            .catch((err) => {
                return 401;
            });
    },
    async logOut({ commit }) {
        commit("logout");
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
