const router = [
  {
    path: '/router/:id',
    component: () => import(/* webpackChunkName: "router" */ '@/views/router/Router.vue'),
    name: 'router'
  }
]

export default router
