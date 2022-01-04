/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-11-08 09:48:05
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-13 11:30:52
 */
import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import pangu from './modules/pangu'
// default router permission control
// import permission from './modules/permission'
import pgper from './modules/pgper'

// dynamic router permission control (Experimental)
// import permission from './modules/async-router'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    pgper,
    pangu
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
