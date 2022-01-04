<!--
 * @Descripttion: 首页页面，用于放置个子容器
 * @Author: shenqiang
 * @Date: 2021-11-08 10:09:50
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-12-31 15:13:56
-->
<!--  -->
<template>
  <div class="">
    <div class="menu-area">
      <div class="menu-left">
        盘古
      </div>
      <div class="menu-center">
        <a-menu v-model="current" mode="horizontal" theme="dark">
          <!-- 操作中心和配置中心为订单模块内容 -->
          <a-menu-item key="res" v-pgaction:productCenter> <router-link to="/res">产品中心</router-link></a-menu-item>
          <a-menu-item key="ordsys"> <router-link to="/ordsys">销售中心</router-link></a-menu-item>
          <a-menu-item key="ord"> <router-link to="/ord">操作中心</router-link></a-menu-item>
          <a-menu-item key="fin"> <router-link to="/fin">财务中心</router-link></a-menu-item>
          <a-menu-item key="crm"> <router-link to="/crm">客商中心</router-link></a-menu-item>
          <a-menu-item v-pgaction:runCenter key="playmini">
            <router-link to="/playmini">运营中心</router-link></a-menu-item
          >
          <a-menu-item key="set"> <router-link to="/set">配置中心</router-link></a-menu-item>
        </a-menu>
      </div>
      <div class="menu-right">
        <UserInfo :currentUser="currentUser" />
      </div>
    </div>
    <!-- 页面标签 -->
    <!-- <div class="main-tab">
      <multi-tab class="tab-area"></multi-tab>
    </div> -->
    <!-- <button @click="testPrint" style="margin-top:200px;">打印</button> -->
    <!-- 子容器挂载区域 -->
    <div class="child-area">
      <div id="res"></div>
      <div id="ordsys"></div>
      <div id="fin"></div>
      <div id="crm"></div>
      <div id="playmini"></div>
    </div>
  </div>
</template>

<script>
import { start } from 'qiankun'
import UserInfo from './userinfo.vue'
import { testAgent } from '@/api/agent.js'
export default {
  name: 'Qks',
  components: {
    UserInfo
  },
  data() {
    return {
      current: ['self'],
      currentUser: {
        name: '无敌'
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    // testPrint() {
    //   window.print()
    // }
  },
  created() {},
  mounted() {
    start()
    testAgent()
  }
}
</script>
<style scoped lang="less">
.menu-area {
  display: flex;
  align-items: center;
  background: var(--menu-c1);
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  // visibility: hidden;
}
// .child-area{
//   margin-top: 60px;
// }
.menu-left {
  color: #ffffff;
  margin-left: 24px;
  font-size: 22px;
  width: 10%;
}
.menu-center {
  width: 80%;

  .ant-menu {
    background: var(--menu-c1);
  }
  .ant-menu.ant-menu-dark {
    background: var(--menu-c1) !important;
  }

  .ant-menu.ant-menu-dark .ant-menu-item-selected {
    background: var(--menu-c1) !important;
  }
  .ant-menu-item-selected::before {
    content: '';
    position: absolute;
    background: var(--mc1);
    width: 80%;
    height: 3px;
    bottom: 0;
    left: 10%;
  }
}
.menu-right {
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
  height: 60px;
  // text-align: right;
  padding-right: 26px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.main-tab {
  background: green;
  // position: absolute;
  // top: 60px;
  // left: 196px;
  width: 100%;
  padding-left: 196px;
}
</style>
