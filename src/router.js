import { createRouter, createWebHistory } from 'vue-router';
import ProductAll from './pages/ProductAll.vue';
import HomePage from './pages/HomePage.vue';
import ShowProduct from './pages/ShowProduct.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutUs,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactUs,
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: NotFound,
    },
    {
        path: '/products',
        name: 'products',
        component: ProductAll,
    },
    {
        path: '/product/:slug',
        name: 'product-show',
        component: ShowProduct,
    }
     
    
  ]
});

export { router };