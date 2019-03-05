import Vue from 'vue'
import vuex from 'vuex'
import storeLogin from './store_login.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    login: storeLogin
  }
})
