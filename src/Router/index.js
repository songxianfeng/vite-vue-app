import {createRouter, createWebHashHistory} from "vue-router";

import vue_calculator from "../components/vue_calculator.vue";
import second_page from "../components/second_page.vue";

const routes = [
    {
        path: "/",
        name: "second",
        component: second_page
    },
    {
        path: "/calculator",
        name: "calculator",
        component: vue_calculator
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router