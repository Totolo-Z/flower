<template>
  <div>
   <div class="categoryLogo">
            <img src="../../../static/images/logo.png">
            <div class="logoTitle">
                <p class="chinese">花蝴蝶</p>
                <p class="english">colorful butterfly</p>
            </div>
    </div>
    <div class="layout"> 
      <div class="sideBar" v-show="tabHide">
        <ul>
          <li v-for="(item,index) in navlist" :key="index" :class="{'active':selectIndex === item.cat_id}" @click="goHand(item.cat_id)">
              <span>{{item.cat_name}}</span>
          </li>
          <li>
            <router-link to="/shop">
              <span :class="{'active':$route.path=='/shop'}">品牌店家</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ordinary">
              <span :class="{'active':$route.path=='/ordinary'}">普通店家</span>
            </router-link> 
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
     <navcomponent> </navcomponent>
  </div>
</template> 
<script>
import common from '../common/common.js';
import navcomponent from '../subcomponents/navcomponent.vue';
export default {
  data() {
    return {
      selectIndex: 0,
      change: true,
      openContent: false,
      tabHide: true,
      rank: ['综合排序', '信用', '价格由高到低', '价格由低到高'],
      activeIndex: 0,
      navlist: {}
    }
  },
  mounted() {
    this.navListData()
  },
  methods: {
    navListData() {
      this.$http.get(`${common.apihost}api/home/category/catNav`).then((res) => {
        this.navlist = res.body.data
      })
    },
    goHand(id){
      this.selectIndex = id;
      this.$router.push({path:`/category/hand/${id}`})
    }
  },
   components: { 
        navcomponent
    }
}
</script>


 <style lang="less">
.categoryLogo {
  width: 100%;
  height: 1.066667rem;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  position: fixed;
  z-index: 2;
  img {
    width: .62rem;
    height: .62rem;
    margin-right:.133333rem;
  }
  .logoTitle {
    .chinese {
      font-size: .373333rem;
      line-height: .4rem;
      font-family: KaiTi;
      color: #666;
    }
    .english {
      font-size: .333333rem;
      font-family: KaiTi;
      color: #ccc;
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
    margin-top:1.066667rem;
    background-color: #fff;
    position: fixed;
    padding-top: .266667rem;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      li {
        width: 100%;
        line-height: 1.466667rem;
        span {
          display: block;
          width: 100%;
          line-height: 1.466667rem;
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
    }
  }
  .content {
    width: 76%;
    margin-top:1.066667rem;
    padding-left: .266667rem;
    height: auto;
    position: absolute;
    right: 0px;
    overflow: auto;
    background-color: #fff;
    margin-bottom: 1.333333rem;
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
