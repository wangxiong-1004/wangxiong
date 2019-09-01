const getters = {
    /**
     * state 局部state
     * getter 局部getters
     * rootState 根部state
     * rootGetters 根部getter
     */
    checkLog(state, getters, rootState, rootGetters) {
        return state.count + rootState.count + rootGetters.count;
    }
};

const state = {
    log: null,
    userLog: {
        user: false
    }
};

const mutations = {
    /**
     * commit('logs/getLogs')
     * state 局部state
     */
    getLogs(state) {
        state.log = {
            home: {
                header: 'this is header logs'
            }
        };
    },

    setLogs(state) {
        state.log = {};
    }
};

const actions = {
    /**
     * dispatch('logs/incrementIfOddOnRootSum')
     * context.state 局部state
     * rootState 根部state
     */
    incrementIfOddOnRootSum({
        state,
        dispatch,
        commit,
        rootState,
        rootGetters
    }) {
        if ((state.count + rootState.count) % 2 === 1 || rootGetters.someGetter) {
            commit('increment');
        }

        // 向根提交commit/actions
        dispatch('someOtherAction', null, { root: true });
        commit('someOtherCommit', null, { root: true });
    }
};

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
};
