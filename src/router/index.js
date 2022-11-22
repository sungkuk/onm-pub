import Vue from 'vue'
import VueRouter from 'vue-router'
import PbList from '@/views/PbList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PbList',
    component: PbList
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/views/Layout.vue')
  },
  {
    path: '/headerTop',
    name: 'HeaderTop',
    component: () => import('@/components/HeaderTop.vue')
  },
  {
    path: '/footerBottom',
    name: 'FooterBottom',
    component: () => import('@/components/FooterBottom.vue')
  },
  {
    path: '/sideBar',
    name: 'SideBar',
    component: () => import('@/components/SideBar.vue')
  },
  // {
  //   path: '/noticeList',
  //   name: 'NoticeList',
  //   component: () => import('@/components/NoticeList.vue')
  // },
  // {
  //   path: '/errorList',
  //   name: 'ErrorList',
  //   component: () => import('@/components/ErrorList.vue')
  // },
  {
    path: '/allMenu',
    name: 'AllMenu',
    component: () => import('@/components/AllMenu.vue')
  },
  {
    path: '/agGrid',
    name: 'AgGrid',
    component: () => import('@/components/AgGrid.vue')
  },
  {
    path: '/SampleAgGrid',
    name: 'SampleAgGrid',
    component: () => import('@/components/SampleAgGrid.vue')
  },
  // {
  //   path: 'moSearch/ModalMobileSearch',
  //   name: '/ModalMobileSearch',
  //   component: () => import('@/components/moSearch/ModalMobileSearch.vue')
  // },
  {
    path: '/Modal',
    name: 'Modal',
    component: () => import('@/components/Modal.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_010',
    name: 'ONM_IA_ADM_SUP_010',
    component: () => import('@/views/ONM_IA_ADM_SUP_010.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_020',
    name: 'ONM_IA_ADM_SUP_020',
    component: () => import('@/views/ONM_IA_ADM_SUP_020.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_030',
    name: 'ONM_IA_ADM_SUP_030',
    component: () => import('@/views/ONM_IA_ADM_SUP_030.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_031',
    name: 'ONM_IA_ADM_SUP_031',
    component: () => import('@/views/OnmIaAdmSup031.vue')
  },

  
  {
    path: '/test',
    name: 'Test',
    component: () => import(
      /* webpackChunkName: "about" */ '@/views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


