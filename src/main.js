
import Vue from 'vue'
import router from './router'
import Mint from 'mint-ui'
import { getMD5 } from '@/utils/md5';
import Store from '@/store';
import { priceFilter, sexFilter } from '@/utils/filters';
import App from './App'

Vue.config.productionTip = false

Vue.use(Mint);

Vue.filter('SexState', sexFilter);
Vue.filter('PriceFilter', priceFilter);

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
