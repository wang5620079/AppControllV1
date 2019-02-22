<template>
  <div>
    <div>
      <a-form
        layout="inline"
        :form="form"
      >
        <a-form-item
          label="系统名称:"
          :label-col="{ span: 6 }"
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
            <a-select-option :value=appinfo.appname v-for="appinfo in appinfos" :key="appinfo.id" >{{appinfo.appname}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="部署"
          :label-col="{ span: 10 }"
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
            @click="queryappinfos"
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
  data () {
    return {
      appinfos: [],
      form: this.$form.createForm(this)
    }
  },
  created: function () {
    var me = this
    this.axios.post('http://127.0.0.1/queryrandapppnames').then((response) => {
      me.appinfos = response.data.appinfos
      console.log(response.data)
    })
  },
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
    },
    queryappinfos () {
      var me = this
      this.axios.post('http://127.0.0.1/queryrandapppnames').then((response) => {
        me.appinfos = response.data.appinfos
        console.log(me.appinfos)
      })
    }
  }
}
</script>

<style scoped>

</style>
