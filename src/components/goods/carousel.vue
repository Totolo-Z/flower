<template>
    <div>
        <!-- 产品图片 -->
        <div class="pic">
            <div class="picinfo">
                <div class="picIcon">
                    <i class="iconfont" @click="$router.back()">&#xe50d;</i>
                </div>
                <span class="collect"><img src="../../../static/images/weishoucang.png"></span>
                <img :src="shopPic.imgPic">
                <span class="picSales">销量{{shopPic.sales}}</span>
            </div>
            <div class="item">
                <div class="name">
                    {{shopPic.name}}
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
                    <p class="name">会员名字: {{shop.name}}</p>
                    <p class="grade">信誉等级:
                        <span class="star"> {{shop.star}}</span>
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
            <div class="evaluate-tag">
                <span class="tag-posi">
                    <a href="#">花很新鲜(23)</a>
                </span>
                <span class="tag-posi">
                    <a href="#">上门送货很快(52)</a>
                </span>
                <span class="tag-posi">
                    <a href="#"> 包装挺好(56)</a>
                </span>
                <span class="tag-posi">
                    <a href="#">质量不错(45)</a>
                </span>
                <span class="tag-neg">
                    <a href="#">不新鲜(4)</a>
                </span>
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
        <!-- 商铺位置 -->
        <div class="location">
            <div class="location-head">
                店铺实时位置
            </div>
            <div class="shopinfo">
                <div class="location-shop">
                    <i class="iconfont">&#xe68b;</i>
                    <h3 class="shopsname">{{shopinfo.shopsname}}</h3>
                    <span class="distanceNum">{{shopinfo.distanceNum}}km</span>
                </div>
            </div>
            <div class="shopmap">
                <p class="site">{{shopinfo.site}}</p>
                <div class="checkshop">
                    <router-link to="/shopinfo/1">
                        <p>查看店铺门面</p>
                    </router-link>
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
        <!-- 热门推荐 -->

        <div class="hot-advice">
            <div class="hot-advice-title">
                <p>热门推荐</p>
            </div>
            <div class="hot-advice-goods">
                <ul>
                    <li v-for="(val,index) in product" :key="index">
                        <router-link to="">
                            <img :src="val.imgSrc">
                            <span class="sales">销量{{val.sales}}</span>
                        </router-link>
                        <p class="title">{{val.title}}</p>
                        <div class="item">
                            <span class="price">￥{{val.price}}</span>
                            <img src="../../../static/images/tianjia_jieri.png">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <span></span>
            <span class="item">已经到底了</span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
                name: '小蝶儿',
                star: '★ ★ ★ ★',
            },
            evaluate:
            {
                imgIcon: '../../../static/images/qx.jpg',
                name: '小雪人',
                content: '首先值得肯定的是他们家的服务，是我遇见的服务态度最好的一家！因为第一次送花闹了点小插曲，但是客服很有耐心的帮我调解，最后花店重新把花抱回去重新插过了，第二次明显比第一次好了很多！花很新鲜，总的来说值得购买，下次还会来'
            },
            shopinfo:
            {
                shopsname: '小蝶鲜花花坊',
                distanceNum: '8.3',
                site: '宝安区西乡共和华丰互联网创意园',
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
            product: [
                {
                    imgSrc: '../../../static/images/n2.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/n2.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/n2.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: '299.00',
                }
            ],
        };
    },
    // created() {
    //     this.getGoodsInfo();
    // },
    methods: {
        // goBack(){
        //     this.router.go(-1);
        // },
        goInshop(id) {
            this.$router.push({ name: 'inshop', params: { inshopId: id } })
        },
        //     getGoodsInfo() {
        //         console.log(this.$route.params.carouselId);
        //         this.$http.post('/dsahdaoi', {
        //             head: {
        //             },
        //             body: {
        //             },
        //         }).then((res) => {
        //             console.log(res.data.data);
        //         }).catch();
        //         const res = [
        //             {
        //                 imgSrc: '../../../static/images/n2.jpg',
        //                 sales: '35',
        //                 title: '春暖夏凉',
        //                 price: '250.00',
        //             },
        //             {
        //                 imgSrc: '../../../static/images/n2.jpg',
        //                 sales: '35',
        //                 title: 'shabibi',
        //                 price: '250.00',
        //             },
        //             {
        //                 imgSrc: '../../../static/images/n2.jpg',
        //                 sales: '35',
        //                 title: 'shabibi',
        //                 price: '250.00',
        //             }
        //         ];
        //     }
    },
}
</script>

