<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Actions',

  methods: {
    ...mapActions([
      'decrement'
    ]),

    // 模块
    ...mapActions('logs', {
      aliasIncrement: 'incrementSync'
    }),

    increment() {
      this.$store.dispatch('increment', 2)
    },

    setIncrement() {
      this.$store.dispatch('logs/setIncrement')
    }
  },

  created() {
    this.decrement({
      count: 10
    })

    this.aliasIncrement()
  }
}
</script>

<style scoped>

</style>
