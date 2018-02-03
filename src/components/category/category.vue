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
      <span class="filtrate" @click="show=!show">筛选
        <i class="iconfont">&#xe672;</i>
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
      <div class="rightNav" v-show="show">
        <div class="filtrate-search">
          <input type="text" placeholder="搜索">
        </div>
        <div class="filtrate-category">
          <ul class="filtrate-box">
            <li class="filtrate-nav">
              <div class="filtrate-title">
                品牌
              </div>
              <ul>
                <li>香奈儿</li>
                <li>迪奥</li>
                <li>纪梵希</li>
                <li>圣罗兰</li>
                <li>古驰</li>
                <li>汤姆福特</li>
              </ul>
            </li>
            <li class="filtrate-nav">
              <div class="filtrate-title">
                服务和折扣
              </div>
              <ul>
                <li>包邮</li>
                <li>速递</li>
                <li>折扣</li>
              </ul>
            </li>
            <li class="filtrate-nav">
              <div class="filtrate-title">
                价格区间
              </div>
              <ul>
                <li class="priceRange">
                  <input type="number" placeholder="最低价">
                  <span></span>
                  <input type="number" placeholder="最高价">
                </li>
                <li class="textRange">
                  5-23 <br>25%的选择
                </li>
                <li class="textRange">
                  53-160<br>55%的选择
                </li>
                <li class="textRange">
                  160-500 <br>20%的选择
                </li>
              </ul>
            </li>
            <li class="filtrate-nav">
              <div class="filtrate-title">
                适合对象
              </div>
              <ul>
                <li>爱人</li>
                <li>朋友/同事</li>
                <li>老师</li>
                <li>领导/长辈</li>
                <li>病人</li>
                <li>客户</li>
              </ul>
            </li>
            <li class="filtrate-nav">
              <div class="filtrate-title">
                适合节日
              </div>
              <ul>
                <li>情人节</li>
                <li>七夕</li>
                <li>圣诞节</li>
                <li>母亲节</li>
                <li>教师节</li>
                <li>感恩节</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="filtrate-finish">
          <span>重置</span>
          <span>完成</span>
        </div>
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
      show: false,
      rank: ['综合排序', '信用', '价格由高到低', '价格由低到高'],
      activeIndex: 0,
    }
  },
}
</script>


 <style lang="less">
  .categoryHead {
  width: 100%;
  height: 38px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  color: #333;
  z-index: 9999;
  position: relative;
  position: fixed;
  .synthesize {
    width: 38.33%;
    text-align: center;
    color: #f66;
    i {
      font-size: 14px;
    }
  }
  .sales {
    width: 38%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: 17px;
    }
  }
  .filtrate {
    width: 22%;
    height: 100%;
    border-left: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: 14px;
    }
  }
  .accordion {
    min-width: 100%;
    height: 182px;
    background-color: #fff;
    position: absolute;
    z-index: 99;
    top: 37px;
    ul {
      width: 100%;
      height: 100%;
      li {
        width: 100%;
        height: 44px;
        border-top: 1px solid #f0f0f0;
        line-height: 44px;
        padding-left: 35px;
        padding-right: 10px;
        font-size: 13px;
        color: #333;
        i {
          font-size: 18px;
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
    margin-top: 38px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    padding-top: 10px;
    span {
      display: block;
      width: 100%;
      line-height: 60px;
      color: #333;
      font-size: 15px;
      text-align: center;
      height: auto;
      background-color: #f5f5f5;
      &.active {
        color: #f66;
        background-color: #fff;
        border-left: 2px solid #f66;
      }
    } // .navbar {
    //   width: 100%;
    //   // min-height: 500px;
    //   height: auto;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-around;
    //   li {
    //     width: 100%;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-around;
    //     height: auto;
    //     min-height: 50px;
    //     background-color: #f5f5f5;
    //   }
    // }
  }
  .content {
    width: 76%;
    margin-top: 38px;
    padding-left: 10px;
    height: auto;
    position: absolute;
    right: 0px;
    overflow: auto;
    background-color: #fff;
    .right {
      flex: 1;
      height: 100%;
      margin-top: 10px;
      margin-left: 10px;
      overflow-y: auto;
    }
  }
  .rightNav {
    width: 280px;
    min-height: 90%;
    background-color: #fff;
    z-index: 100;
    position: absolute;
    top: 38px;
    right: 0px;
    font-size: 12px;
    .filtrate-search {
      width: 100%;
      height: 32px;
      background-color: #fff;
      line-height: 32px;
      color: #999;
      input {
        width: 100%;
        height: 100%;
        padding-left: 20px;
      }
    }
    .filtrate-category {
      width: 100%;
      .filtrate-box {
        width: 100%;
        .filtrate-nav {
          width: 100%;
          height: 120px;
          border-top: 1px solid #f0f0f0;
          &:nth-child(2) {
            height: 76px;
          }
          .filtrate-title {
            width: 100%;
            height: 32px;
            line-height: 32px;
            padding-left: 10px;
          }
          ul {
            width: 100%;
            height: 86px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li {
              width: 28%;
              height: 35px;
              line-height: 35px;
              text-align: center;
              background-color: #f5f5f5;
              border-radius: 5px;
              color: #333;
            }
            .priceRange {
              width: 95%;
              display: flex;
              justify-content: space-around;
              padding-top: 5px;
              position: relative;
              line-height: 10px;
              span {
                display: inline-block;
                position: absolute;
                width: 20px;
                top: 16px;
                height: 2px;
                background-color: #c8c8c8;
              }
              input {
                border-radius: 5px;
                width: 95px;
                height: 25px;
                text-align: center;
              }
            }
            .textRange {
              font-size: 12px;
              padding-top: 3px;
              line-height: 15px;
            }
          }
        }
      }
    }
    .filtrate-finish {
      width: 100%;
      display: flex;
      span {
        display: block;
        width: 50%;
        height: 40px;
        background-color: #fd9596;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
        color: #fff;
        &:nth-child(2) {
          background-color: #ed4f4d;
        }
      }
    }
  }
}
</style>
