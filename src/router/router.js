import { createRouter, createWebHistory } from 'vue-router';
import HomepageView from "@/views/HomepageView.vue";

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: HomepageView,
    },
    {
        path: '/stories',
        name: 'Stories',
        component: HomepageView,
    },
    {
        path: '/about',
        name: 'About',
        component: HomepageView,
    },
    {
        path: '/guest-book',
        name: 'Guest book',
        component: HomepageView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
