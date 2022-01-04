/*
 * @Descripttion: 
 * @Author: shenqiang
 * @Date: 2021-10-27 14:30:51
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-10-27 14:36:46
 */
/* eslint-disable */
import { initGlobalState } from 'qiankun'
// import store from '../store/index.js'
import router from '@/router/index.js'
const initialState = {
    //用于告知主容器进行相关动作
    workType: 'nothing'
}
// 初始化 state
const actions = initGlobalState(initialState)
actions.onGlobalStateChange((state, prev) => {
    // 监听公共状态的变化
    console.log('主应用: 变更前')
    console.log(prev)
    console.log('主应用: 变更后')
    console.log(state)
    const { workType } = state
    // store.commit('SET_PROJECT_ID', state.projectId)
    const workTypes = {
        'loginSuccessJump': () => {
            // console.log('进行跳转了')

            router.push({ path: '/mainqks' })
        }
    }
    workTypes[workType] && workTypes[workType]()
})

export default actions
