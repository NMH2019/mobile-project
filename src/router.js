// 该文件夹用于进行路由、及路由规则的相关配置

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    }
  ]
})
