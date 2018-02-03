<template>
  <div>
     <div class="head">
         <router-link to="/membercenter">
         <i class="iconfont">&#xe50d;</i>
         </router-link>
         我的积分
     </div>
     <div class="integralContent">
         <img src="../../../../static/images/jifen.png">
         <p class="intergralItem">积分可用于兑换商品</p>
         <p class="intergralNum">{{intergral.intergralNum}}</p>
     </div>
     <!-- 充值 -->
     <div class="recharge">
         充值
     </div>
     <!-- 兑换商品 -->
     <div class="changeGoods">
         兑换商品
     </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          intergral:{
              intergralNum:'300',
          }
      }
  }
}
</script>

<style lang="less" scoped>
.head{
    width: 100%;    
    height: 38px;
    background-color: #ff6666;
    line-height: 38px;
    text-align: center;
    color:#fff;
    position: relative;
    font-size: 15px;
    a{
        color:#fff;
        i{
            position: absolute;
            font-size: 20px;
            left:10px;
        }
    }
}
.integralContent{
    width: 100%;
    height: 197px;
    text-align: center;
    padding-top:50px;
    img{
        width: 61px;
        height: 61px;
    }
    .intergralItem{
        width: 100%;
        font-size: 12px;
        line-height: 25px;
    }
    .intergralNum{
        width: 100%;
        font-size: 25px;
        color:#333;
        font-weight: 600;
    }
}
.recharge,.changeGoods{
    width: 92%;
    height: 44px;
    background-color: #fd9495;
    border-radius: 5px;
    margin:10px auto;
    font-size: 17px;
    color:#fff;
    line-height: 44px;
    text-align: center;
}
.changeGoods{
    background-color: #e94f4d;
}
</style>

