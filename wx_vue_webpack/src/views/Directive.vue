<template>
  <div class='directive' v-cloak>
    <!-- 内置指令 -->
    <p v-text='msg'></p>

    <p v-html='msg2'></p>

    <input type='text' v-model='val' />
    <div>{{ val }}</div>

    <div v-once>{{ val }}</div>

    <div v-show='isShow'>v-show</div>

    <div v-if='num < 5'>num &lt; 5</div>
    <div v-else-if='num < 10'>5 &lt; num &lt; 10</div>
    <div v-else>num &gt; 10</div>

    <div v-for='item in arr' :key='item'>{{ item }}</div>

    <button @click='alert'>按钮</button>

    <a :href='url'>https://www.baidu.com</a>

    <div v-pre>{{ msg }}</div>

    <HelloWorld v-slot:item></HelloWorld>

    <div v-is-show='isShow'>自定义指令</div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Directive',
  data() {
    return {
      msg: 'v-text',
      msg2: '<em>v-html</em>',
      val: 'v-model',
      isShow: true,
      num: 8,
      arr: ['width', 'height', 'background'],
      url: 'https://www.baidu.com'
    }
  },
  methods: {
    alert() {
      alert(11)
    }
  },
  components: {
    HelloWorld
  },
  directives: {
    'is-show': {
      bind(el, binding) {
        // eslint-disable-next-line no-param-reassign
        el.style.display = binding.value ? 'block' : 'none'
      },
      update(el, binding) {
        // eslint-disable-next-line no-param-reassign
        el.style.display = binding.value ? 'block' : 'none'
      }
    }
  }
}
</script>

<style scoped lang='scss'>
[v-cloak] {
  display: none;
}
</style>
