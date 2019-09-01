const store = [
    {
        path: '/store',
        component: () => import(/* webpackChunkName: "index" */ '@/views/State.vue')
    }
];

export default store;
