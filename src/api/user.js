/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-12-13 11:25:30
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-15 15:33:56
 */
import request from '@/utils/request'
export function getBaseUserInfo() {
  return request({
    url: '/lvyou-user/v1/user/getAccess/26',
    method: 'get'
  })
}
