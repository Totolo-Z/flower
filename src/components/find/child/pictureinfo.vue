<template>
  <div>
    <div class="pictureinfo">
      <!-- 文章图片 -->
      <div class="pic">
        <div class="picIcon" @click="$router.back()">
            <i class="iconfont">&#xe50d;</i>        
        </div>
        <img :src="picIcon.imgSrc">
        <p class="picture-item">{{picIcon.pictureItem}}</p>
      </div>
      <!-- 文章内容 -->
      <div class="essay" v-for="(val,index) in essay" :key="index">
        <p class="essayContainer">{{val.essayContainer}}</p>
      </div>
      <div class="code">
        <img src="../../../../static/images/qrcode.png">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      picIcon: 
        {
          imgSrc: '../../../../static/images/t1.jpg',
          pictureItem: '张扬的夏季转瞬即逝，秋意正浓',
        },
      essay: [
        {
          essayContainer: '风轻轻拂然着我'
        },
        {
          essayContainer: '情是多么的寂然'
        },
        {
          essayContainer: '飘离的心'
        },
        {
          essayContainer: '飞翔在爱的炫丽中支离破碎'
        },
        {
          essayContainer: '枯黄的杏叶'
        },
        {
          essayContainer: '随风舞动而落地'
        },
        {
          essayContainer: '甘愿化为心守护'
        },
        {
          essayContainer: '站在窗前'
        },
        {
          essayContainer: '看着一切的孤寂'
        },
        {
          essayContainer: '欢笑离我远去'
        },
        {
          essayContainer: '一点一滴的触感'
        },
        {
          essayContainer: '诉说着心中的悲伤'
        },
      ]
    }
  }
}
</script>


<style lang="less" scoped>
.pictureinfo {
  width: 100%;
  position: relative;
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
    .author-name {
      width: 100%;
      padding-left: .266667rem;
      .name {
        font-size: .346667rem;
        line-height: .613333rem;
      }
      .signatur {
        font-size: .32rem;
      }
    }
  .essay {
    width: 100%;
    text-align: center;
    p {
      padding-top: .133333rem;
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

