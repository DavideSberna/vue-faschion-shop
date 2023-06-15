import { createRouter, createWebHistory } from 'vue-router';
import ProductAll from './pages/ProductAll.vue';
import HomePage from './pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/products',
        name: 'products',
        component: ProductAll,
    }
     
    
  ]
});

export { router };