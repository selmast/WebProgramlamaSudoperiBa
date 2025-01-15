import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Import your components
import Index from '@/pages/index.vue';

import Login from '@/components/LoginForm.vue';
import ForgotPassword from "~/pages/ForgotPassword.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Index,
        //component: () => import('@/pages/index.vue'),
    },

    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: ForgotPassword,
        //component: () => import('@/pages/ForgotPassword.vue'),
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
