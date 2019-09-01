import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import logs from './modules/logs';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    mutations,
    actions,
    modules: {
        logs
    }
});

if (module.hot) {
    module.hot.accept([
        './state',
        './getters',
        './mutations',
        './actions',
        './modules/logs'
    ], () => {
        store.hotUpdate({
            state: require('./state').default,
            getters: require('./getters').default,
            mutations: require('./mutations').default,
            actions: require('./actions').default,
            modules: {
                logs: require('./modules/logs').default
            }
        });
    });
}

export default store;
