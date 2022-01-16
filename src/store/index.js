import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

//modules
import test from "./modules/test";
import auth from "./modules/auth";
import all from "./modules/all";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        test,
        auth,
        all,
    },
    plugins: [createPersistedState()],
});
