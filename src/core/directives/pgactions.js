/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-12-13 15:04:57
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-14 14:13:43
 */
import Vue from 'vue'
import store from '@/store'

/**
 * Action 权限指令
 * 指令用法：
 *  - 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：
 *    <i-button v-action:add >添加用户</a-button>
 *    <a-button v-action:delete>删除用户</a-button>
 *    <a v-action:edit @click="edit(record)">修改</a>
 *
 *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
 *  - 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可
 *
 *  @see https://github.com/vueComponent/ant-design-vue-pro/pull/53
 */
const action = Vue.directive('pgaction', {
  inserted: function(el, binding, vnode) {
    const actionName = binding.arg
    if (!store.getters.pgInfo.authorities.includes(actionName)) {
      ;(el.parentNode && el.parentNode.removeChild(el)) || (el.style.display = 'none')
    }
  }
})

export default action
