<!--
 * @Descripttion: 
 * @Author: shenqiang
 * @Date: 2021-11-29 19:31:31
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-11-30 11:14:15
-->
<!--  -->
<template>
  <div class="user-area">
    <a-icon :type="!fullscreen ? 'fullscreen' : 'fullscreen-exit'" class="full-icon" @click="screen" />
    <a-dropdown placement="bottomRight">
      <span class="avatar-area">
        <a-avatar
          size="small"
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          class="avatar"
        />
        <span class="avater-name">{{ currentUser.name }}</span>
      </span>
      <!-- <template v-slot:overlay>
        <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
          <a-menu-item v-if="menu" key="center" @click="handleToCenter">
            <a-icon type="user" />
            {{ $t('menu.account.center') }}
          </a-menu-item>
          <a-menu-item v-if="menu" key="settings" @click="handleToSettings">
            <a-icon type="setting" />
            {{ $t('menu.account.settings') }}
          </a-menu-item>
          <a-menu-divider v-if="menu" />
          <a-menu-item key="logout" @click="handleLogout">
            <a-icon type="logout" />
            {{ $t('menu.account.logout') }}
          </a-menu-item>
        </a-menu>
      </template> -->
    </a-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      default: () => null
    },
    menu: {
      type: Boolean,
      default: true
    }
  },
  name: 'UserInfo',
  components: {},
  data() {
    return {
      fullscreen: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    screen() {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  },
  created() {},
  mounted() {
    // this.screen()
  }
}
</script>
<style scoped>
.user-area {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.full-icon {
  margin-right: 34px;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
}
.avater-area {
  display: flex;
  align-items: center;
  cursor: pointer;
  min-width: 200px;
}
.avater-name {
  color: #ffffff;
  font-size: 12px;
  display: inline-block;
  margin-left: 8px;
}
</style>
