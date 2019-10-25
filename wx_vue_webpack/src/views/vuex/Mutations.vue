<template>
  <div>
    <hr>
    <button @click="increment">increment</button>
    <hr>
    <button @click="decrement">decrement</button>
    <hr>
    <button @click="logSet">logSet</button>
    <hr>
    <button @click="logGetter">logGetter</button>
  </div>
</template>

<script>
import { mapMutations, createNamespacedHelpers } from 'vuex'

const { mapMutations: logMutations } = createNamespacedHelpers('logs')

export default {
  name: 'Mutations',

  methods: {
    ...mapMutations([
      'increment'
    ]),

    ...logMutations([
      'logSet'
    ]),

    decrement() {
      this.$store.commit('decrement', 2)
    },

    logGetter() {
      this.$store.commit('logs/logGetter', {
        log: 'is log'
      })
    }
  }
}
</script>

<style scoped>

</style>
