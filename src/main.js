// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import store from './store'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'ant-design-vue/dist/antd.css'
require('./mock')

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Antd)
Vue.use(VueAxios, axios)

moment.locale('zh-cn')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data () {
    return {
      locale: zhCN
    }
  }
})
