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
      <!-- 文章作者信息 -->
      <div class="container-author">
        <div class="avatar">
          <img :src="containerAuthor.preson">
        </div>
        <div class="author-name">
          <h3 class="name">{{containerAuthor.name}}</h3>
          <p class="signatur">{{containerAuthor.signatur}}</p>
        </div>
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
     containerAuthor:
         {
             preson:'../../../../static/images/qx.jpg',
             name:'偏偏喜欢你',
             signatur:'采遍全世界的采花大盗',
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
    height: 345px;
    .picIcon {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: rgba(51, 51, 51, 0.3);
      top: 10px;
      left: 10px;
      text-align: center;
      line-height: 30px;
      border-radius: 50%;
      i {
        font-size: 25px;
        color: #fff;
      }
    }
    img {
      width: 100%;
      height: 300px;
    }
    .picture-item {
      width: 100%;
      height: 45px;
      line-height: 45px;
      font-size: 17px;
      padding-left: 10px;
      color: #333;
    }
  }
  .container-author {
    padding-left: 10px;
    height: 44px;
    display: flex;
    border-bottom: 1px solid #f0f0f0;
    .avatar {
     width: 35px;
     height: 35px;
     position: relative;
     img{
         width: 32px;
         height: 32px;
         border-radius: 50%;
         position: absolute;
         left: 50%;
         top:50%;
         margin-left: -16px;
         margin-top:-16px;
     }
    }
    .author-name {
      width: 100%;
      padding-left: 10px;
      .name {
        font-size: 13px;
        line-height: 23px;
      }
      .signatur {
        font-size: 12px;
      }
    }
  }
  .essay {
    width: 100%;
    text-align: center;
    p {
      padding-top: 5px;
      line-height: 25px;
      font-size: 12px;
    }
  }
  .code {
    margin-top: 20px;
    width: 100%;
    height: 200px;
    text-align: center;
    img {
      width: 126px;
      height: 126px;
    }
  }
}
</style>

