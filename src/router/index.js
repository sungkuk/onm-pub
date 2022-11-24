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
    path: '/design',
    name: 'Design',
    component: () => import('@/views/Design.vue')
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
    path: '/Layout',
    name: 'Layout',
    component: () => import('@/views/Layout.vue')
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
    path: '/OnmIaAdmSup030P',
    name: 'OnmIaAdmSup030P',
    component: () => import('@/views/ONM_IA_ADM_SUP_030_P.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_040',
    name: 'ONM_IA_ADM_SUP_040',
    component: () => import('@/views/ONM_IA_ADM_SUP_040.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_060',
    name: 'ONM_IA_ADM_SUP_060',
    component: () => import('@/views/ONM_IA_ADM_SUP_060.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_070',
    name: 'ONM_IA_ADM_SUP_070',
    component: () => import('@/views/ONM_IA_ADM_SUP_070.vue')
  },
  {
    path: '/OnmIaAdmSup070P',
    name: 'OnmIaAdmSup070P',
    component: () => import('@/views/ONM_IA_ADM_SUP_070_P.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_080',
    name: 'ONM_IA_ADM_SUP_080',
    component: () => import('@/views/ONM_IA_ADM_SUP_080.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_090',
    name: 'ONM_IA_ADM_SUP_090',
    component: () => import('@/views/ONM_IA_ADM_SUP_090.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_100',
    name: 'ONM_IA_ADM_SUP_100',
    component: () => import('@/views/ONM_IA_ADM_SUP_100.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_110',
    name: 'ONM_IA_ADM_SUP_110',
    component: () => import('@/views/ONM_IA_ADM_SUP_110.vue')
  },
  {
    path: '/ONM_IA_ADM_SUP_120',
    name: 'ONM_IA_ADM_SUP_120',
    component: () => import('@/views/ONM_IA_ADM_SUP_120.vue')
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


