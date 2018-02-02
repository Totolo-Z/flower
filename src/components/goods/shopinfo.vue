<template>
    <div>
        <div class="head">
            <router-link to="/carousel/1">
            <i class="iconfont">&#xe50d;</i>
            </router-link>
            店铺详情
        </div>
        <div class="shop-container">
            <!-- 店铺图片 -->
            <div class="shop-pic">
                <ul>
                    <li v-for="(val,index) in shopContainer" :key="index">
                        <img :src="val.shopPic">
                    </li>
                </ul>
            </div>
            <!-- 店铺名字 -->
            <div class="shop-name">
                <h3 class="shopName">{{shopinfo.shopName}}</h3>
                <p class="shopTime">{{shopinfo.shopTime}}</p>
            </div>
            <!-- 店铺位置 -->
            <div class="shop-location">
                <div class="shop-far">
                    <span class="shopadd">{{shopLocation.shopadd}}</span>
                    <span class="shopdistance">距离您{{shopLocation.shopdistance}}</span>
                </div>
                <div class="shop-map">
                    <img src="../../../static/images/map.png">
                </div>
            </div>
            <!-- 咨询 -->
            <div class="consult">
                <span class="service">
                    <img src="../../../static/images/kefu_fudong.png">&nbsp;
                    咨询
                </span>
                <span class="call">  
                    <i class="iconfont">&#xe61a;</i>&nbsp;
                    电话
                </span>
            </div>
        </div>
         <div class="shop-service">
               <p>服务信息</p> 
               <p>营业时间&nbsp;&nbsp; <span>24小时营业</span></p>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shopContainer: [
                {
                    shopPic: '../../../static/images/h1.jpg',
                },
                {
                    shopPic: '../../../static/images/h2.jpg',
                },
                {
                    shopPic: '../../../static/images/h3.jpg',
                },
                {
                    shopPic: '../../../static/images/h4.jpg',
                }
            ],
            shopinfo: 
                {
                    shopName: '小蝶鲜花花坊',
                    shopTime: '营业时间 24小时营业',
                },
            shopLocation:
                {
                   shopadd:'宝安区西乡共和华丰互联网创意园' ,
                   shopdistance:'8.3km',
                },
        }
    }
}
</script>


<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #ff6666;
    text-align: center;
    line-height: 38px;
    position: relative;
    font-size: 15px;
    color: #fff;
    i {
        position: absolute;
        left: 10px;
        font-size: 20px;
        color:#fff;
    }
}

.shop-container {
    width: 100%;
    padding-left: 10px;
    margin-top: 10px;
    padding-top: 10px;
    background-color: #fff;
    .shop-pic {
        width: 100%;
        height: 135px;
        overflow-x: auto;
        ul {
            width: 200%;
            height: 135px;
            display: flex;
            li {
                width: 125px;
                height: 135px;
                margin-right: 10px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .shop-name {
        width: 100%;
        height: 66px;
        border-bottom: 1px solid #f0f0f0;
        .shopName {
            width: 100%;
            height: 45px;
            line-height: 45px;
            font-size: 17px;
            color: #333;
        }
        .shopTime {
            width: 100%;
            font-size: 12px;
            color: #666;
        }
    }
    .shop-location {
        width: 100%;
        height: 125px;
        .shop-far {
            width: 100%;
            height: 35px;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            .shopadd {
                width: 70%;
                height: 35px;
                line-height: 35px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .shopdistance {
                width: 30%;
                height: 35px;
                line-height: 35px;
                text-align: center;
                color:#ff6666;
            }
        }
        .shop-map {
            width: 100%;
            height: 90px;
            padding-right: 10px;
            img {
                width: 100%;
                height: 90px;
            }
        }
    }
    .consult{
        width: 100%;
        height: 44px;
        display: flex;
        text-align: center;
        line-height: 44px; 
        color:#666;
        .service{
            flex:1;
            border-right: 2px solid #f0f0f0;
            img{
                width: 22px;
                height: 22px;
                vertical-align: middle;
            }
        }
        .call{
            flex:1;
            i{
                font-size: 20px;
                line-height: 40px;
                vertical-align: middle;
            }
        }
    }
}
.shop-service{
    width: 100%;
    height: 80px;
    background-color: #fff;
    padding-left: 10px;    
    margin-top:10px;
    p{
        height: 40px;
        line-height: 38px;
        font-size: 15px;
        color:#333;
        &:first-child{
            border-bottom:1px solid #f0f0f0;
        }
        span{
            font-size: 12px;
            color:#666;
        }
    }
}
</style>

