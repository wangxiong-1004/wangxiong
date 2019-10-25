<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
// eslint-disable-next-line
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Carrousel',

  components: {
    swiper,
    swiperSlide
  },

  data() {
    return {
      swiperOption: {}
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },

  mounted() {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped lang="scss">

</style>
