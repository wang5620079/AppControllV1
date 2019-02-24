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
            style="width: 230px"
            mode="multiple"
            @change="handleappinfoChange"
            :filterOption="filterOption"
          >
            <a-select-option :value=appinfo.id v-for="appinfo in appinfos" :key="appinfo.id">{{appinfo.appname}}
            </a-select-option>
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
            mode="multiple"
            style="width: 230px"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handledeplomentChange"
            :filterOption="filterOption"
            :value="selecteddpls"
          >
            <a-select-option :value=deployment.id v-for="deployment in deploymentoptions" :key="deployment.id">
              {{deployment.name}}
            </a-select-option>
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
    <!--穿梭框-->
    <div>
      <a-transfer
        :dataSource="nodesdata"
        showSearch
        :listStyle="{
      width: '305px',
      height: '300px',
    }"
        :operations="['to right', 'to left']"
        :targetKeys="targetnodes"
        @change="handlenodesChange"
        :render="item=>`${item.title}-${item.description}`"
      >
        <span
          slot="notFoundContent"
        >
      请选择节点
    </span>
      </a-transfer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CtrlScopeCmp',
  data () {
    return {
      form: this.$form.createForm(this),
      appinfos: [],
      deploymentoptions: [],
      selecteddpls: [],
      nodesdata: [],
      targetnodes: []
    }
  },
  mounted: function () {
    var me = this
    this.axios.post('http://127.0.0.1/queryrandapppnames').then((response) => {
      me.appinfos = response.data.appinfos
      console.log(response.data)
    })
  },
  methods: {
    handleappinfoChange (value) {
      console.log('**************handleappinfoChange***************')
      var me = this
      console.log(`selected ${value}`)
      // 如果什么选项都没选，就清空部署选择框及其已选的值
      if (value.length === 0) {
        this.deploymentoptions = []
        this.selecteddpls = []
        return
      }
      // 如果有选择就设置部署下拉框的选项及已选的值
      this.axios.post('http://127.0.0.1/querydevelopment', JSON.stringify(value)).then((response) => {
        me.deploymentoptions = response.data.data
        console.log(response.data.data)
        console.log(me.selecteddpls)
        // 如果没有已选项，就返回
        if (me.selecteddpls.length === 0) {
          return
        }
        // 如果有已选项，且已选项中有deploymentoptions没有的选项A，那就把已选的这个选项A删除掉
        let tmparr = []
        let depoptsids = []
        for (var item of me.deploymentoptions) {
          depoptsids.push(item.id)
        }
        me.selecteddpls.forEach((item, index) => {
          if (!depoptsids.includes(item)) {
            tmparr.push(item)
          }
        })
        tmparr.forEach((item, index) => {
          me.selecteddpls.splice(me.selecteddpls.indexOf(item), 1)
        })
      })
    },
    handledeplomentChange (value) {
      console.log('**************handledeplomentChange***************')
      console.log(value)
      console.log(this.selecteddpls)
      this.selecteddpls = value
      console.log(this.selecteddpls)
    },
    handleBlur () {
      console.log('blur')
    },
    handleFocus () {
      console.log('focus')
    },
    onChange (e) {
      for (let idx in this.appinfos) {
        let tmp = this.appinfos[idx]
        if (tmp.id === e.target.value) {
          console.log(tmp.state)
        }
      }
    },
    filterOption (input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      // return option.componentOptions.propsData.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
