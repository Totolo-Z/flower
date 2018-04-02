import cacheInLocalStorage from './localCache/cacheInLocalStorage';
import cacheInSession from './localCache/cacheInSession';

const mutations = {
  change_token(state, token) {  // 修改登录状态
    state.token = token;
    if (token) {
      cacheInSession.set('token', token);   // 登录成功，记录响应的token
    } else {
     cacheInSession.remove('token');   // 主动退出, 清除登陆状态
    }
  },
  addGoodsCar(state, data) { 
    state.goodsList.push(data);
    if (data) {
      cacheInLocalStorage.set('goodsList', state.goodsList);   
    } else {
      cacheInLocalStorage.remove('goodsList');  
    }
  },
};

export default mutations;
