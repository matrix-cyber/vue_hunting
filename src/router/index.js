import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Situation from '../components/Situation'
import ES from '../components/ES'
import CH from '../components/CH'
import Plugin from '../components/Plugin'
import ChSetting from '../components/ChSetting'
import EsSetting from '../components/EsSetting'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/situation',
      component: Situation
    },
    {
      path: '/es',
      component: ES
    },
    {
      path: '/ch',
      component: CH
    },
    {
      path: '/plugin',
      component: Plugin
    },
    {
      path: '/setting_es',
      component: EsSetting
    },
    {
      path: '/setting_ck',
      component: ChSetting
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