<style lang="less" scoped>
.pic {
    width: 100%;
    height: 410px;
    background-color: #fff;
    .picinfo {
        width: 100%;
        height: 320px;
        position: relative;
        .picIcon {
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: rgba(51, 51, 51, 0.3);
            top: 10px;
            left: 10px;
            text-align: center;
            line-height: 30px;
            border-radius: 50%;
            i {
                font-size: 25px;
                color: #fff;
            }
        }
        .collect {
            width: 30px;
            height: 30px;
            position: absolute;
            right: 20px;
            top: 10px;
            img {
                width: 25px;
                height: 25px;
            }
        }
        img {
            width: 100%;
            height: 320px;
        }
        .picSales {
            display: block;
            position: absolute;
            bottom: 0px;
            right: 0px;
            width: 100px;
            height: 30px;
            font-size: 16px;
            text-align: center;
            line-height: 30px;
            color: #ffffff;
            background-color: rgba(51, 51, 51, 0.7);
        }
    }
    .item {
        width: 100%;
        height: 89px;
        padding-left: 10px;
        .name {
            height: 50px;
            line-height: 25px;
            font-size: 17px;
        }
        .price {
            width: 100%;
            height: 38px;
            line-height: 36px;
            font-size: 18px;
            color: #ff0000;
        }
    }
}

.shopMsg {
    margin-top: 5px;
    width: 100%;
    height: 142px;
    margin-bottom: 10px;
    background-color: #fff;
    .shopinfo {
        display: flex;
        width: 100%;
        height: 110px;
        border-bottom: 1px solid #f0f0f0;
        .icon {
            width: 24%;
            height: 100%;
            position: relative;
            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -30px;
                margin-left: -30px;
            }
        }
        .item {
            width: 70%;
            height: 100%;
            .title {
                width: 100%;
                font-size: 15px;
                line-height: 30px;
            }
            .name {
                width: 100%;
                line-height: 16px;
                color: #666666;
                font-size: 12px;
            }
            .grade {
                color: #999999;
                line-height: 16px;
                font-size: 12px;
                .star {
                    color: #ffa200;
                    font-size: 14px;
                }
            }
            .safe {
                color: #999999;
                line-height: 16px;
                height: 16px;
                font-size: 12px;
                img {
                    width: 65px;
                    height: 13px;
                    vertical-align: middle;
                }
            }
            .postageinfo {
                width: 100%;
                height: 16px;
                line-height: 16px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
            }
            .distance {
                height: 16px;
                line-height: 16px;
                color: #999999;
                img {
                    width: 10px;
                    height: 13px;
                    vertical-align: middle;
                }
            }
        }
    }
    .say {
        width: 100%;
        height: 32px;
        text-align: center;
        line-height: 32px;

        img {
            width: 18px;
            height: 19px;
            font-size: 12px;
            vertical-align: middle;
            margin-right: 10px;
        }
        a {
            display: inline-block;
            color: #666;
            font-size: 12px;
        }
    }
}

