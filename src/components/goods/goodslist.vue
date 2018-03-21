<template>
    <div>
        <div class="head">
            <span class="synthesize" @click="openContent=!openContent;">
                {{ rank[activeIndex] }}
                <i class="iconfont">&#xe501;</i>
            </span>
            <span class="sales">销量优先
                <i class="iconfont" @click="changeIcon=false" v-show="changeIcon">&#xe6af;</i>
                <i class="iconfont" @click="changeIcon=true" v-show="!changeIcon">&#xe658;</i>
            </span>
            <div class="accordion" v-show="openContent">
                <ul>
                    <li v-for="(item,index) in rank" :key="index" :class="{'active': activeIndex === index}" @click="activeIndex = index">
                        {{item}}
                        <i class="iconfont" v-show="activeIndex === index">&#xe64a;</i>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 商品列表 -->
        <div class="productShow" v-show="!changeIcon">
            <div class="product">
                <ul>
                    <li v-for="(val,index) in goods" :key="index">
                        <router-link :to="/carousel/+index">
                            <div class="icons">
                                <img :src="val.imgSrc">
                                <span class="sales">销量{{val.sales}}</span>
                            </div>
                        </router-link>
                        <p class="title">{{val.title}}</p>
                        <div class="districtPost">
                            <span class="postStatus">{{val.postStatus}}</span>
                            <span class="district">{{val.district}}</span>
                        </div>
                        <div class="item">
                            <span class="price">￥{{val.price}}</span>
                            <img src="../../../static/images/tianjia_changgui.png">
                        </div>
                    </li>
                    <div class="more">
                        <p>查看更多</p>
                        <img src="../../../static/images/more.png">
                    </div>
                </ul>
            </div>
        </div>
        <!-- 商品列表2  -->
        <div>
            <ul class="shopContent" v-show="changeIcon">
                <li v-for="(item,index) in goods" :key="index">
                    <div class="imgInfo">
                        <img :src="item.imgSrc">
                        <span class="salesVolume">销量{{item.sales}}</span>
                    </div>
                    <div class="shopInfo">
                        <h5 class="commodity">{{item.title}}</h5>
                        <p class="district">{{item.district}}</p>
                        <p class="postStatus">{{item.postStatus}}</p>
                        <div class="priceItem">
                            <span class="price">￥{{item.price}}</span>
                            <img src="../../../static/images/tianjia_changgui.png">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            change: true,
            openContent: false,
            changeIcon: false,
            goods: [
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '广州',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '上海',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '北京',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
            ],
            rank: ['综合排序', '信用', '价格由高到低', '价格由低到高'],
            activeIndex: 0,
        }
    },
    methods: {
    },
}
</script>


<style lang="less" scoped>
.head {
    width: 100%;
    height: 1.013333rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .346667rem;
    color: #333;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    .synthesize {
        width: 38.33%;
        text-align: center;
        color: #f66;
        i {
            font-size: .373333rem;
        }
    }
    .sales {
        width: 38%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        i {
            font-size: .453333rem;
        }
    }
    .accordion {
        min-width: 100%;
        height:4.853333rem;
        background-color: #fff;
        position: absolute;
        top: .986667rem;
        z-index: 99;
        ul {
            width: 100%;
            height: 100%;
            li {
                width: 100%;
                height: 1.173333rem;
                border-top: 1px solid #f0f0f0;
                line-height: 1.173333rem;
                padding-left: .933333rem;
                padding-right: .266667rem;
                font-size: .346667rem;
                color: #333;
            }
            .active {
                color: #f66;
            }
            i {
                font-size: .48rem;
                float: right;
                margin-right: .266667rem;
                line-height: 1.173333rem;
                color: #ff6666;
            }
        }
    }
}


.productShow {
    width: 100%;
    background-color: #fff;
    .product {
        width: 100%;
        height: 100%;
        ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            li {
                width: 50%;
                height: 6.666667rem;
                text-align: center;
                border-right: 1px solid #f0f0f0;
                border-bottom: 1px solid #f0f0f0;
                padding-top: .266667rem;
                &:nth-child(even) {
                    border-right: none;
                }
                .icons {
                    width: 4.106667rem;
                    height: 4.106667rem;
                    margin: 0 auto;
                    position: relative;
                    img {
                        width: 4.106667rem;
                        height: 4.106667rem;
                    }
                    .sales {
                        position: absolute;
                        width: 1.573333rem;
                        height:.533333rem;
                        right: 2px;
                        bottom: .053333rem;
                        font-size: .32rem;
                        text-align: center;
                        line-height:.533333rem;
                        color: #ffffff;
                        background-color: rgba(51, 51, 51, 0.7);
                    }
                }
                .title {
                    width: 4.106667rem;
                    height: .8rem;
                    line-height: .8rem;
                    margin: 0 auto;
                    font-size: .373333rem;
                    color: #333333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .districtPost {
                    width: 4.106667rem;
                    height: .533333rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    .postStatus {
                        width: .8rem;
                        height:.426667rem;
                        background-color: #ffa800;
                        border-radius: .08rem;
                        line-height:.426667rem;
                        color: #fff;
                        font-size: .32rem;
                    }
                    .district {
                        font-size: .32rem;
                        color: #999
                    }
                }
                .item {
                    width: 4.106667rem;
                    height: .933333rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    span {
                        font-size: .4rem;
                        line-height:.8rem;
                        color: #ff0000;
                    }
                    img {
                        width: .746667rem;
                        height: .773333rem;
                    }
                }
            }
            .more {
                width: 100%;
                height: 1.2rem;
                background-color: #ffffff;
                text-align: center;
                margin-bottom: .266667rem;
                p {
                    line-height: .8rem;
                    margin: 0px;
                    font-size: .373333rem;
                    color: #666666;
                }
                img {
                    width:.24rem;
                    height: .213333rem;
                    vertical-align: top;
                }
            }
        }
    }
}

.shopContent {
    width: 100%;
    background-color: #fff;
    li {
        width: 100%;
        height:3.333333rem;
        border-top: 1px solid #f0f0f0;
        display: flex;
        .imgInfo {
            width: 3.066667rem;
            height: 100%;
            position: relative;
            img {
                width: 2.4rem;
                height: 2.4rem;
                transform: translate(.306667rem,.266667rem);
            }
            .salesVolume {
                position: absolute;
                right: .39rem;
                bottom: .69rem;
                width: 1.2rem;
                height: .48rem;
                background-color: rgba(51, 51, 51, 0.5);
                color: #fff;
                text-align: center;
                line-height: .48rem;
                font-size: .32rem;
            }
        }
        .shopInfo {
            width: 65%;
            height: 100%;
            padding-top: .266667rem;
            .commodity {
                font-size: .4rem;
                color: #333;
            }
            .district {
                font-size: .32rem;
                color: #999;
                line-height: .64rem;
            }
            .postStatus {
                font-size: .32rem;
                width: .8rem;
                height: .426667rem;
                line-height: .426667rem;
                border-radius: 5px;
                text-align: center;
                background-color: #ffa800;
                color: #fff;
            }
            .priceItem {
                width: 100%;
                height:.746667rem;
                line-height:.746667rem;
                display: flex;
                justify-content: space-between;
                .price {
                    color: #f00;
                    font-size: .4rem;
                    font-weight: 600;
                }
                img {
                    width: .746667rem;
                    height: .746667rem;
                }
            }
        }
    }
}

</style>

