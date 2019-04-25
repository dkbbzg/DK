import Vue from 'vue'
import vuex from 'vuex'
import storeLogin from './store_login'
import storeUser from './store_user'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    login: storeLogin,
    user: storeUser
  }
})
