import { createWebHistory, createRouter } from 'vue-router';
import productPage from './components/productPage.vue';
import apiCall from './components/apiCall.vue';
import addToCart from './components/addToCart.vue';

const routes = [{
        name: 'homePage',
        path: '/',
        component: apiCall
    },
    {
        name: 'viewProduct',
        path: '/viewProduct/:id',
        component: productPage
    },
    {
        name: 'addToCart',
        path: '/addToCart',
        component: addToCart
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;