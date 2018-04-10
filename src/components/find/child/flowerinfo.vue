<template>
  <div>
    <div class="pictureinfo">
      <!-- 文章图片 -->
      <div class="pic">
        <div class="picIcon" @click="$router.back()">        
            <i class="iconfont">&#xe50d;</i>
        </div>
        <img :src="wiki.img">
        <p class="picture-item">{{wiki.post_title}}</p>
      </div>
      <!-- 文章内容 -->
        <p class="essayContainer" v-html="wiki.post_content"></p>
      <div class="code">
        <img src="../../../../static/images/qrcode.png">
      </div>
    </div>
  </div>
</template>

<script>
import common from '../../common/common.js';
export default {
  data() {
    return {
    wiki:[]
    }
  },
  mounted(){
    this.flowerWikiData()
  },
  methods:{
    flowerWikiData(){
      this.$http.get(`${common.apihost}api/home/discover/encyDetail`,{
        params:{
          id:this.$route.params.flowerinfoId,
        }
      }).then((res)=>{
          this.wiki=res.body.data
      })
    }
  }
}
</script>


<style lang="less" scoped>
.pictureinfo {
  width: 100%;
  position: relative;
  background-color: #fff;
  .pic {
    width: 100%;
    height: 9.2rem;
    .picIcon {
      position: absolute;
      width: .8rem;
      height: .8rem;
      background-color: rgba(51, 51, 51, 0.3);
      top: .266667rem;
      left: .266667rem;
      text-align: center;
      line-height: .8rem;
      border-radius: 50%;
      i {
        font-size: .666667rem;
        color: #fff;
      }
    }
    img {
      width: 100%;
      height: 8rem;
    }
    .picture-item {
      width: 100%;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .453333rem;
      padding-left: .266667rem;
      color: #333;
    }
  }
  .essay {
    width: 100%;
    text-align: center;
   
    p {
      padding-top:.066667rem;
      line-height: .666667rem;
      font-size: .32rem;
    }
  }
  .code {
    margin-top: .533333rem;
    width: 100%;
    height: 5.333333rem;
    text-align: center;
    img {
      width: 3.36rem;
      height: 3.36rem;
    }
  }
}
</style>

