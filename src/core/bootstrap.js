/*
 * @Descripttion: 
 * @Author: shenqiang
 * @Date: 2021-11-08 09:48:05
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-11-08 11:25:07
 */
import store from '@/store'
import storage from 'store'
import {
  ACCESS_TOKEN
  // APP_LANGUAGE,
  // TOGGLE_CONTENT_WIDTH,
  // TOGGLE_FIXED_HEADER,
  // TOGGLE_FIXED_SIDEBAR, TOGGLE_HIDE_HEADER,
  // TOGGLE_LAYOUT, TOGGLE_NAV_THEME, TOGGLE_WEAK,
  // TOGGLE_COLOR, TOGGLE_MULTI_TAB
} from '@/store/mutation-types'
// import { printANSI } from '@/utils/screenLog'
// import defaultSettings from '@/config/defaultSettings'

export default function Initializer () {
  // printANSI() // 请自行移除该行.  please remove this line

  // 1.设置默认的布局方式，基座中无用
  // store.commit(TOGGLE_LAYOUT, storage.get(TOGGLE_LAYOUT, defaultSettings.layout))
  // 2.设置默认的导航是否固定，基座中无用
  // store.commit(TOGGLE_FIXED_HEADER, storage.get(TOGGLE_FIXED_HEADER, defaultSettings.fixedHeader))
  // 3.设置默认的侧边导航是否无用，基座中无用
  // store.commit(TOGGLE_FIXED_SIDEBAR, storage.get(TOGGLE_FIXED_SIDEBAR, defaultSettings.fixSiderbar))
  // 4.设置内容布局方式，有流体和固定两种，且仅当导航布局为topmenu时生效，基座中无用
  // store.commit(TOGGLE_CONTENT_WIDTH, storage.get(TOGGLE_CONTENT_WIDTH, defaultSettings.contentWidth))
  // 5.设置自动隐藏头部导航，基座中无用
  // store.commit(TOGGLE_HIDE_HEADER, storage.get(TOGGLE_HIDE_HEADER, defaultSettings.autoHideHeader))
  // 6.设置默认的导航主题，基座中无用
  // store.commit(TOGGLE_NAV_THEME, storage.get(TOGGLE_NAV_THEME, defaultSettings.navTheme))
  // 7.色盲模式开启，基座中无用
  // store.commit(TOGGLE_WEAK, storage.get(TOGGLE_WEAK, defaultSettings.colorWeak))
  // 8.设置主题色
  // store.commit(TOGGLE_COLOR, storage.get(TOGGLE_COLOR, defaultSettings.primaryColor))

  // store.commit(TOGGLE_MULTI_TAB, storage.get(TOGGLE_MULTI_TAB, defaultSettings.multiTab))
  // 设置token
  store.commit('SET_TOKEN', storage.get(ACCESS_TOKEN))
  // 设置多语言，目前不考虑多语言
  // store.dispatch('setLang', storage.get(APP_LANGUAGE, 'en-US'))
  // last step
}
