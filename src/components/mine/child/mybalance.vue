<template>
<div>
    <div class="head">
        <router-link to="/membercenter">
        <i class="iconfont">&#xe50d;</i>
        </router-link>
        我的余额
    </div>
     <div class="integralContent">
         <img src="../../../../static/images/money.png">
         <p class="intergralItem">零钱可用于支付商品</p>
         <p class="intergralNum">{{intergral.intergralNum}}</p>
     </div>
     <!-- 充值 -->
     <div class="recharge">
         充值
     </div>
     <!-- 提现 -->
     <div class="withdraw">
         提现
     </div>
</div>
</template>

<script>
export default {
  data(){
      return{
          intergral:{
              intergralNum:'100',
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
    font-size: 15px;
    color:#fff;
    position: relative;
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
.recharge,.withdraw{
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
.withdraw{
    background-color: #e94f4d;
}
</style>

