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
          imgSrc: '../../../../static/images/t1.jpg',
          pictureItem: '张扬的夏季转瞬即逝，秋意正浓',
        },
      containerAuthor: 
        {
          preson: '../../../../static/images/qx.jpg',
          name: '偏偏喜欢你',
          signatur: '采遍全世界的采花大盗',
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
    border-bottom: 1px solid #ccc;
    .avatar {
      width: 35px;
      height: 35px;
      position: relative;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -16px;
        margin-top: -16px;
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

