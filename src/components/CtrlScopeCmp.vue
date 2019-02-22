<template>
  <div>
    <div>
      <a-form
        layout="inline"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item
          label="系统名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 14 }"
        >
          <a-select
            showSearch
            placeholder="请选择系统"
            optionFilterProp="children"
            style="width: 200px"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
          >
            <a-select-option value="再保收付费系统">再保收付费系统</a-select-option>
            <a-select-option value="新准备金系统">新准备金系统</a-select-option>
            <a-select-option value="联保清分系统">联保清分系统</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="部署"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 14 }"
        >
          <a-select
            showSearch
            placeholder="请选择部署方式"
            optionFilterProp="children"
            style="width: 200px"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
          >
            <a-select-option value="总部">总部</a-select-option>
            <a-select-option value="北京">北京</a-select-option>
            <a-select-option value="山东">山东</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            icon="search"
          >查询
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div>
      <p>这里配置穿梭框</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CtrlScopeCmp',
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    handleBlur () {
      console.log('blur')
    },
    handleFocus () {
      console.log('focus')
    },
    filterOption (input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  }
}
</script>

<style scoped>

</style>
