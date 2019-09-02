/**
 * READYME.js -- 模板文件
 *
 * 1.全局指令
 * 2.局部指令
 * 3.指令代码提取
 * 4.指令全局注册以及使用
 * 5.binding参数解释
 **/

/*
 * 全局指令写在main.js下
 *
 * 使用方式 <div v-show-hide=""></div>
 * show-hide 指令名称
 */
Vue.directive('show-hide', {
    bind() {},
    inserted() {},
    update() {},
    componentUpdated() {},
    unbind() {}
});

// bind和update触发同行为，不管其他钩子写法
Vue.directive('show-hide', () => {});


/*
 * 局部指令写在.vue文件下
 *
 */
export default {
    directives: {
        'show-hide': {
            bind() {},
            inserted() {},
            update() {},
            componentUpdated() {},
            unbind() {}
        }
    }
};


/*
 * 指令提取成文件写法
 */
export default {
    // 指令第一次绑定到元素时调用，做绑定的准备工作
    // 比如添加事件监听器，或是其他只需要执行一次的复杂操作
    bind(el, binding, vnode) {
        console.log(el); // 指令所绑定的元素，可以用来直接操作 DOM
        console.log(binding); // 一个对象，包含以下属性name，value，oldValue，expression，arg和modifiers
        console.log(vnode); // Vue 编译生成的虚拟节点
    },
    // 被绑定标签的父节点加入 DOM 时立即触发
    inserted(el, binding, vnode) {
        console.log(el);
        console.log(binding);
        console.log(vnode);
    },
    // 根据获得的新值执行对应的更新
    // 对于初始值也会调用一次
    update(el, binding, vnode, oldVnode) {
        console.log(el);
        console.log(binding);
        console.log(vnode);
        console.log(oldVnode); // 上一个虚拟节点，仅在update和componentUpdated钩子函数中可用
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用，一般使用 update
    componentUpdated(el, binding, vnode, oldVnode) {
        console.log(el);
        console.log(binding);
        console.log(vnode);
        console.log(oldVnode);
    },
    // 做清理操作
    // 比如移除bind时绑定的事件监听器
    unbind(el, binding, vnode) {
        console.log(el);
        console.log(binding);
        console.log(vnode);
    }
};

/*
 * 提取后的指令注册以及使用
 *
 * 详见index.js
 */
// 注册
import showHide from './show-hide';

Vue.directive('show-hide', showHide);

// 使用 main.js
import './directives/index.js';

/*
 * binding参数说明：
 *
 * name：指令名，不包括 v- 前缀
 * value：指令的绑定值，例如：v-my-custom-directive="1 + 1" 中，绑定值为 2
 * oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用
 * expression：字符串形式的指令表达式。例如 v-my-custom-directive="1 + 1" 中，表达式为 "1 + 1"
 * arg：传给指令的参数，可选。例如 v-my-custom-directive:foo 中，参数为 "foo"
 * modifiers：一个包含修饰符的对象。例如：v-my-custom-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }
 */
