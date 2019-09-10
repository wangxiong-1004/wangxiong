import store from './store';
import element from './element';
import router from './router';
import scroll from './scroll';
import swiper from './swiper';

const routes = [
    ...store,
    ...element,
    ...router,
    ...scroll,
    ...swiper,
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "index" */ '@/views/Home.vue'),
        meta: {
            title: 'this is a home page'
        }
    }, {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
            title: 'this is a about page'
        }
    }, {
        path: '/directive',
        name: 'directive',
        component: () => import(/* webpackChunkName: 'directive' */ '@/views/Directive.vue'),
        meta: {
            title: 'this is a directive page',
            is_check_token: true
        }
    }, {
        path: '/css',
        name: 'css',
        component: () => import(/* webpackChunkName: 'css' */ '@/views/Css.vue')
    }, {
        path: '/star',
        name: 'star',
        component: () => import(/* webpackChunkName: 'css' */ '@/views/StarExample.vue')
    }, {
        path: '/',
        redirect: () => '/home'
    }
];

export default routes;
