<template>
  <div class="style">
      <div class="head">
          <router-link to="/find">
          <i class="iconfont">&#xe50d;</i>
          </router-link>
          今日聚焦
      </div>
      <!-- 今日聚焦图片详情 -->
      <div class="focusPic">
          <div class="focus-title">
             今日聚焦
          </div>
          <div class="focus-container">
              <ul>
                  <li v-for="(val,index) in imgContainer" :key="index">
                      <router-link :to="/pictureinfo/+index">
                      <img :src="val.imgSrc" >
                      </router-link>
                        <p class="imgItem">{{val.imgItem}}</p>
                        <p class="imgtitle">{{val.imgtitle}}</p>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
        imgContainer:[
            {
                imgSrc:'../../../static/images/t1.jpg',
                imgItem:'张扬的夏季转瞬即逝，秋意正浓',
                imgtitle:'不是花中偏爱菊,此花开尽再无花',
            },
             {
                imgSrc:'../../../static/images/t2.jpg',
                imgItem:'张扬的夏季转瞬即逝，秋意正浓',
                imgtitle:'不是花中偏爱菊,此花开尽再无花',
            },
             {
                imgSrc:'../../../static/images/t3.jpg',
                imgItem:'张扬的夏季转瞬即逝，秋意正浓',
                imgtitle:'不是花中偏爱菊,此花开尽再无花',
            },
             {
                imgSrc:'../../../static/images/t4.jpg',
                imgItem:'张扬的夏季转瞬即逝，秋意正浓',
                imgtitle:'不是花中偏爱菊,此花开尽再无花',
            },
             {
                imgSrc:'../../../static/images/t1.jpg',
                imgItem:'张扬的夏季转瞬即逝，秋意正浓',
                imgtitle:'不是花中偏爱菊,此花开尽再无花',
            }
        ]
      }
  }
}
</script>


<style lang="less" scoped>
.style{
    background-color: #fff;
    .head{
    width: 100%;
    height: 1.013333rem;
    background-color: #ff6666;
    position: relative;
    text-align: center;
    line-height: 1.013333rem;
    font-size: .4rem;
    color:#fff;
    i{
        position: absolute;
        left:.266667rem;
        font-size: .533333rem;
        color:#fff;
    }
}
.focusPic{
    width: 100%;
    background-color: #fff;
    padding:0 .266667rem;
    .focus-title{
        width: 100%;
        height: .933333rem;
        line-height: .933333rem;
        font-size: .4rem;
        color:#333;
    }
    .focus-container{
        width: 100%;
        ul{
            width: 100%;
            height: 100%;
            background-color: #fff;
            li{
                width: 100%;
                height: 8rem;
                border-bottom: 1px solid #f0f0f0;
                margin-bottom: .266667rem;
                background-color: #fff;
                
                img{
                    width: 100%;
                    height: 6.666667rem;
                }
                .imgItem{
                    font-size: .346667rem;
                    color:#666;
                    line-height: .613333rem;
                }
                .imgtitle{
                    font-size: .32rem;
                    color:#999;
                }
            }
        }
    }
}
}

</style>

