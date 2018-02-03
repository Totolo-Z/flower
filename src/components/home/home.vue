<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <router-link to="/arealist">
        <div class="local">广东
          <i class="iconfont">&#xe501;</i>
        </div>
      </router-link>
      <router-link to="/search">
        <div class="search">
          <i class="iconfont">&#xe607;</i> 
        </div>
      </router-link>
    </div>
    <!-- tab栏 -->
    <div class="main">
      <div class="tab" v-show="tabHide">
        <ul>
          <router-link to="/index">
            <li :class="{'active': $route.path == '/index'}">首页</li>
          </router-link>
          <router-link to="/inhand">
            <li :class="{'active': $route.path == '/inhand'}">手捧鲜花</li>
          </router-link>
          <router-link to="/giftlist">
            <li :class="{'active': $route.path == '/giftlist'}">礼盒鲜花</li>
          </router-link>
          <router-link to="/businesslist">
            <li :class="{'active': $route.path == '/businesslist'}">商务鲜花</li>
          </router-link>
          <router-link to="/cakelist">
            <li :class="{'active': $route.path == '/cakelist'}">蛋糕预定</li>
          </router-link>
          <router-link to="/pottinglist">
            <li :class="{'active': $route.path == '/pottinglist'}">绿植盆栽</li>
          </router-link>
          <router-link to="/creativity">
            <li :class="{'active': $route.path == '/creativity'}">创意礼品</li>
          </router-link>
          <router-link to="/packlist">
            <li :class="{'active': $route.path == '/packlist'}">包装辅料</li>
          </router-link>
          <router-link to="/shoplist">
            <li :class="{'active': $route.path == '/shoplist'}">品牌店家</li>
          </router-link>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tabHide: true,
    };
  },

  // watch: {
  //   $route(newVal) {
  //     console.log(newVal);
  //     if (newVal.path !== "/index") {
  //       this.tabHide = false;
  //     }
  //   },
  // },
};
</script>

<style scoped lang='less'>
/* 头部 */

.header {
  background-color: #ff6666;
  width: 100%;
  height: 0.38rem;
  position: relative;
  .local {
    margin: 0 auto;
    width: 0.65rem;
    height: 0.38rem;
    color: #fff;
    line-height: 0.38rem;
    font-size: 0.15rem;
    text-align: center;
    i {
      font-size: 0.14rem;
    }
  }
  .search {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 0.35rem;
    height: 100%;
    color: #fff;
    line-height:0.38rem;
    text-align: center;
    i {
      font-size: 0.12rem;
      font-weight: 600;
    }
  }
}


/* tab栏 */

.tab {
  width: 100%;
  height: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 0.04rem;
  overflow-x: auto;
  ul {
    width: 180%;
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
    li {
      height: 100%;
      font-size: 0.13rem; 
      line-height: 0.4rem;
      color: #333;
      &.active {
        color: #f66;
        border-bottom: 3px solid #f66;
      }
    }
    &:first-child {
      margin-left: 10px;
    }
  }
}
</style>
