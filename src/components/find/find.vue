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
          src: '../../../static/images/x1.jpg',
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
  height: 1.013333rem;
  line-height: 1.013333rem;
  color: #fff;
  font-size: .4rem;
  text-align: center;
  background-color: #ff6666;
}

.findToday {
  width: 100%;
  height:3.6rem;
  background-color: #fff;
  .focus {
    width: 100%;
    height: .906667rem;
    span {
      font-size: .4rem;
      line-height: .906667rem;
      color: #333;
      padding-left: .266667rem;
    }
    a {
      display: block;
      width: .533333rem;
      height: 100%;
      float: right;
      margin-right: .133333rem;
      color: #333;
      i {

        line-height: .906667rem;
        font-size: .4rem;
        font-weight: 500;
      }
    }
  }
  .pic {
    width: 100%;
    height: 2.293333rem;
    overflow-x: auto;
    margin-top: .106667rem;
    ul {
      width: 200%;
      height: 100%;
      display: flex;
      li {
        width: 4rem;
        height:2.293333rem;
        margin-left: .133333rem;
        img {
          width: 100%;
          height: 100%;
        }
        &:first-child {
          padding-left: .133333rem;
        }
      }
    }
  }
}

.encyclopedia {
  width: 100%;
  margin-top: .266667rem;
  background-color: #fff;
  .flower {
    width: 100%;
    width: 100%;
    height:.906667rem;
    background-color: #fff;
    span {
      font-size: .4rem;
      line-height: .906667rem;
      color: #333;
      padding-left:.266667rem;
    }
    a {
      display: block;
      width: .533333rem;
      height: 100%;
      float: right;
      color: #333;
      i {
        float: right;
        line-height: .906667rem;
        font-size: .4rem;
        font-weight: 500;
        padding-right: .266667rem;
      }
    }
  }
  .pic {
    width: 100%;
    margin-top:.106667rem;
   ul{
     width: 100%;
     position: relative;
     margin-bottom: 1.066667rem;
     li{
       width: 50%;
       height: 4.5rem;
        padding: 0 .266667rem;
        text-align: center;
       img{
         width: 4.453333rem;
         height: 3.333333rem;
       }
       p{
         font-size: .32rem;
         height: .666667rem;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         text-align: left;
       }
       &:nth-child(1){
         width: 100%;
         height: 5.133333rem;
         padding: 0 .266667rem;
         margin-bottom: .133333rem;
         img{
           width: 100%;
           height: 4.453333rem;
         }
       }
       &:nth-child(3){
         position: absolute;
         right: 0px;
         bottom:0px;
       }
     }
   }
  }
}


</style>

