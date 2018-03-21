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
import inshop from '../components/goods/inshop.vue';//进入店铺详情
import goodslist from '../components/goods/goodslist.vue';//商品展示


import category from '../components/category/category.vue';//分类
import hand from '../components/category/child/hand.vue';  // 手捧鲜花
import giftbox from '../components/category/child/giftbox.vue'; // 礼盒鲜花
import business from '../components/category/child/business.vue';//商务鲜花
import cake from '../components/category/child/cake.vue';//蛋糕预定
import potting from '../components/category/child/potting.vue';//绿植盆栽
import gift from '../components/category/child/gift.vue';//创意礼品
import pack from '../components/category/child/pack.vue';//包装辅料
import shop from '../components/category/child/shop.vue';//品牌店家
import ordinary from '../components/category/child/ordinary.vue';//普通店家



import find from '../components/find/find.vue';//发现
import todayfocus from '../components/find/child/todayfocus.vue';//今日聚焦详情
import pictureinfo from '../components/find/child/pictureinfo.vue';//今日聚焦图片详情
import flowerwiki from '../components/find/child/flowerwiki.vue';//鲜花百科
import flowerinfo from '../components/find/child/flowerinfo.vue';//鲜花百科详情


import cart from '../components/cart/cart.vue';//购物车
import confirmorder from '../components/cart/child/confirmorder.vue';//确认订单
import checkstand from '../components/cart/child/checkstand.vue';//收银台


import mine from '../components/mine/mine.vue';//我的
import register from '../components/mine/child/register.vue';//注册
import forgetpassword from '../components/mine/child/forgetpassword.vue';//忘记密码
import membercenter from '../components/mine/child/membercenter.vue';//会员中心
import myorder from '../components/mine/child/myorder.vue';//我的订单
import allorder from '../components/mine/child/allorder.vue';//全部订单
import obligation from '../components/mine/child/obligation.vue';//待付款
import notyetshipped from '../components/mine/child/notyetshipped.vue';//待发货
import waitforreceiving from '../components/mine/child/waitforreceiving.vue';//待收货
import evaluation from '../components/mine/child/evaluation.vue';//待评价
import evaluationofgoods from '../components/mine/child/evaluationofgoods.vue';//评价商品
import mycoupon from '../components/mine/child/mycoupon.vue';//我的优惠券
import service from '../components/mine/child/service.vue';//客服与帮助
import addressmanagement from '../components/mine/child/addressmanagement.vue';//收货地址管理
import thenewaddress from '../components/mine/child/thenewaddress.vue';//新建地址
import fixAddress from '../components/mine/child/fixAddress.vue';//修改地址


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
      children: [
        {
          path: '/',
          redirect: '/hand',
        },
        {
          path: '/hand',
          component: hand,
        },
        {
          path: '/giftbox',
          component: giftbox,
        },
        {
          path: '/business',
          component: business,
        },
        {
          path: '/cake',
          component: cake,
        },
        {
          path: '/potting',
          component: potting,
        },
        {
          path: '/gift',
          component: gift,
        },
        {
          path: '/pack',
          component: pack,
        },
        {
          path: '/shop',
          component: shop,
        },
        {
          path: '/ordinary',
          component: ordinary,
        },
      ],
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
      path: '/membercenter',
      component: membercenter,
    },
     {
      path: '/register',
      component: register,
    },
    {
      path: '/forgetpassword',
      component: forgetpassword,
    },
    {
      path: '/evaluationofgoods',
      component: evaluationofgoods,
    },
    {
      path: '/mycoupon',
      component: mycoupon,
    },
    {
      path: '/service',
      component: service,
    },
    {
      path: '/addressmanagement',
      component: addressmanagement,
    },
    {
      path: '/thenewaddress',
      component: thenewaddress,
    },
    {
      path: '/fixAddress',
      component: fixAddress,
    },
    {
      path: '/myorder',
      component: myorder,
      children: [
        {
          path: '/',
          redirect: '/allorder',
        },
        {
          path: '/allorder',
          component: allorder
        },
        {
          path: '/obligation',
          component: obligation,
        },
        {
          path: '/notyetshipped',
          component: notyetshipped,
        },
        {
          path: '/waitforreceiving',
          component: waitforreceiving,
        },
        {
          path: '/evaluation',
          component: evaluation,
        }
      ]
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
      path: '/goodslist/:goodslistId',
      name: 'goodslist',
      component: goodslist,
    },
    {
      path: '/inshop/:inshopId',
      name: 'inshop',
      component: inshop,
    },
    {
      path: '/todayfocus',
      component: todayfocus,
    },
    {
      path: '/pictureinfo/:pictureinfoId',
      name: 'pictureinfo',
      component: pictureinfo,
    },
    {
      path: '/flowerwiki',
      component: flowerwiki,
    },
    {
      path: '/flowerinfo/:flowerinfoId',
      name: 'flowerinfo',
      component: flowerinfo,
    },
    {
      path: '/confirmorder',
      component: confirmorder,
    },
    {
      path: '/checkstand',
      component: checkstand,
    },
  ]
})
