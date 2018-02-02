import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import cacheInLocalStorage from './localCache/cacheInLocalStorage';
import cacheInSession from './localCache/cacheInSession';

Vue.use(Vuex);

const initState = {
  token: cacheInLocalStorage.get('token'),
  goodsList: cacheInLocalStorage.get('goodsList') || [],
};

export default new Vuex.Store({
  getters,
  mutations,
  state: initState,
});
