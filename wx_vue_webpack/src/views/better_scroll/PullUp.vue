<template>
  <div class="pullup">
    <div ref="scroller" class="pullup-bswrapper">
      <div class="pullup-scroller">
        <ul class="pullup-list">
          <li
            v-for="i of data"
            :key="i"
            class="pullup-list-item"
          >{{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} `}}</li>
        </ul>
        <div class="pullup-wrapper">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span v-if="!isDone" class="pullup-txt">上拉加载更多...</span>
            <span v-else class="pullup-txt">已经到底啦！只能帮你到这里了！</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">加载中...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import BScroll from '@better-scroll/core';
// import Pullup from '@better-scroll/pull-up'

// BScroll.use(Pullup);

export default {
  name: 'PullUp',

  data() {
    return {
      isPullUpLoad: false,
      data: 30,
      isDone: false
    }
  },

  components: {},

  methods: {
    initScroll() {
      this.bscroll = new BScroll(this.$refs.scroller, {
        scrollY: true,
        pullUpLoad: true
      })

      this.bscroll.on('pullingUp', this.pullingUpHandler)
    },

    async pullingUpHandler() {
      this.isPullUpLoad = true

      await this.requestData()

      this.bscroll.finishPullUp()
      this.bscroll.refresh()
      this.isPullUpLoad = false
    },

    async requestData() {
      try {
        const newData = await this.ajaxGet(/* url */)
        this.data += newData
      } catch (err) {
        // handle err
        console.log(err)
      }
    },

    ajaxGet(/* url */) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(20)
        }, 1000)
      })
    }
  },

  created() {
    this.bscroll = null
  },

  mounted() {
    this.$nextTick(() => {
      this.initScroll()
    })
  }
}
</script>

<style scoped lang="scss">
.pullup {
  /*height: 100%;*/
  height: 500px;
  .pullup-bswrapper {
    height: 100%;
    padding: 0 10px;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  .pullup-list {
    padding: 0;
  }
  .pullup-list-item {
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid #ccc;
  }
  .pullup-wrapper {
    padding: 20px;
    text-align: center;
    color: #999;
  }
}
</style>
