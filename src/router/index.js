import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from '../components/home/home.vue';
import index from '../components/home/child/index.vue';  // 首页
import inhand from '../components/home/child/inhand.vue';//手捧鲜花
import giftlist from '../components/home/child/giftlist.vue';//礼盒鲜花
import businesslist from '../components/home/child/businesslist.vue';//商务鲜花
import cakelist from '../components/home/child/cakelist.vue';//蛋糕预定
import pottinglist from '../components/home/child/pottinglist.vue';//绿植盆栽
import creativity from '../components/home/child/creativity.vue';//创意礼品
import packlist from '../components/home/child/packlist.vue';//包装辅料
import shoplist from '../components/home/child/shoplist.vue';//品牌店家

import arealist from '../components/home/child/arealist.vue';//地区选择
import search from '../components/home/child/search.vue';//搜索
import carousel from '../components/goods/carousel.vue';   // 商品详情
import evaluate from '../components/goods/evaluate.vue';//评价列表
import shopinfo from '../components/goods/shopinfo.vue';//店铺地址详情
import inshop from '../components/goods/inshop.vue';//进入店铺详情
import goodslist from '../components/goods/goodslist.vue';//商品展示


import category from '../components/category/category.vue';//分类


import find from '../components/find/find.vue';//发现


import cart from '../components/cart/cart.vue';//购物车


import mine from '../components/mine/mine.vue';//我的



export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/',
          redirect: '/index',
        },
        {
          path: '/index',
          component: index,
        },
        {
          path: '/inhand',
          component: inhand,
        },
        {
          path: '/giftlist',
          component: giftlist,
        },
        {
          path: '/businesslist',
          component: businesslist,
        },
        {
          path: '/cakelist',
          component: cakelist,
        },
        {
          path: '/pottinglist',
          component: pottinglist,
        },
        {
          path: '/creativity',
          component: creativity,
        },
        {
          path: '/packlist',
          component: packlist,
        },
        {
          path: '/shoplist',
          component: shoplist,
        },
      ],
    },
    {
      path: '/category',
      component: category,
    },
    {
      path: '/find',
      component: find,
    },
    {
      path: '/cart',
      component: cart,
    },
    {
      path: '/mine',
      component: mine,
    },
     {
      path: '/arealist',
      component: arealist,
    },
    {
      path: '/search',
      component: search,
    },
     {
      path: '/carousel/:carouselId',
      name: 'carousel',
      component: carousel,
    },
    {
      path: '/evaluate/:evaluateId',
      component: evaluate,
    },
    {
      path: '/shopinfo/:shopinfoId',
      component: shopinfo,
    },
    {
      path: '/goodslist/:goodslistId',
      name:'goodslist',
      component: goodslist,
    }, 
    {
      path: '/inshop/:inshopId',
      name: 'inshop',
      component: inshop,
    },
  ]
})
