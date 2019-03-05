export default {
  state: {
    show: 1,
    display: 1
  },
  // computed(),用 $store.getters.not_show 来触发
  getters: {
    notShow: state => {
      return !state.show
    }
  },
  // mutations 多个state的操作,用 $store.commit('changeShowState') 来触发
  mutations: {
    changeShowState (state) {
      state.show = state.show ? 0 : 1
    },
    changeDisplayState (state) {
      state.display = state.show ? 0 : 1
    }
  },
  // actions 多个mutations的操作,用 $store.dispatch('changeShowDisplayState') 来触发
  actions: {
    changeShowDisplayState (context) {
      context.commit('changeShowState')
      context.commit('changeDisplayState')
    }
  }
}
