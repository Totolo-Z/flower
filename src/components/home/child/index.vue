<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(val,index) in swiper" :key="index">
                <router-link :to="/carousel/+index">
                    <img :src="val.imgSrc">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 通告 -->
        <div class="annunciate">
            <img src="../../../../static/images/laba.png">
            <marquee direction="left" scrolldelay='20'>2018年情人节花束即日起可提前预定了！</marquee>
        </div>
        <div class="ad" @click="goCarousel(0)">
            <img src="../../../../static/images/p4.png">
        </div>
        <!-- 分类 -->
        <div class="category">
            <ul class="category_t">
                <li>
                    <router-link to="/inhand">
                        <img src="../../../../static/images/huasu_shouye.png">
                    </router-link>
                </li>
                <li>
                    <router-link to="/cakelist">
                        <img src="../../../../static/images/dangao_shouye.png">
                    </router-link>
                </li>
                <li>
                    <router-link to="/find">
                        <img src="../../../../static/images/gonglue_shouye.png">
                    </router-link>
                </li>
            </ul>
            <ul class="category_d">
                <li>
                    <router-link to="/shoplist">
                        <img src="../../../../static/images/pinpai_shouye.png">
                    </router-link>
                </li>
                <li>
                    <router-link to="/packlist">
                        <img src="../../../../static/images/huacai_shouye.png">
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 精品 -->
        <div class="products">
            <h3>节日精品</h3>
            <div class="goodGoods">
                <ul>
                    <li v-for="(val,index) in product" :key="index">
                        <router-link :to="/carousel/+index">
                            <img :src="val.imgSrc">
                            <span class="sales">销量{{val.sales}}</span>
                        </router-link>
                        <p class="title">{{val.title}}</p>
                        <div class="item">
                            <span class="price">￥{{val.price}}</span>
                            <img src="../../../../static/images/tianjia_jieri.png">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 预售 -->
        <div class="presell">
            <h3>本周预售</h3>
            <div class="banner" v-for="(val,index) in presell" :key="index">
                <img :src="val.imgSrc">
                <p class="title">{{val.title}}</p>
                <div class="item">
                    <span class="description">{{val.description}}</span>
                    <span class="price">￥{{val.price | PriceFilter }}起</span>
                </div>
            </div>
        </div>
        <!-- 商品展示 -->
        <div class="productShow">
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
                        <div class="item">
                            <span class="price">￥{{val.price | PriceFilter}}</span>
                            <img src="../../../../static/images/tianjia_changgui.png" @click="addGoods(val)">
                        </div>
                    </li>
                    <div class="more">
                        <p>查看更多</p>
                        <img src="../../../../static/images/more.png">
                    </div>
                </ul>
            </div>
        </div>
        <div class="shop">
            <a href="http://www.huahudie.cc/apply_index.php">
                <mt-button type="danger" size='large'>我也要开店</mt-button>
            </a>
        </div>
        <div class="footer">
            <div class="user">
                <span>wx_874976</span>|
                <span>
                    <router-link to="/mine">
                        退出
                    </router-link>
                </span>|
                <span>回顶部</span>
            </div>
            <div class="icon">
                <img src="../../../../static/images/shouji_weixuanzhong.png">
                <img src="../../../../static/images/shouji_xuanzhong.png">
                <img src="../../../../static/images/diannao_weixuanzhong.png">
                <p>
                    <span>
                        <router-link to="/mine">
                            客户端
                        </router-link>
                    </span>
                    <span>触屏版</span>
                    <span>
                        <a href="http://www.huahudie.cc/apply_index.php">
                            电脑端
                        </a>
                    </span>
                </p>
            </div>
            <p>© 2015-2017 花蝴蝶商城 版权所有，并保留所有权利。</p>
        </div>
    </div>
</template>


