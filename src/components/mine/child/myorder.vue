<template>
  <div>                                                                                                                                                
      <div class="head">
          <router-link to="/membercenter">
          <i class="iconfont">&#xe50d;</i>
          </router-link>
          我的订单
      </div>
      <div class="orderContent">
          <ul class="orderCategory">
              <li><router-link to="/allorder">全部</router-link></li>
              <li><router-link to="/obligation">待付款</router-link></li>
              <li><router-link to="/notyetshipped">待发货</router-link></li>
              <li><router-link to="/waitforreceiving">待收货</router-link></li>
              <li><router-link to="/evaluation">待评价</router-link></li>
          </ul>
         <router-view></router-view>
      </div>
  </div>
</template>

<style lang="less" scoped>
.head{
    width: 100%;
    height: 1.013333rem;
    background-color: #ff6666;
    color:#fff;
    text-align: center;
    font-size: .4rem;
    line-height:1.013333rem;
    position: relative; 
    a{
        color:#fff;
        i{
        position: absolute;
        left: .266667rem;
        font-size: .533333rem;
     }
    }
}
.orderContent{
    width: 100%;
    .orderCategory{
        width: 100%;
        height: 1.173333rem;
        background-color: #fff;
        line-height: 1.173333rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #f0f0f0;
        font-size: .373333rem;
       
        li{
            a{
              color:#999;   
            }
            &:first-child{
                color:#ff6666;
                border-bottom: 2px solid #ff6666;
            }
            &:hover{
                 color:#ff6666;
                 border-bottom: 2px solid #ff6666;
            }
        }
    }
}
</style>


