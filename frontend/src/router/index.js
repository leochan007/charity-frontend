import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index/Index.vue';

import Records from '@/pages/Records/Records.vue';

import RecordDetail from '@/pages/RecordDetail/RecordDetail.vue';

import AboutUs from '@/pages/AboutUs/AboutUs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/records',
      component: Records,
    },
    {
      path: '/recorddetail/:hash',
      component: RecordDetail,
    },
    {
      path: '/aboutus',
      component: AboutUs,
    },
  ]
})
