import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import doubleLineChart from '@/components/doubleLineChart'
import twoLinePoints from '@/components/twoLinePoints'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'doubleLineChart',
      component: doubleLineChart
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/twoLinePoints',
      name: 'twoLinePoints',
      component: twoLinePoints
    },
  ]
})
