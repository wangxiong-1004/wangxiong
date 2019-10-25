const store = [
  {
    path: '/state',
    component: () => import(/* webpackChunkName: "vuex" */ '@/views/vuex/State.vue')
  }, {
    path: '/mutations',
    component: () => import(/* webpackChunkName: "vuex" */ '@/views/vuex/Mutations.vue')
  }, {
    path: '/actions',
    component: () => import(/* webpackChunkName: "vuex" */ '@/views/vuex/Actions.vue')
  }
]

export default store
