<template>
    <div>
        <div v-for="(val,index) in carouselList" :key="index">
            <!-- 产品图片 -->
            <div class="pic">
                <div class="picinfo">
                    <div class="picIcon">
                        <i class="iconfont" @click="$router.back()">&#xe50d;</i>
                    </div>
                    <img :src="val.goods_img">
                    <span class="picSales">销量{{shopPic.sales}}</span>
                </div>
                <div class="item">
                    <div class="name">
                        {{val.goods_name}}
                    </div>
                    <p class="price">￥{{shopPic.price}}</p>
                </div>
            </div>
            <!-- 店铺信息 -->
            <div class="shopMsg">
                <div class="shopinfo">
                    <div class="icon">
                        <img :src="shop.imgSrc">
                    </div>
                    <div class="item">
                        <h3 class="title">{{shop.title}}</h3>
                        <p class="grade">信誉等级:
                            <span class="star">★ ★ ★ ★</span>
                        </p>
                        <p class="safe">安全认证: <img src="../../../static/images/pinpaidianjia1.png"></p>
                        <p class="postageinfo">全店满180元包邮，偏远地区除外，港澳台地区不包邮</p>
                    </div>
                </div>
                <div class="say">
                    <img src="../../../static/images/dianpu.png">
                    <span @click="goInshop(0)">进入店铺</span>
                </div>
            </div>
            <!-- 宝贝评价 -->
            <div class="evaluate">
                <div class="evaluate-head">
                    <span>宝贝评价</span> (236)
                </div>
                <div class="evaluate-content">
                    <div class="comment-list">
                        <div class="comment-item-info">
                            <div class="comment-item-icon">
                                <img :src="evaluate.imgIcon">
                            </div>
                            <div class="comment-item-author">
                                <p class="name">{{evaluate.name}}</p>
                            </div>
                        </div>
                        <div class="comment-item-content">
                            <span class="content">{{evaluate.content}}</span>
                        </div>
                        <div class="more-content">
                            <router-link to="/evaluate/1">
                                <p>查看全部评价</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 商品详情 -->
            <div class="goodsinfo">
                <div class="goodsinfo-head">
                    <p>商品详情</p>
                </div>
                <div class="goosinfo-conten">
                    <ul v-for="(val,index) in goodsinfo" :key='index'>
                        <li class="flowerName">
                            <span>【品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌】</span>{{val.flowerName}}</li>
                        <li class="floweParten">
                            <span>【适合对象】</span>{{val.floweParten}}</li>
                        <li class="flowerScene">
                            <span>【适合场景】</span>{{val.flowerScene}}</li>
                        <li class="flowerNum">
                            <span>【鲜花朵数】</span>{{val.flowerNum}}</li>
                        <li class="flowerSize">
                            <span>【鲜花规格】</span>{{val.flowerSize}}</li>
                        <li class="vase">
                            <span>【是否含花瓶】</span>{{val.vase}}</li>
                    </ul>
                </div>
            </div>
            <div class="goon">
                <span></span>
                <span class="item">继续拖动,查看图文详情</span>
                <span></span>
            </div>
            <!-- 图片详情 -->
            <div class="pictureinfo">
                <ul>
                    <li v-for="(val,index) in pictureinfo" :key="index">
                        <img :src='val.picImg'>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <span></span>
                <span class="item">已经到底了</span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
import common from '../common/common.js';
export default {
    data() {
        return {
            carouselList: [],
            shopPic: {
                imgPic: '../../../static/images/x1.jpg',
                name: '恒爱真久,爱你一生,最浪漫的事，就是与你一起慢慢变老',
                price: '299.00',
                sales: '60',
            }
            ,
            shop:
            {
                imgSrc: '../../../../static/images/m2.jpg',
                title: '小蝶鲜花花坊',
            },
            evaluate:
            {
                imgIcon: '../../../static/images/qx.jpg',
                name: '小雪人',
                content: '首先值得肯定的是他们家的服务，是我遇见的服务态度最好的一家！因为第一次送花闹了点小插曲，但是客服很有耐心的帮我调解，最后花店重新把花抱回去重新插过了，第二次明显比第一次好了很多！花很新鲜，总的来说值得购买，下次还会来'
            },
            goodsinfo: [
                {
                    flowerName: '花有独钟',
                    floweParten: '爱人、恋人、生日、婚礼',
                    flowerScene: '爱意表达、生日、婚礼、求婚现场',
                    flowerNum: '99朵红玫瑰',
                    flowerSize: '44*88(直径×高)',
                    vase: '不含花瓶',
                }
            ],
            pictureinfo: [
                {
                    picImg: '../../../static/images/x1.jpg',
                },
                {
                    picImg: '../../../static/images/x1.jpg',
                },
                {
                    picImg: '../../../static/images/x1.jpg',
                }
            ],
        };
    },
    mounted() {
        this.carouselData()
    },
    methods: {
        goInshop(id) {
            this.$router.push({ name: 'inshop', params: { inshopId: id } })
        },
        carouselData() {
            this.$http.get(`${common.apihost}api/home/goods/detail`, {
                params: {
                    gid:this.$route.params.carouselId,
                    // gid: goods_id,
                }
            }).then((res) => {
                this.carouselList = res.body.data
                console.log(res)
            })
        }
    },
}
</script>

