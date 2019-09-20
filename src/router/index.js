import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import TestCmp from '@/components/TestCmp1'
import TestCmp from '@/components/TestCmp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/TestCmp',
      name: 'TestCmp',
      component: TestCmp
    }
  ]
})
