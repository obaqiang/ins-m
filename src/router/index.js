/*
 * @Descripttion: 
 * @Author: shenqiang
 * @Date: 2021-11-08 09:48:05
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-17 15:40:50
 */
import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [...constantRouterMap]
})
