/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-11-10 15:04:17
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-28 18:54:12
 */
/* eslint-disable */
export const devsys = [
  // 子应用注册方式
  // {
  //   name: 'res',
  //   entry: 'http://10.101.26.6:8002/res/',
  //   container: '#res',
  //   activeRule: '/res',
  //   meta: { permission: ['productCenter'] }
  // },
  // {
  //   name: 'ordsys',
  //   entry: 'http://10.101.26.6:8002/ordsys/',
  //   container: '#ordsys',
  //   activeRule: '/ordsys',
  //   meta: { permission: ['saleCenter'] }
  // },
  {
    name: 'fin',
    entry: 'http://10.101.26.6:8002/fin/',
    container: '#fin',
    activeRule: '/fin',
    meta: { permission: ['runCenter'] }
  },
  // {
  //   name: 'crm',
  //   entry: 'http://10.101.128.71:8002/crm/',
  //   container: '#crm',
  //   activeRule: '/crm',
  //   meta: { permission: ['merchantCenter'] }
  // },
  {
    name: 'playmini',
    entry: 'http://10.101.26.6:8001/playmini/',
    container: '#playmini',
    activeRule: '/playmini',
    meta: { permission: ['runCenter'] }
  }
]
