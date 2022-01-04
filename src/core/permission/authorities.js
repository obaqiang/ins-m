/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-12-13 13:50:12
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-14 13:57:46
 */
/*
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-12-13 13:50:12
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-13 13:53:45
 */
/**
 * <a-button v-if="$auth('form.edit')">Button</a-button>
 * @param Vue
 */
function pgPlugin(Vue) {
  if (pgPlugin.installed) {
    return
  }

  !Vue.prototype.$pgauth &&
    Object.defineProperties(Vue.prototype, {
      $pgauth: {
        get() {
          const _this = this
          return permissions => {
            const [permission] = permissions.split('.')
            const permissionList = _this.$store.getters.pgInfo.authorities
            return permissionList.find(val => {
              return val === permission
            })
          }
        }
      }
    })
}

export default pgPlugin
