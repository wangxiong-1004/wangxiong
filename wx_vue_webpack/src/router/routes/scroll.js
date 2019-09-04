const scroll = [
    {
        path: '/scroll',
        component: () => import(/* webpackChunkName: "vuex" */ '@/views/better_scroll/Scroll.vue')
    }, {
        path: '/pullup',
        component: () => import(/* webpackChunkName: "vuex" */ '@/views/better_scroll/PullUp.vue')
    }
];

export default scroll;
