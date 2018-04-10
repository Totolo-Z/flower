<template>
  <div>
    <!-- 头部 -->
     <div class="indexLogo">
      <img src="../../../static/images/logo.png">
      <div class="logoTitle">
        <p class="chinese">花蝴蝶</p>
        <p class="english">colorful butterfly</p>
      </div>
    </div> 
    <!-- tab栏 -->
      <div class="tab">
        <ul>
          <router-link to="/index">
            <li :class="{'active': $route.path == '/index'}">首页</li>
          </router-link>
          <li v-for="(item,index) in indexList" :key="index" @click="goInhand(item.cat_id)">{{item.cat_name}}</li>
          <router-link to="/shoplist">
            <li :class="{'active': $route.path == '/shoplist'}">品牌店家</li>
          </router-link>
        </ul>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import common from '../common/common.js';
export default {
  data() {
    return {
      indexList: []
    };
  },
  mounted() {
    this.indexData()
  },
  methods: {
    indexData() {
      this.$http.get(`${common.apihost}api/home/category/catNav`).then((res) => {
        this.indexList = res.body.data
      })
    },
    goInhand(id) {
      this.$router.push({ path: `/home/inhand/${id}` })
    }
  }
};
</script>

<style scoped lang='less'>
/* 头部 */
.indexLogo {
  width: 100%;
  height: 1.066667rem;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  margin-bottom: .133333rem;
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

/* tab栏 */

.tab {
  width: 100%;
  height: 1.04rem;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: .133333rem;
  overflow-x: auto;
  ul {
    width: 180%;
    height: 1.04rem;
    display: flex;
    justify-content: space-around;
    li {
      height: 100%;
      font-size: .346667rem;
      line-height: 1.04rem;
      color: #333;

      &.active {
        color: #f66;
        border-bottom: 3px solid #f66;
      }
    }
    &:first-child {
      margin-left: .133333rem;
    }
  }
}
</style>
