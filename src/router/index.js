import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/mainLayout/index.vue";
const routes = [{
    path: "/",

    component: Layout,
    redirect: "/home",
    children: [{
            path: "/home",
            name: "home",
            component: () =>
                import ("../views/home/index.vue"),
        },
        {
            path: "/discover",
            name: "discover",
            component: () =>
                import ("../views/discover/index.vue"),
        },
        {
            path: "/fair",
            name: "fair",
            component: () =>
                import ("../views/fair/index.vue"),
        },
        {
            path: "/my",
            name: "my",
            component: () =>
                import ("../views/my/index.vue"),
        },
    ],
}, ];

const router = createRouter({
    history: createWebHistory(""),
    routes,
});

export default router;