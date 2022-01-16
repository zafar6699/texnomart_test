import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../pages/layouts/default.vue"
            ),
        meta: {
            auth: true,
        },
        children: [
            {
                path: "",
                name: "index",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/index"
                    );
                },
            },
            {
                path: "form",
                name: "form",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/form"
                    );
                },
            },
            {
                path: "user",
                name: "user",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/user"
                    );
                },
            },
            {
                path: "user/create",
                name: "user-create",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/user/create"
                    );
                },
            },
            {
                path: "user/:id",
                name: "user-edit",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/user/_edit"
                    );
                },
            },
            {
                path: "test",
                name: "test",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/test"
                    );
                },
            },
            {
                path: "test/create",
                name: "test-create",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/test/create"
                    );
                },
            },
            {
                path: "test/start",
                name: "test-start",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/test/start"
                    );
                },
            },
            {
                path: "test/result",
                name: "test-result",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/test/result"
                    );
                },
            },
        ],
    },

    {
        path: "/",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../pages/layouts/empty.vue"
            ),
        children: [
            {
                path: "login",
                name: "login",
                component: function () {
                    return import(
                        /* webpackChunkName: "about" */
                        "@/pages/auth/login"
                    );
                },
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    let isAuth = to.matched.some((record) => record.meta.auth);
    let loggedIn = store.state.auth.user ? true : false;

    if (isAuth) {
        if (loggedIn) {
            next();
            return;
        }
        next({ name: `login` });
    } else {
        next();
    }
});
export default router;
