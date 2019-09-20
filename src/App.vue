<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo"/>
      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['1']"
        :inlineCollapsed="collapsed"
        :defaultOpenKeys="['servicectrl']"
        @click="handleClick"
      >
        <a-sub-menu key="syssetup">
          <span slot="title"><a-icon type="folder" /><span>系统设置</span></span>
          <a-menu-item key="paramsetting"><router-link to="/TestCmp">参数设置</router-link></a-menu-item>
          <a-menu-item key="runtimesetting"><router-link to="/runtimesetting">运行设置</router-link></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="servicectrl">
          <span slot="title"><a-icon type="folder" /><span>URL监控</span></span>
          <a-menu-item key="monitorstatus"><router-link to="/monitorstatus">监控情况</router-link></a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>

export default {
  name: 'App',
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
    handleClick (e) {
      console.log('click', e)
    },
    titleClick (e) {
      console.log('titleClick', e)
    }
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    }
  }
}
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, .2);
    margin: 16px;
  }
</style>
