import { INCREMENT } from './types';

const mutations = {
    updateMessage(state, message) {
        state.user.user_name = message;
    },

    [INCREMENT]() {
        console.log('increment');
    },

    decrement(state, payload) {
        console.log('decrement', payload);
    }
};

export default mutations;
