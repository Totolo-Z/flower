
import Vue from 'vue';
import router from './router';
import VueResource from 'vue-resource' 
import Vant from 'vant';
import Mint from 'mint-ui';
import FastClick from 'fastclick';
import { getMD5 } from '@/utils/md5';
import Store from '@/store';

import { priceFilter, sexFilter } from '@/utils/filters';
import App from './App';

Vue.config.productionTip = false;

FastClick.attach(document.body);


Vue.use(VueResource);
Vue.use(Vant);
Vue.use(Mint);

Vue.filter('SexState', sexFilter);
Vue.filter('PriceFilter', priceFilter);

import '../src/assets/js/flexible';
import 'vant/lib/vant-css/index.css';
import 'mint-ui/lib/style.css';
import '../static/font/iconfont.css';

import '../static/css/index.css';

new Vue({
  el: '#app',
  router,
  store: Store,
  components: { App },
  template: '<App/>'
})
