<template>
    <div>
        <h2>router</h2>
        <router-link :to="{ name: 'router', params: { id: 1 },query: { name: 'zhangsan' } }">router1
        </router-link>
        <router-link :to="{ name: 'router', params: { id: 2 } }">router2</router-link>

        <router-link :to="{ name: 'home' }" replace>home</router-link>

        <hr>
<!--        <router-link tag="li" to="/about" append>  append: 相对于当前路径后添加 -->
        <router-link tag="li" to="/about">
<!--            新页面打开路由 -->
            <a target="_blank">about</a>
        </router-link>
        <router-view></router-view>

        <hr>
        <button @click="goBack">goBack</button>
        <button @click="newPage">新页面打开</button>
    </div>
</template>

<script>
export default {
    name: 'Router',

    computed: {
        id() { // params
            return this.$route.params.id;
        },

        name() { // query
            return this.$route.query.name;
        }
    },

    created() {
        console.log(this.id);
    },

    // 进入同路由的时候调用
    beforeRouteUpdate(to, from, next) {
        console.log(to);
        console.log(from);
        console.log(this.id);
        console.log(this.name);

        next();
    },

    // 离开当前导航前调用
    // 注： 打开同名路由不会调用，打开的链接在新页面也不会调用
    beforeRouteLeave(to, from, next) {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!');

        if (answer) {
            console.log('leave this page');
            next();
        } else {
            next(false);
        }
    },

    watch: {
        $route(to, from) {
            console.log('watch', to);
            console.log('watch', from);
        }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },

        newPage() { // 新页面打开路由
            const routeUrl = this.$router.resolve({
                path: '/state',
                query: {
                    name: '小明'
                }
            });

            window.open(routeUrl.href, '_blank');
        },

        /*
         * push: 添加
         * replace: 替换
         */
        toPage() { // 路由跳转
            this.$router.push({
                name: 'home'
            });
        }
    }
};
</script>

<style scoped>

</style>
