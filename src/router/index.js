import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ServiceCtrlCmp from '@/components/ServiceCtrlCmp'
import StepServiceCtrlCmp from '@/components/Step_ServiceCtrl_Cmp'
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
      path: '/servicectrlcmp',
      name: 'servicectrl',
      component: ServiceCtrlCmp,
      children: [
        {
          path: 'testcmp',
          name: 'testcmp',
          component: TestCmp
        }
      ]
    },
    {
      path: '/step_servicectrl_cmp',
      name: 'step_servicectrl_cmp',
      component: StepServiceCtrlCmp
    }
  ]
})
