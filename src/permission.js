/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-12-14 11:02:24
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-18 11:38:21
 */
import router from './router'
import store from './store'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { i18nRender } from '@/locales'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const allowList = ['login', 'register', 'registerResult', 'qks'] // no redirect allowList
const loginRoutePath = '/user/login'
// const defaultRoutePath = '/dashboard/workplace'

/**
 * @description: 本地调试模式下,保存token 的动作
 * @params {*}
 * @return {*}
 */
function doForApi() {
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      if (pair[0] === variable) {
        return pair[1]
      }
    }
    return false
  }

  const tk = getQueryVariable('tk')
  if (tk) {
    storage.set(ACCESS_TOKEN, 'Bearer ' + tk)
  }
}

router.beforeEach((to, from, next) => {
  // 仅在本地调试环境下如下操作
  if (process.env.NODE_ENV !== 'production') {
    // alert('执行')
    doForApi()
  }
  // storage.set(ACCESS_TOKEN, 'test')
  NProgress.start() // start progress bar
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`)
  /* has token */

  if (!store.getters.pgInfo.accountId) {
    store
      .dispatch('GetPanguInfo')
      .then(res => {
        console.log('GetPanguInfo', res)

        const pgInfo = res.body

        store.dispatch('GenerateRoutes', { pgInfo }).then(() => {
          // 根据roles权限生成可访问的路由表
          // 动态添加可访问路由表
          // VueRouter@3.5.0+ New API
          store.getters.pgAddRouters.forEach(r => {
            router.addRoute(r)
          })

          // 请求带有 redirect 重定向时，登录自动重定向到该地址
          const redirect = decodeURIComponent(from.query.redirect || to.path)

          if (to.path === redirect) {
            // set the replace: true so the navigation will not leave a history record
            next({ ...to, replace: true })
          } else {
            // 跳转到目的路由
            next({ path: redirect })
          }
          // next({ ...to, replace: true })
        })
      })
      .catch(err => {
        console.log(err)
        notification.error({
          message: '错误',
          description: '请求用户信息失败，请重试'
        })
        // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
        store.dispatch('Logout').then(() => {
          next({ path: loginRoutePath, query: { redirect: to.fullPath } })
        })
      })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
