/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-11-09 13:53:26
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-11-10 16:32:09
 */
/* eslint-disable */
import { devsys } from './devsys.js'
import { prosys } from './prosys.js'
const isProd = process.env.NODE_ENV === 'production'
// it depend on the processEnv to choose which server
const pools = {
  toReg: isProd ? prosys : devsys
}
export default pools
