<template>
    <div>
        <div class="head">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            确认订单
        </div>
        <!-- 地址 -->
        <div class="orderAddress">
            <div class="imgIcon">
                <img src="../../../../static/images/addicon.png">
            </div>
            <div class="customerInfo">
                <div class="nameNumber">
                    <span>千玺</span>&nbsp;
                    <span>13585895465</span>
                </div>
                <p>
                    <span> 【默认】</span>广东省深圳市宝安区共和工业路</p>
                    <router-link to="/"></router-link>
                <i class="iconfont">&#xe60a;</i>
            </div>
        </div>
        <!-- 商品信息 -->
        <div class="goodsInfo">
            <ul>
                <li>
                    <div class="shopName">
                        <img src="../../../../static/images/dianpu.png"> 小蝶鲜花花坊
                    </div>
                    <div class="shopContent">
                        <div class="imgInfo">
                            <img src="../../../../static/images/ca1.jpg">
                        </div>
                        <div class="shopContentInfo">
                            <h4>全国同城送花红玫瑰康乃馨向日葵春节礼盒鲜花速递</h4>
                            <p>19朵混搭玫瑰Q版</p>
                            <span class="price">￥299.00</span>
                            <span class="shopNumber">x1</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="otherInfo">
            <ul>
                <li>此商品性质不支持7天退货</li>
                <li>配送方式：
                    <span>快递免邮</span>
                </li>
                <li>买家留言：<input type="text" placeholder="请输入您要给卖家的留言"></li>
                <li>电话号码：<input type="number" placeholder="方便卖家与您联系"></li>
            </ul>
        </div>
        <div class="commitOrder">
            <div class="account">
            <p>合计: <i>￥299.00</i></p>
            <p>共1件商品</p>
            </div>
            <router-link to="/checkstand">
            <button>提交订单</button>
            </router-link>
        </div>
    </div>
</template>



<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #f66;
    line-height: 38px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    position: relative;
    i {
        position: absolute;
        left: 10px;
        font-size: 20px;
    }
}

.orderAddress {
    width: 100%;
    height: 85px;
    background-color: #fff;
    .imgIcon {
        width: 100%;
        height: 20px;
        img {
            width: 100%;
            height: 4px;
        }
    }
    .customerInfo {
        width: 100%;
        height: 65px;
        font-size: 13px;
        color: #333;
        position: relative;
        .nameNumber {
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
        }
        p {
            font-size: 13px;
            color: #333;
            height: 30px;
            line-height: 30px;
            span {
                color: #e94f4d;
            }
        }
        i {
            position: absolute;
            right: 10px;
            top: 15px;
            font-size: 14px;
            color: #ccc;
        }
    }
}

.goodsInfo {
    width: 100%;
    margin-top: 10px;
    .shopName {
        width: 100%;
        height: 35px;
        background-color: #fff;
        line-height: 35px;
        padding-left: 10px;
        font-size: 13px;
        color: #333;
        img {
            width: 15px;
            height: 16px;
            vertical-align: middle;
        }
    }
    .shopContent {
        width: 100%;
        height: 107px;
        display: flex;
        .imgInfo {
            width: 100px;
            height: 100%;
            position: relative;
            img {
                width: 80px;
                height: 80px;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -40px;
                margin-top: -40px;
            }
        }
        .shopContentInfo {
            width: 70%;
            padding-top: 14px;
            h4 {
                font-size: 13px;
                color: #333;
            }
            p {
                font-size: 12px;
                line-height: 35px;
                color: #999;
            }
            .price {
                font-size: 13px;
                color: #f00;
                font-weight: 600;
            }
            .shopNumber {
                position: absolute;
                right: 15px;
                color: #999;
            }
        }
    }
}

.otherInfo {
    width: 100%;
    background-color: #fff;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 44px;
            border-bottom: 1px solid #f0f0f0;
            line-height: 44px;
            padding-left: 10px;
            font-size: 13px;
            input {
                width: 70%;
            }
        }
    }
}
.commitOrder{
    width: 100%;
    height: 49px;
    background-color: #fff;
    border-top:1px solid #f0f0f0;
    display: flex;
    justify-content: flex-end;
     .account{
         width: 200px;
         height: 100%;
         text-align: right;
         margin-top:5px;
         p{
            font-size: 13px;
            line-height: 20px;
            color:#333;
         }
         i{
             font-size: 16px;
             font-weight: 600;
         }
    }   
    button{
        width: 100px;
        height: 40px;
        background-color: #e94f4d;
        border-radius: 5px;
        line-height: 40px;
        color:#fff;
        font-size: 17px;
        margin:5px 10px;
    }                                             
}
::-webkit-input-placeholder {
    color: #ccc
}

:-moz-placeholder {
    color: #ccc
}

::-moz-placeholder {
    color: #ccc
}

:-ms-input-placeholder {
    color: #ccc
}
</style>
