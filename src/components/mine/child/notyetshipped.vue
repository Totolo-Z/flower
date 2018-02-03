<template>
    <div>
        <div class="noyetshippedList">
            <ul>
                <li v-for="(val,index) in noyetshippedList" :key="index">
                    <div class="orderListTitle">
                        <span><img src="../../../../static/images/dianpu.png">{{val.orderShopName}}</span>
                        <span>{{val.tradingState}}</span>
                    </div>
                    <div class="orderListContent">
                        <div class="orderListImg">
                            <img :src="val.orderListImg">
                        </div>
                        <div class="orderListItem">
                            <p class="orderListName">{{val.orderListName}}</p>
                            <p class="orderSpecification">{{val.orderSpecification}}</p>
                            <div class="orderListPrice">
                                <span>￥{{val.orderPrice}}</span>
                                <span>{{val.orderNumber}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="orderTatol">
                        <div class="goodsTatol">
                            <span>共{{val.goodsNumber}}件商品</span>
                            <span>合计: ￥{{val.moneyTatol}} (含运费: ￥{{val.carriage}})</span>
                        </div>
                        <div class="evaluateGoodsButton">
                            <div class="GoodsButton">取消订单</div>
                            <div class="GoodsButton">付款</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          noyetshippedList:[
              {
                orderShopName:'小蝶鲜花花坊',
                tradingState:'买家已付款',
                orderListImg:'../../../../static/images/m6.jpg',
                orderListName:'全国同城速递 红玫瑰康乃馨向日葵腊梅勿忘我',
                orderSpecification:'19朵混搭玫瑰Q款',
                orderPrice:'299.00',
                orderNumber:'x1',
                goodsNumber:'1',
                moneyTatol:'299.00',
                carriage:'0.00',
              },
          ]
      }
  }
}
</script>

<style lang="less" scoped>
 .noyetshippedList{
        width: 100%;
        ul{
            width: 100%;
            height: 100%;
            li{
                width: 100%;
                height: 210px;  
                margin-bottom: 10px;        
                .orderListTitle{
                    width: 100%;
                    height: 34px;
                    padding:0 10px;
                    border-bottom: 1px solid #f0f0f0;
                    display: flex;
                    justify-content: space-between;
                    line-height: 34px;
                    background-color: #fff;
                    span{
                        font-size: 13px;
                        color:#333;
                        &:nth-child(2){
                            font-size: 12px;
                            color:#e94f4d;
                        }
                        img{
                            width: 14px;
                            height: 15px;
                            vertical-align: middle;
                            margin-right: 10px;
                        }
                    }
                }
                .orderListContent{
                    width: 100%;
                    height: 107px;
                    display: flex;
                    background-color: #f5f5f5;
                    .orderListImg{
                        width: 101px;
                        height: 100%;
                        position: relative;
                        img{
                            width: 81px;
                            height: 81px;
                            position: absolute;
                            left:50%;
                            top:50%;
                            margin-left:-40.5px;
                            margin-top:-40.5px;
                        }
                    }
                    .orderListItem{
                        width: 70%;
                        height: 100%;
                        padding:14px 0;
                        .orderListName{
                            width: 95%;
                            font-size: 13px;
                            line-height: 15px;
                            color:#333;
                        }
                        .orderSpecification{
                            width: 100%;
                            font-size: 12px;
                            color:#999;
                            line-height: 35px;
                        }
                        .orderListPrice{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            span{
                                font-size: 12px;
                                color:#999;
                                &:first-child{
                                    font-size: 13px;
                                    color:#ff0000;
                                    font-weight: 600;
                                }
                            }
                        }
                    }
                }
                .orderTatol{
                    width: 100%;
                    height: 69px;
                    padding-right: 10px;
                    background-color: #fff;
                    .goodsTatol{
                        width: 100%;
                        height: 30px;
                        font-size: 12px;
                        line-height: 30px;
                        display: flex;
                        justify-content: flex-end;
                        color:#999;
                    }
                    .evaluateGoodsButton{
                        width: 100%;
                        height: 39px;
                        display: flex;
                        justify-content: flex-end;
                        .GoodsButton{
                            margin:5px;
                            width: 70px;
                            height: 25px;
                            border:1px solid #666;
                            border-radius: 5px;
                            text-align: center;
                            line-height: 25px;
                        }
                    }
                }
            }
        }
    }
</style>
