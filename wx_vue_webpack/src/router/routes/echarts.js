const echarts = [
  {
    path: '/echarts/bar',
    component: () => import(/* webpackChunkName: "echarts" */ '@/views/echarts/bar.vue')
  }
]

export default echarts
