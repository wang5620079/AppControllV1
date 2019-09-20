<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <div class="logo"></div>
      <a-menu theme="dark" :defaultSelectedKeys="['3']" mode="inline" :defaultOpenKeys= "openKeys">
        <a-sub-menu
          key="sub1" @click="handleMenuClick"
        >
          <span slot="title"><a-icon type="user" /><span>参数设置</span></span>
          <a-menu-item key="1"><router-link to="/TestCmp">系统参数设置</router-link></a-menu-item>
          <a-menu-item key="2">运行参数设置</a-menu-item>
        </a-sub-menu>
        <a-sub-menu
          key="sub2"
        >
          <span slot="title"><a-icon type="user" /><span>监控情况</span></span>
          <a-menu-item key="3">url监控情况</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '720px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false,
      openKeys: ['sub1', 'sub2']
    }
  },
  methods: {
    handleMenuClick (e) {
      console.log('click', e)
    }
  }
}
</script>

<style>
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
</style>