<style lang="less" scoped>
.pic {
    width: 100%;
    height: 10.933333rem;
    background-color: #fff;
    .picinfo {
        width: 100%;
        height: 8.533333rem;
        position: relative;
        .picIcon {
            position: absolute;
            width: .8rem;
            height: .8rem;
            background-color: rgba(51, 51, 51, 0.3);
            top: .266667rem;
            left: .266667rem;
            text-align: center;
            line-height: .8rem;
            border-radius: 50%;
            i {
                font-size: .666667rem;
                color: #fff;
            }
        }
        img {
            width: 100%;
            height: 8.533333rem;
        }
        .picSales {
            display: block;
            position: absolute;
            bottom: 0px;
            right: 0px;
            width: 2.666667rem;
            height: .8rem;
            font-size: .426667rem;
            text-align: center;
            line-height: .8rem;
            color: #ffffff;
            background-color: rgba(51, 51, 51, 0.7);
        }
    }
    .item {
        width: 100%;
        height: 2.373333rem;
        padding-left: .266667rem;
        .name {
            height: 1.333333rem;
            line-height: .666667rem;
            font-size: .453333rem;
        }
        .price {
            width: 100%;
            height: 1.013333rem;
            line-height: .96rem;
            font-size: .48rem;
            color: #ff0000;
        }
    }
}

.shopMsg {
    margin-top: .133333rem;
    width: 100%;
    height: 3.786667rem;
    margin-bottom: .266667rem;
    background-color: #fff;
    .shopinfo {
        display: flex;
        width: 100%;
        height: 2.933333rem;
        border-bottom: 1px solid #f0f0f0;
        .icon {
            width: 24%;
            height: 100%;
            position: relative;
            img {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                transform: translate(.466667rem, .533333rem);
            }
        }
        .item {
            width: 70%;
            height: 100%;
            font-size: .32rem;
            line-height: .666667rem;
            color: #666;
            .title {
                width: 100%;
                font-size: .4rem;
                line-height: .8rem;
                color: #333;
            }
            .name {
                width: 100%;
            }
            .grade {
                .star {
                    color: #ffa200;
                    font-size: .373333rem;
                }
            }
            .safe {
                img {
                    width: 1.733333rem;
                    height: .4rem;
                    vertical-align: middle;
                }
            }
            .postageinfo {
                width: 100%;
                height: .426667rem;
                line-height: .426667rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: .32rem;
                color: #999999;
            }
            .distance {
                height: .426667rem;
                line-height: .426667rem;
                color: #999999;
                img {
                    width: 10px;
                    height: .346667rem;
                    vertical-align: middle;
                }
            }
        }
    }
    .say {
        width: 100%;
        height: .853333rem;
        text-align: center;
        line-height: .853333rem;
        img {
            width: .48rem;
            height: .506667rem;
            font-size: .32rem;
            vertical-align: middle;
            margin-right: .266667rem;
        }
        span {
            color: #666;
            font-size: .32rem;
        }
    }
}

.evaluate {
    width: 100%;
    background-color: #fff;
    margin-bottom: .266667rem;
    .evaluate-head {
        width: 100%;
        height: 1.146667rem;
        line-height: 1.146667rem;
        padding-left: .266667rem;
        font-size: .4rem;
        font-weight: 500;
        border-bottom: 1px solid #f0f0f0;
        span {
            width: 2.666667rem;
            height: 100%;
        }
    }
    .evaluate-content {
        width: 100%;
        padding-bottom: .266667rem;
        .comment-list {
            width: 100%;
            .comment-item-info {
                width: 100%;
                height: .8rem;
                display: flex;
                .comment-item-icon {
                    width: 10%;
                    height: .8rem;
                    position: relative;
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-left: -12px;
                        margin-top: -12px;
                        width: .666667rem;
                        height: .666667rem;
                        border-radius: 50%;
                    }
                }
                .comment-item-author {
                    width: 90%;
                    height: .8rem;
                    .name {
                        width: 100%;
                        height: 100%;
                        line-height: .8rem;
                        font-size: .373333rem;
                        color: #333;
                        font-weight: 600;
                    }
                }
            }
            .comment-item-content {
                width: 100%;
                padding: .266667rem;
                color: #333;
                margin-bottom: .533333rem;
                .content {
                    width: 100%;
                    height: .8rem;
                    line-height: .426667rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-size: .32rem;
                }
            }
            .more-content {
                width: 100%;
                height: .666667rem;
                p {
                    width: 2.4rem;
                    height: .64rem;
                    margin: 0 auto;
                    font-size: .32rem;
                    border: 1px solid #fd9596;
                    text-align: center;
                    color: #ff0300;
                    line-height: .64rem;
                    border-radius: 5px;
                }
            }
        }
    }
}

.goodsinfo {
    width: 100%;
    margin-top: .266667rem;
    background-color: #fff;
    padding-left: .266667rem;
    .goodsinfo-head {
        width: 100%;
        height: 1.173333rem;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: .133333rem;
        p {
            line-height: 1.173333rem;
            font-size: .266667rem;
            color: #333;
        }
    }
    .goosinfo-conten {
        width: 100%;
        ul {
            width: 100%;
            li {
                width: 100%;
                height: .933333rem;
                line-height: .933333rem;
                margin-bottom: .133333rem;
                color: #999;
                font-size: .333333rem;
                span {
                    font-size: .346667rem;
                    color: #333;
                }
            }
        }
    }
}

.goon,
.bottom {
    width: 100%;
    height: 1.066667rem;
    padding: .266667rem;
    span {
        border-top: 1px solid #ccc;
        width: 23%;
        height: 1px;
        display: inline-block;
    }
    .item {
        width: 50%;
        text-align: center;
        border: none;
        color: #ccc;
        font-size: .346667rem;
    }
}

.bottom {
    margin-bottom: 1.333333rem;
}

.pictureinfo {
    width: 100%;
    background-color: #fff;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 8.8rem;
            margin-bottom: .133333rem;
            img {
                width: 100%;
                height: 8.8rem;
                margin: auto;
            }
        }
    }
}
</style>