.evaluate {
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
    .evaluate-head {
        width: 100%;
        height: 43px;
        line-height: 43px;
        padding-left: 10px;
        font-size: 15px;
        font-weight: 500;
        border-bottom: 1px solid #f0f0f0;
        span {
            width: 100px;
            height: 100%;
        }
    }
    .evaluate-tag {
        width: 100%;
        height: 80px;
        padding-left: 10px;
        span {
            display: block;
            max-width: 100%;
            height: 23px;
            border-radius: 10px;
            float: left;
            margin-right: 5px;
            margin-top: 10px;
            a {
                display: block;
                height: 23px;
                padding: 0 13px;
                line-height: 23px;
                text-align: center;
                font-size: 12px;
            }
        }
        .tag-posi {
            background-color: #ffe0e0;
            a {
                color: #ff0300;
            }
        }
        .tag-neg {
            background-color: #f1f1f1;
            a {
                color: #999999;
            }
        }
    }
    .evaluate-content {
        width: 100%;
        padding-bottom: 10px;
        .comment-list {
            width: 100%;
            .comment-item-info {
                width: 100%;
                height: 30px;
                display: flex;
                .comment-item-icon {
                    width: 10%;
                    height: 30px;
                    position: relative;
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-left: -12px;
                        margin-top: -12px;
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                    }
                }
                .comment-item-author {
                    width: 90%;
                    height: 30px;
                    .name {
                        width: 100%;
                        height: 100%;
                        line-height: 30px;
                        font-size: 14px;
                        color: #333;
                        font-weight: 600;
                    }
                }
            }
            .comment-item-content {
                width: 100%;
                padding: 10px; // height: 35px;
                color: #333;
                margin-bottom: 20px;
                .content {
                    width: 100%;
                    height: 30px;
                    line-height: 16px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            }
            .more-content {
                width: 100%;
                height: 25px;
                p {
                    width: 90px;
                    height: 24px;
                    margin: 0 auto;
                    font-size: 12px;
                    border: 1px solid #fd9596;
                    text-align: center;
                    color: #ff0300;
                    line-height: 24px;
                    border-radius: 5px;
                }
            }
        }
    }
}

.location {
    width: 100%;
    height: 150px;
    background-color: #fff;
    padding-left: 10px;
    .location-head {
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 15px;
        line-height: 44px;
        color: #333;
        font-weight: 500;
    }
    .shopinfo {
        width: 100%;
        height: 30px;
        .location-shop {
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            i {
                font-size: 16px;
                color: #ff0000;
            }
            .shopsname {
                font-size: 16px;
                padding: 0 5px;
            }
            .distanceNum {
                font-size: 13px;
                color: #999;
            }
        }
    }
    .shopmap {
        width: 100%;
        .site {
            width: 100%;
            height: 25px;
            font-size: 13px;
            line-height: 25px;
        }
        .checkshop {
            width: 100%;
            height: 25px;
            margin-top: 15px;
            p {
                width: 90px;
                height: 24px;
                font-size: 12px;
                margin: 0 auto;
                border: 1px solid #fd9596;
                text-align: center;
                color: #ff0300;
                line-height: 24px;
                border-radius: 5px;
            }
        }
    }
}

.goodsinfo {
    width: 100%;
    margin-top: 10px;
    background-color: #fff;
    padding-left: 10px;
    .goodsinfo-head {
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 5px;
        p {
            line-height: 44px;
            font-size: 15px;
            color: #333;
        }
    }
    .goosinfo-conten {
        width: 100%;
        ul {
            width: 100%;
            li {
                width: 100%;
                height: 35px;
                line-height: 35px;
                margin-bottom: 5px;
                color: #999;
                span {
                    font-size: 13px;
                    color: #333;
                }
            }
        }
    }
}

.goon,
.bottom {
    width: 100%;
    height: 40px;
    padding: 10px;
    span {
        border-top: 1px solid #ccc;
        width: 24%;
        height: 1px;
        display: inline-block;
    }
    .item {
        width: 50%;
        text-align: center;
        border: none;
        color: #ccc;
        font-size: 13px;
    }
}

.bottom {
    margin-bottom: 50px;
}

.pictureinfo {
    width: 100%;
    min-height: 300px;
    background-color: #fff;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 330px;
            margin-bottom: 5px;
            img {
                width: 100%;
                height: 330px;
                margin: auto;
            }
        }
    }
}

.hot-advice {
    width: 100%;
    height: 253px;
    padding-left: 10px;
    background-color: #fff;
    margin-top: 10px;
    .hot-advice-title {
        width: 100%;
        height: 43px;
        border-bottom: 1px solid #f0f0f0;
        p {
            line-height: 43px;
            font-size: 15px;
            color: #333;
        }
    }
    .hot-advice-goods {
        width: 100%;
        height: 210px;
        padding-top: 15px;
        overflow-x: auto;
        ul {
            width: 200%;
            height: 100%;
            display: flex;
            li {
                width: 125px;
                height: 100%;
                margin-right: 10px;
                position: relative;
                img {
                    width: 125px;
                    height: 125px;
                }
                .sales {
                    display: block;
                    position: absolute;
                    bottom: 70px;
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
</style>
