<template>
  <div>
    <div class="categoryHead">
      <span class="synthesize" @click="openContent=!openContent">
        {{rank[activeIndex]}}
        <i class="iconfont">&#xe501;</i>
      </span>
      <span class="sales">销量优先
        <i class="iconfont">&#xe6af;</i>
      </span>
      <div class="accordion" v-show="openContent">
        <ul>
          <li v-for="(item,index) in rank" :key="index" :class="{'active': activeIndex===index}" @click="activeIndex=index">{{item}}
            <i class="iconfont" v-show="activeIndex===index">&#xe64a;</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="layout">
      <div class="sideBar" v-show="tabHide">
        <router-link to="/hand">
          <span :class="{'active':$route.path =='/hand'}">手捧鲜花</span>
        </router-link>
        <router-link to="/giftbox">
          <span :class="{'active':$route.path =='/giftbox'}">礼盒鲜花</span>
        </router-link>
        <router-link to="/business">
          <span :class="{'active':$route.path =='/business'}">商务鲜花</span>
        </router-link>
        <router-link to="/cake">
          <span :class="{'active':$route.path =='/cake'}">蛋糕预定</span>
        </router-link>
        <router-link to="/potting">
          <span :class="{'active':$route.path =='/potting'}">绿植盆栽</span>
        </router-link>
        <router-link to="/gift">
          <span :class="{'active':$route.path =='/gift'}">创意礼品</span>
        </router-link>
        <router-link to="/pack">
          <span :class="{'active':$route.path =='/pack'}">包装辅料</span>
        </router-link>
        <router-link to="/shop">
          <span :class="{'active':$route.path =='/shop'}">品牌店家</span>
        </router-link>
        <router-link to="/ordinary">
          <span :class="{'active':$route.path =='/ordinary'}">普通店家</span>
        </router-link>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      change: true,
      openContent: false,
      tabHide: true,
      rank: ['综合排序', '信用', '价格由高到低', '价格由低到高'],
      activeIndex: 0,
    }
  },
}
</script>


 <style lang="less">
.categoryHead {
  width: 100%;
  height:1.013333rem;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size:.346667rem;
  color: #333;
  z-index: 9999;
  position: relative;
  position: fixed;
  .synthesize {
    width: 38.33%;
    text-align: center;
    color: #f66;
    i {
      font-size: .373333rem;
    }
  }
  .sales {
    width: 38%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: .453333rem;
    }
  }

  .accordion {
    min-width: 100%;
    height:4.853333rem;
    background-color: #fff;
    position: absolute;
    z-index: 99;
    top: .986667rem;
    ul {
      width: 100%;
      height: 100%;
      li {
        width: 100%;
        height:1.173333rem;
        border-top: 1px solid #f0f0f0;
        line-height:1.173333rem;
        padding-left:.933333rem;
        padding-right: .266667rem;
        font-size: .346667rem;
        color: #333;
        i {
          font-size: .48rem;
          float: right;
        }
      }
      .active {
        color: #ff6666;
      }
    }
  }
}

.layout {
  width: 100%;
  background-color: #fff;
  display: flex;
  position: relative;
  .sideBar {
    width: 24%;
    height: 87%;
    margin-top: 1.013333rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    padding-top: .266667rem;
    span {
      display: block;
      width: 100%;
      line-height:1.466667rem;
      color: #333;
      font-size: .4rem;
      text-align: center;
      height: auto;
      background-color: #f5f5f5;
      &.active {
        color: #f66;
        background-color: #fff;
        border-left: 2px solid #f66;
      }
    } 
  }
  .content {
    width: 76%;
    margin-top: 1.013333rem;
    padding-left: .266667rem;
    height: auto;
    position: absolute;
    right: 0px;
    overflow: auto;
    background-color: #fff;
    .right {
      flex: 1;
      height: 100%;
      margin-top: .266667rem;
      margin-left: .266667rem;
      overflow-y: auto;
    }
  }
}
</style>
