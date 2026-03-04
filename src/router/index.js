import { createRouter, createWebHistory } from "vue-router";
import DespesaView from "../views/DespesaView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/despesas',
        name: 'Despesas',
        component: DespesaView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;