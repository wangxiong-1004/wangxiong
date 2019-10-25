<template>
  <div class="about">
    <h1>This is an about page -- {{ msg }} -- {{ TOKEN }}</h1>
    <hr>
    <div>user_tel: {{ $store.state.tel }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'about',

  data() {
    return {
      msg: ['hello ', 'world']
    }
  },

  computed: {
    ...mapState(['TOKEN'])
  }
}
</script>
