/*
 * @Descripttion: 
 * @Author: shenqiang
 * @Date: 2021-11-10 15:04:40
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-11-10 15:08:56
 */
/* eslint-disable */
export const prosys = [
  // 子应用注册方式
  {
    //权限系统
    name: 'persys',
    entry: 'http://10.101.26.6:8001/persys/',
    container: '#persys',
    activeRule: '/persys'
  },
  {
    //运营平台系统
    name: 'microsys',
    entry: 'http://10.101.26.6:8001/microsys/',
    container: '#microsys',
    activeRule: '/microsys'
  },
  {
    //客商管理
    name: 'crmsys',
    entry: 'http://10.101.26.6:8001/crmsys/',
    container: '#crmsys',
    activeRule: '/crmsys'
  },
  {
    //资源系统
    name: 'ressys',
    entry: 'http://10.101.26.6:8001/ressys/',
    container: '#ressys',
    activeRule: '/ressys'
  },
  {
    //订单系统
    name: 'ordsys',
    entry: 'http://10.101.26.6:8001/ordsys/',
    container: '#ordsys',
    activeRule: '/ordsys'
  }
]
