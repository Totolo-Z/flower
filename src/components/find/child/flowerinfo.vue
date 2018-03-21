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
             imgSrc:'../../../../static/images/m8.jpg',
             pictureItem:'张扬的夏季转瞬即逝，秋意正浓',
         },
      essay: [
        {
          essayContainer: '初春的路口'
        },
        {
          essayContainer: '蠢蠢欲动的欲念'
        },
        {
          essayContainer: '与春日阳光，一起露出'
        },
        {
          essayContainer: '稚嫩的微笑，鹅黄的枝条'
        },
        {
          essayContainer: '在阳光里张扬欲望'
        },
        {
          essayContainer: '试图触摸太阳的翅膀'
        },
        {
          essayContainer: '将残冬不舍的贪婪'
        },
        {
          essayContainer: '站在窗前在春天里埋葬，摇响岁月的风铃'
        },
        {
          essayContainer: '期待一场缤纷的花事'
        },
        {
          essayContainer: '让希望的田野，鸟语花香'
        },
        {
          essayContainer: '百花怒放，恣意芬芳'
        },
        {
          essayContainer: '它们带着涌动的情思'
        },
         {
          essayContainer: '如约而至，我伸出有力双臂'
        },
         {
          essayContainer: '策划一场春天的舞会'
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

