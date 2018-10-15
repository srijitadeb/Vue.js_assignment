import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import exSix from '@/components/exSix'
//import exSeven from '@/components/exSeven'
import exEight from '@/components/exEight'
import exNine from '@/components/exNine'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import Stocks from '@/components/stocks/Stocks.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/exSix',
      name: 'exSix',
      component: exSix
    },
    {
      path: '/exEight',
      name: 'exEight',
      component: exEight
    },
    {
      path: '/exNine',
      name: 'exNine',
      component: exNine
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    }
    // {
    //   path: '/exSeven',
    //   name: 'exSeven',
    //   component: exSeven
    // }

  ]
})
