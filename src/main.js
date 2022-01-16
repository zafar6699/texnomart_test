import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import styles
import "@/assets/styles/style.scss";

//import click-other-element
import "@/plugins/clickOut";
//import vuealidate
import "@/plugins/vuelidate";
//import v-mask
import "@/plugins/v-mask";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