<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            swiper: [
                {
                    imgSrc: '../../../../static/images/x1.jpg'
                },
                {
                    imgSrc: '../../../../static/images/p2.jpg'
                },
                {
                    imgSrc: '../../../../static/images/p3.jpg'
                }
            ],
            product: [
                {
                    imgSrc: '../../../../static/images/n1.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: 299,
                },
                {
                    imgSrc: '../../../../static/images/n2.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: 11,
                },
                {
                    imgSrc: '../../../../static/images/n3.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: 23,
                }
            ],
            presell: [
                {
                    imgSrc: '../../../../static/images/banner (2).jpg',
                    title: '双十二火爆预售',
                    description: '全场超低价，快来抢吧！',
                    price: 42,
                },
                {
                    imgSrc: '../../../../static/images/banner (1).jpg',
                    title: '节日有不同，感恩无国界',
                    description: '今天虽是外国节日，但遇见你是我最大的财富',
                    price: 250,
                }
            ],
            goods: [
                {
                    id: 1,
                    imgSrc: '../../../../static/images/m1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: 23.44,
                },
                {
                    id: 2,
                    imgSrc: '../../../../static/images/m2.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: 44,
                },
                {
                    id: 3,
                    imgSrc: '../../../../static/images/m3.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: 55,
                },
                {
                    id: 4,
                    imgSrc: '../../../../static/images/m4.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: 66,
                },
                {
                    id: 5,
                    imgSrc: '../../../../static/images/m5.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: 33,
                },
                {
                    id: 6,
                    imgSrc: '../../../../static/images/m6.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: 11,
                },
                {
                    id: 7,
                    imgSrc: '../../../../static/images/m7.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: 43,
                },
                {
                    id: 8,
                    imgSrc: '../../../../static/images/m8.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: 299,
                },
            ]
        }
    },
    methods: {
        goCarousel(id) {
            this.$router.push({ name: 'carousel', params: { carouselId: id } })
        },
        addGoods(val) {
            // console.log(val);
            Toast('添加成功');
            this.$store.commit('addGoodsCar', val);
        },
    }
}
</script>


<style lang="less" scoped>
.mint-swipe {
    width: 100%;
    height: 157px;
    img {
        width: 100%;
        height: 157px;
    }
}

.annunciate {
    width: 100%;
    height: 28px;
    line-height: 28px;
    background-color: #ffffff;
    margin-bottom: 5px;
    img {
        width: 3%;
        height: 13px;
        vertical-align: middle;
        margin-left: 10px;
    }
    marquee {
        width: 94%;
        float: right;
        font-size: 12px;
        font-weight: 500;
        color: #ff6666;
        line-height: 28px;
    }
}

.ad {
    border-bottom: 10px;
    img {
        width: 100%;
        height: 157px;
    }
}

.category {
    width: 100%;
    height: 194px;
    margin-top: 5px;
    background-color: #ffffff;
    .category_t {
        width: 100%;
        height: 106px;
        display: flex;
        justify-content: flex-start;
        align-content: space-between;
        li {
            width: 100%;
            border-right: 1px solid #f0f0f0;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
                img {
                    width: 100%;
                    height: 106px;
                }
            }
            &:nth-child(3) {
                border-right: none;
            }
        }
    }
    .category_d {
        width: 100%;
        height: 88px;
        display: flex;
        justify-content: flex-start;
        border-top: 1px solid #f0f0f0;
        li {
            width: 100%;
            border-right: 1px solid #f0f0f0;
            &:nth-child(1),
            &:nth-child(2) {
                img {
                    width: 100%;
                    height: 88px;
                }
            }
            &:nth-child(2) {
                border-right: none;
            }
        }
    }
}

.products {
    width: 100%;
    height: 215px;
    background-color: #ffffff;
    margin-top: 10px;
    h3 {
        font-size: 17px;
        font-weight: 800;
        text-align: center;
        line-height: 32px;
    }
    .goodGoods {
        width: 100%;
        height: 183px;
        overflow-x: auto;
        ul {
            width: 300%;
            height: 100%;
            display: flex;
            li {
                width: 125px;
                height: 100%;
                margin-left: 10px;
                position: relative;
                img {
                    width: 125px;
                    height: 125px;
                }
                .sales {
                    display: block;
                    position: absolute;
                    bottom: 58px;
                    right: 0px;
                    width: 59px;
                    height: 20px;
                    font-size: 12px;
                    text-align: center;
                    line-height: 20px;
                    color: #ffffff;
                    background-color: rgba(51, 51, 51, 0.7);
                }
                p {
                    width: 100%;
                    height: 25px;
                    line-height: 25px;
                    font-size: 14px;
                    color: #333333;
                    padding-left: 10px;
                }
                .item {
                    width: 100%;
                    height: 25px;
                    display: flex;
                    justify-content: space-between;
                    span {
                        padding-left: 10px;
                        font-size: 14px;
                        line-height: 24px;
                        color: #ff0000;
                    }
                    img {
                        width: 22px;
                        height: 22px;
                    }
                }
            }
        }
    }
}

