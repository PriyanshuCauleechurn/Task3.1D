import { createRouter, createWebHistory } from 'vue-router';

import myHome from './components/views/OpeningPage';

import SecondPage from './components/HomePage';

const routes = [
    { path: '/', name: 'home', component: myHome},
    { path: '/SecondPage', name: 'SecondPage', component: SecondPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
