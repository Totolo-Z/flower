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
                <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <li v-for="(val,index) in goodsList" :key="index" @click="goCarousel(val.goods_id)">                     
                            <div class="icons">
                                <img :src="val.goods_thumb">
                                <span class="sales">销量{{val.sale}}</span>
                            </div>
                        <p class="title">{{val.goods_name}}</p>
                        <div class="districtPost">
                            <span class="postStatus">包邮</span>
                            <span class="district">{{val.city}}</span>
                        </div>
                        <div class="item">
                            <span class="price">￥{{val.shop_price}}</span>
                            <img src="../../../static/images/tianjia_changgui.png">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 商品列表2  -->
        <div>
            <ul class="shopContent" v-show="changeIcon" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <li v-for="(item,index) in goodsList" :key="index" @click="goCarousel(item.goods_id)">
                    <div class="imgInfo">
                        <img :src="item.goods_thumb">
                        <span class="salesVolume">销量{{item.sale}}</span>
                    </div>
                    <div class="shopInfo">
                        <p class="commodity">{{item.goods_name}}</p>
                        <p class="district">{{item.city}}</p>
                        <p class="postStatus">包邮</p>
                        <div class="priceItem">
                            <span class="price">￥{{item.shop_price}}</span>
                            <img src="../../../static/images/tianjia_changgui.png">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <navcomponent> </navcomponent>
    </div>
</template>

<script>
import common from '../common/common.js';
import navcomponent from '../subcomponents/navcomponent.vue';
import { InfiniteScroll } from 'mint-ui';
export default {
    data() {
        return {
            change: true,
            openContent: false,
            changeIcon: false,
            rank: ['综合排序', '信用', '价格由高到低', '价格由低到高'],
            activeIndex: 0,
            goodsList: [],
            pageIndex: 1,
        }
    },
    mounted() {
        this.goodsData()
    },
    methods: {
        goCarousel(id){
            this.$router.push({path:`/carousel/${id}`})
        },
        goodsData() {
            this.$http.get(`${common.apihost}api/home/goods/index`, {
                params: {
                    cid: this.$route.params.goodslistId,
                    p: this.pageIndex,
                }
            }).then((res) => { 
                this.goodsList = this.goodsList.concat(res.body.data);
                this.loading = false;            
            })
        },
        loadMore() {
            this.loading = true;
            this.pageIndex++;
            this.goodsData();
        },
    },
    components: { 
        navcomponent
    }
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
        height: 4.853333rem;
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
    margin-bottom: 1.333333rem;
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
                        height: .533333rem;
                        right: 0px;
                        bottom: 0px;
                        font-size: .32rem;
                        text-align: center;
                        line-height: .533333rem;
                        color: #ffffff;
                        background-color: rgba(51, 51, 51, 0.7);
                    }
                }
                .title {
                    text-align: left;
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
                        height: .426667rem;
                        background-color: #ffa800;
                        border-radius: .08rem;
                        line-height: .426667rem;
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
                        line-height: .8rem;
                        color: #ff0000;
                    }
                    img {
                        width: .746667rem;
                        height: .773333rem;
                    }
                }
            }
        }
    }
}

.shopContent {
    width: 100%;
    background-color: #fff;
    margin-bottom: 1.333333rem;
    li {
        width: 100%;
        height: 3.333333rem;
        border-top: 1px solid #f0f0f0;
        display: flex;
        .imgInfo {
            width: 3.066667rem;
            height: 100%;
            position: relative;
            img {
                width: 2.4rem;
                height: 2.4rem;
                transform: translate(.306667rem, .266667rem);
            }
            .salesVolume {
                position: absolute;
                right: .36rem;
                bottom: .64rem;
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
                text-align: left;
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
                height: .746667rem;
                line-height: .746667rem;
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

