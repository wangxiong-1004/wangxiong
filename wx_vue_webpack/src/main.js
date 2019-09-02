import Vue from 'vue';
import App from './App.vue';
import router from './router/index'; // 路由
import store from './store/index'; // 数据
import './axios'; // 请求
import './directives'; // 自定义指令
import './element_ui/index'; // element-ui 按需加载

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
