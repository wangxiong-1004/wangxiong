import store from './store';

const routes = [
    ...store,
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "index" */ '@/views/Home.vue'),
        meta: {}
    }, {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {}
    }, {
        path: '*',
        redirect: () => '/home'
    }
];

export default routes;
