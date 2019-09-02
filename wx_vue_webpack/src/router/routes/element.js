const element = [
    {
        path: '/basic',
        component: () => import(/* webpackChunkName: "element" */ '@/views/element_ui/Basic.vue')
    }
];

export default element;
