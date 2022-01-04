/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-12-13 10:22:36
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-15 16:14:30
 */
// import { getBaseUserInfo } from '@/api/user'
// import { getBaseUserInfo } from '@/api/pangu'
import { testInfo } from '@/api/test'
import storage from 'store'
const panguUser = {
  state: {
    pgInfo: {}
  },
  mutations: {
    SET_PGINFO: (state, info) => {
      state.pgInfo = info
      console.log('设置之后的pageInfo', state.pgInfo)
    }
  },
  actions: {
    /**
     * @description: 获取盘古系统的用户信息
     * @params {*}
     * @return {*}
     * @param {*} commit
     */

    GetPanguInfo({ commit }) {
      return new Promise((resolve, reject) => {
        testInfo()
          .then(response => {
            storage.set('pgInfo', JSON.stringify(response.body))
            commit('SET_PGINFO', response.body)

            // const result = response.result

            // if (result.role && result.role.permissions.length > 0) {
            // const role = result.role
            // role.permissions = result.role.permissions
            // role.permissions.map(per => {
            //   if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
            //     const action = per.actionEntitySet.map(action => {
            //       return action.action
            //     })
            //     per.actionList = action
            //   }
            // })
            // role.permissionList = role.permissions.map(permission => {
            //   return permission.permissionId
            // })
            // commit('SET_ROLES', response.body)
            // commit('SET_INFO', result)
            // } else {
            //   reject(new Error('getInfo: roles must be a non-null array !'))
            // }

            // commit('SET_NAME', { name: result.name, welcome: welcome() })
            // commit('SET_AVATAR', result.avatar)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
export default panguUser
