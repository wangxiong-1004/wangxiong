<template>
  <div class="home">
    <img alt="Vue logo" :src="logoImage" />
    <HelloWorld msg="Welcome to Your Vue.js App" v-show-hide="true" />---
    <pre>{{ log }}</pre>
    <button @click="setLogs">setLog</button>

    <hr />
    <div>
      user_name: {{ userName }}
      <input type="text" v-model="userName" />
    </div>

    <router-link :to="{ name: 'router', params: { id: 1 } }">router1</router-link>
    <router-link :to="{ name: 'router', params: { id: 2 } }">router2</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, createNamespacedHelpers } from 'vuex'
import logoImage from '@assets/logo.png'
import HelloWorld from '@/components/HelloWorld.vue'

const { mapState: logState } = createNamespacedHelpers('logs')

export default {
  name: 'home',

  computed: {
    ...mapState('logs', ['log']),
    ...logState(['log']),
    userName: {
      get() {
        return this.$store.state.user.user_name
      },

      set(value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },

  data() {
    return {
      logoImage
    }
  },

  created() {
    this.$store.commit('logs/getLogs')
  },

  methods: {
    setLogs() {
      this.$store.commit('logs/setLogs')
    }
  },

  components: {
    HelloWorld
  }
}
</script>
