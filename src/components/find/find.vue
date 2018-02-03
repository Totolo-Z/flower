<template>
  <div>
    <div class="findHead"> 发 现</div>
    <!-- 今日聚焦 -->
     <div class="findToday">
      <div class="focus">
        <span>今日聚焦</span>
        <router-link to="/todayfocus">
          <i class="iconfont">&#xe60a;</i>
        </router-link>
      </div>
      <div class="pic">
        <ul>
          <li v-for="(val,index) in focus" :key="index">
            <router-link :to="/pictureinfo/+index">
              <img :src="val.imgSrc">
            </router-link>
          </li>
        </ul>
      </div>
    </div> 
    <!-- 鲜花百科 -->
    <div class="encyclopedia">
      <div class="flower">
        <span>鲜花百科</span>
        <router-link to="/flowerwiki">
          <i class="iconfont">&#xe60a;</i>
        </router-link>
      </div>
      <div class="pic">
        <ul>
          <li v-for="(item,index) in picList" :key="index">
            <router-link :to="/flowerinfo/+index">
              <img :src="item.src">
              <p>{{item.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 推荐/直播-->
    <div class="enjoy">
      <div class="tab">
        <router-link to="/advice">
          <span :class="{'active': $route.path == '/advice'}">推荐</span>
        </router-link>
        <router-link to="/live">
          <span :class="{'active': $route.path == '/live'}">直播</span>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: [
        {
          imgSrc: '../../../static/images/t1.jpg',
        },
        {
          imgSrc: '../../../static/images/t2.jpg',
        },
        {
          imgSrc: '../../../static/images/t3.jpg',
        },
        {
          imgSrc: '../../../static/images/t4.jpg',
        }
      ],
      picList: [
        {
          src: '../../../static/images/m3.jpg',
          name: '一抹淡淡的清香，是冬日里的小确幸',
        },
        {
          src: '../../../static/images/p2.jpg',
          name: '一抹淡淡的清香，是冬日里的小确幸',
        },
        {
          src: '../../../static/images/n1.jpg',
          name: '一抹淡淡的清香，是冬日里的小确幸',
        }
      ],
    }
  }
}
</script>


<style lang="less" scoped>
.findHead {
  width: 100%;
  height: 38px;
  line-height: 38px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  background-color: #ff6666;
}

.findToday {
  width: 100%;
  height: 135px;
  background-color: #fff;
  .focus {
    width: 100%;
    height: 34px;
    span {
      font-size: 15px;
      line-height: 34px;
      color: #333;
      padding-left: 10px;
    }
    a {
      display: block;
      width: 20px;
      height: 100%;
      float: right;
      margin-right: 5px;
      color: #333;
      i {

        line-height: 34px;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
  .pic {
    width: 100%;
    height: 86px;
    overflow-x: auto;
    margin-top: 4px;
    ul {
      width: 200%;
      height: 100%;
      display: flex;
      li {
        width: 150px;
        height: 86px;
        margin-left: 5px;
        img {
          width: 100%;
          height: 100%;
        }
        &:first-child {
          padding-left: 5px;
        }
      }
    }
  }
}

.encyclopedia {
  width: 100%;
  height: 275px;
  margin-top: 10px;
  background-color: #fff;
  .flower {
    width: 100%;
    width: 100%;
    height: 34px;
    background-color: #fff;
    span {
      font-size: 15px;
      line-height: 34px;
      color: #333;
      padding-left: 10px;
    }
    a {
      display: block;
      width: 20px;
      height: 100%;
      float: right;
      color: #333;
      i {
        float: right;
        line-height: 34px;
        font-size: 15px;
        font-weight: 500;
        padding-right: 10px;
      }
    }
  }
  .pic {
    width: 100%;
    height: 224px;
    margin-top:4px;
    ul {
      width: 100%;
      height: 100%;
      position: relative;
      li {
        position: absolute;
        width: 177px;
        height: 114px;
        font-size: 12px;
        line-height: 25px;
        img {
          width: 170px;
          height: 88px;
          vertical-align: bottom;
        }
        p {
          width: 177px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &:nth-child(1) {
          width: 198px;
          height: 230px;
          padding-left: 10px;
          img {
            width: 180px;
            height: 202px;
          }
          p {
            line-height: 25px;
          }
        }
        &:nth-child(2) {
          right: 0px;
        }
        &:nth-child(3) {
          right: 0px;
          bottom: -5px;
        }
      }
    }
  }
}

.enjoy {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
  overflow-y: auto;
  .tab {
    width: 100%;
    height: 38px;
    background-color: #fff;
    line-height: 38px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    a {
      color: #333;
      span {
        display: block;
        width: 50px;
        height: 100%;
        text-align: center;
        &.active {
          color: #f66;
          border-bottom: 2px solid #f66;
        }
      }
    }
  }
}
</style>

