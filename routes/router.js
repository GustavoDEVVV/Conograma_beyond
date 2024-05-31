import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from '@/firebase/firebase'

import atividades from '../src/pages/atividades.vue';
import Calendario from "@/pages/calendario.vue";
import mensagem from "@/pages/mensagem.vue";
import login from "@/pages/login.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/mensagem'
    },
    {
        path: '/mensagem',
        component: mensagem
    },
    {
        path: '/atividades',
        component: atividades,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/calendario',
        component: Calendario,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: login
    }
]

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    console.log('currentUser', auth.currentUser);
    if (requiresAuth && !auth.currentUser) {
        next('/');
    } else {
        next();
    }
});



export default router