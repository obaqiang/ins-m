<!--
 * @Descripttion: 
 * @Author: shenqiang
 * @Date: 2021-12-08 09:32:22
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-08 11:47:09
-->
<template>
  <div></div>
</template>
<script>
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'
export default {
  data() {
    return {}
  },
  methods: {
    getQueryVariable(variable) {
      var query = window.location.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        if (pair[0] === variable) {
          return pair[1]
        }
      }
      return false
    }
  },
  mounted() {
    const tk = this.getQueryVariable('user_center_tk')
    storage.set(ACCESS_TOKEN, 'Bearer ' + tk)
  }
}

// function getQueryVariable(variable) {
//   var query = window.location.search.substring(1)
//   var vars = query.split('&')
//   for (var i = 0; i < vars.length; i++) {
//     var pair = vars[i].split('=')
//     if (pair[0] === variable) {
//       return pair[1]
//     }
//   }
//   return false
// }
// const tk = getQueryVariable('user_center_tk')
// alert(tk)
// storage.set(ACCESS_TOKEN, 'Bearer ' + tk)
</script>
