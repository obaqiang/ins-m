/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-12-15 16:09:38
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-15 16:10:53
 */
import request from '@/utils/request'
export function getBaseUserInfo() {
  return request({
    url: '/lvyou-user/v1/user/getBaseUserInfo',
    method: 'get'
  })
}
