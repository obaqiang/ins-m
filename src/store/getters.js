/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-11-08 09:48:05
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-13 14:26:09
 */
const getters = {
  isMobile: state => state.app.isMobile,
  lang: state => state.app.lang,
  theme: state => state.app.theme,
  color: state => state.app.color,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.name,
  welcome: state => state.user.welcome,
  roles: state => state.user.roles,
  pgInfo: state => state.pangu.pgInfo,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  pgAddRouters: state => state.pgper.pgAddRouters,
  multiTab: state => state.app.multiTab
}

export default getters
