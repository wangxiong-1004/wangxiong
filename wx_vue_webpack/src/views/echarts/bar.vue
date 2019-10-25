<template>
  <div class="bar">
    <div id="main" ref="myCharts" style="width: 100%; height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'bar',

  computed: {
    charts() {
      return echarts.init(this.$refs.myCharts)
    }
  },

  mounted() {
    this.charts.setOption({
      title: {
        show: true, // 是否显示标题
        text: ['{a|柱状图}', '标题'].join(''), // 标题名称
        link: 'https://www.echartsjs.com/zh/option.html#title', // 标题链接
        target: 'blank', // 打开方式 blank/self
        textStyle: {
          color: '#ccc',
          fontStyle: 'italic', // normal/italic/oblique
          fontWeight: 'bold',
          fontFamily: 'Arial',
          fontSize: 20,
          lineHeight: 30,
          rich: {
            a: {
              color: 'red',
              fontSize: 18,
              fontFamily: 'Microsoft YaHei',
              borderColor: '#449933',
              borderRadius: 4,
              borderWidth: 1
            }
          }
        },
        borderWidth: 2,
        borderColor: '#119933',
        borderRadius: 5
      },
      legend: {
        bottom: '20px',
        right: '20px',
        data: ['销量']
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }
}
</script>

<style scoped lang="scss">

</style>
