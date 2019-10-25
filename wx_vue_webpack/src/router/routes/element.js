const element = [
  {
    path: '/button',
    component: () => import(/* webpackChunkName: "element" */ '@/views/element_ui/Button.vue')
  }
]

export default element
