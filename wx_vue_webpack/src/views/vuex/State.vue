<template>
    <div>
        <div>
            <h3>user</h3>
            <pre>{{ user }}</pre>
        </div>
        <div>
            <h3>log</h3>
            <pre>{{ log }}</pre>
            <pre>user_log: {{ userLog }}</pre>
        </div>
    </div>
</template>

<script>
import { mapState, createNamespacedHelpers } from 'vuex';

const { mapState: logState } = createNamespacedHelpers('logs');

export default {
    name: 'State',

    computed: {
        // 获取根state
        ...mapState({
            user: state => state.user
        }),

        // 获取module下的state
        ...mapState('logs', [
            'log'
        ]),

        ...logState(['userLog'])
    }
};
</script>

<style scoped lang="scss">

</style>
