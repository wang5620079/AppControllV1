<template>
  <div>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" >
        <span slot="description">{{item.content}}</span>
      </a-step>
    </a-steps>
    <div class="steps-action">
      <a-button
        v-if="current < steps.length - 1"
        type="primary" @click="next"
      >
        下一步
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        完成
      </a-button>
      <a-button
        v-if="current>0"
        style="margin-left: 8px"
        @click="prev"
      >
        上一步
      </a-button>
    </div>
    <div class="steps-content"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'Step_ServiceCtrl_cmp',
  data () {
    return {
      current: 0,
      steps: [{
        title: '范围选定',
        content: '先选定操作范围'
      }, {
        title: '确定方案',
        content: '确定启动/停止方案'
      }, {
        title: '执行',
        content: '执行方案'
      }, {
        title: '方案验证',
        content: '验证方案执行情况'
      }]
    }
  },
  methods: {
    next () {
      this.current++
    },
    prev () {
      this.current--
    }
  }
}
</script>

<style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>
