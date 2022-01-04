/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-12-08 09:39:48
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-15 15:24:12
 */
import request from '@/utils/request'
export function testAgent() {
  return request({
    url: '/lvyou-user/v1/user/getAccess/26',
    method: 'get'
  })
}
