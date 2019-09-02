import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history', // history | hash
    routes,
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active' // 精确激活的默认的 class
    // base: '/webapp/' // 应用的基路径
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }

    if (to.matched.some(record => record.meta.is_check_token)) {
        if (store.state.TOKEN) {
            next();
        } else {
            if (to.name === 'login') {
                next();
                return;
            }

            next({
                name: 'login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    }

    next();
});

export default router;