.presell {
    margin-top: 10px;
    width: 100%;
    background-color: #fff;
    h3 {
        font-size: 17px;
        font-weight: 800;
        text-align: center;
        line-height: 30px;
    }
    .banner {
        padding: 0px 10px;
        border-bottom: 1px solid #f0f0f0;
        &:last-child {
            margin-top: 10px;
            border: none;
        }
        img {
            width: 100%;
            height: 157px;
        }
        p {
            height: 15px;
            margin-top: 5px;
            font-size: 14px;
            line-height: 15px;
        }
        .item {
            width: 100%;
            line-height: 30px;
            display: flex;
            justify-content: space-between;
            .description {
                font-size: 11px;
                color: #999999;
            }
            .price {
                color: #ff0000;
                font-size: 12px;
            }
        }
    }
}

.productShow {
    width: 100%;
    height: 952px;
    background-color: #fff;
    margin-top: 10px;
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
                height: 238px;
                text-align: center;
                border-right: 1px solid #f0f0f0;
                border-bottom: 1px solid #f0f0f0;
                padding-top: 10px;
                &:nth-child(even) {
                    border-right: none;
                }
                .icons {
                    width: 154px;
                    height: 154px;
                    margin: 0 auto;
                    position: relative;
                    img {
                        width: 154px;
                        height: 154px;
                    }
                    .sales {
                        position: absolute;
                        width: 59px;
                        height: 20px;
                        right: 0px;
                        bottom: 0px;
                        font-size: 12px;
                        text-align: center;
                        line-height: 20px;
                        color: #ffffff;
                        background-color: rgba(51, 51, 51, 0.7);
                    }
                }
                p {
                    width: 154px;
                    height: 30px;
                    line-height: 30px;
                    margin: 0 auto;
                    font-size: 14px;
                    color: #333333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .item {
                    width: 154px;
                    height: 40px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    span {
                        font-size: 15px;
                        line-height: 30px;
                        color: #ff0000;
                    }
                    img {
                        width: 30px;
                        height: 31px;
                    }
                }
            }
            .more {
                width: 100%;
                height: 45px;
                background-color: #ffffff;
                text-align: center;
                margin-bottom: 10px;
                p {
                    line-height: 30px;
                    margin: 0px;
                    font-size: 14px;
                    color: #666666;
                }
                img {
                    width: 9px;
                    height: 8px;
                    vertical-align: top;
                }
            }
        }
    }
}

.shop {
    width: 95%;
    height: 40px;
    margin: 60px 17px 0 17px;
    a {
        display: block;
        width: 95%;
        height: 40px;
    }
    .mint-button.mint-button--danger.mint-button--large {
        height: 100%;
        border-radius: 10px;
        font-size: 17px;
        color: #ffffff;
    }
}

.footer {
    width: 100%;
    height: 230px;
    border-bottom: 1px solid #cccccc;
    text-align: center;
    margin-top: 20px;
    .user {
        height: 20px;
        padding-top: 10px;
        color: #999999;
        span {
            margin: 0 15px;
            line-height: 20px;
            a {
                display: inline-block;
                color: #999;
            }
        }
    }
    .icon {
        margin-top: 30px;
        width: 100%;
        img {
            width: 35px;
            height: 35px;
            &:nth-child(2) {
                margin: 0 40px;
            }
        }
        p {
            color: #999;
            span {
                a {
                    display: inline-block;
                    color: #999;
                }
            }
            span:nth-child(2) {
                margin: 0 40px;
                color: #e94f4d;
            }
        }
    }
    p {
        color: #999;
        font-size: 12px;
        line-height: 30px;
    }
}
</style>
