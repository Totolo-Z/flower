<template>
    <div>
        <subcomment :commentId='swiper'></subcomment>
        <!-- 搜索 -->
        <div class="search">
            <van-search placeholder="请输入商品名称" v-model="value" />
        </div>
        <!-- 精品 -->
        <div class="products">
            <h3>今日推荐</h3>
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
            <div class="banner" v-for="(val,index) in presell" :key="index" @click="goAdversity(val.cat_id)">
                <img :src="val.cat_adimg_1">
                <p class="title">{{val.cat_name}}</p>
                <div class="item">
                    <span class="description">{{val.cat_desc}}</span>
                    <span class="price">￥{{val.wx_price | PriceFilter }}起</span>
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
                        <p @click="pullMore">查看更多</p>
                        <img src="../../../../static/images/more.png">
                    </div>
                </ul>
            </div>
        </div>
        <div class="footer">
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
        <navcomponent> </navcomponent>
    </div>
</template>


<script>
import { Toast } from 'mint-ui';
import common from '../../common/common.js';
import subcomponent from '../../subcomponents/subcomponent.vue';
import navcomponent from '../../subcomponents/navcomponent.vue';
export default {
    data() {
        return {
            value:'',
            swiper: [],
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
            presell: [],
            goods: [
                {
                    id: 1,
                    name:'小蝶鲜花花坊',
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
    mounted(){
        this.swiperData();
        this.adverstData()
    },
    methods: {
        goAdversity(id){
            this.$router.push({path:`/adversitycarousel/${id}`})
        },
        goCarousel(id) {
            this.$router.push({ name: 'carousel', params: { carouselId: id } })
        },
        addGoods(val) {
            // console.log(val);
            Toast('添加成功');
            this.$store.commit('addGoodsCar', val);
        },
        swiperData(){
            this.$http.get(`${common.apihost}api/home/slides/Slides`).then((res)=>{
                if(res.data.code===1){
                    this.swiper=res.body.data
                }
            })
        },
        adverstData(){
            this.$http.get(`${common.apihost}api/home/advert/index`).then((res)=>{
                if(res.data.code===1){
                    this.presell=res.body.data
                }
            })
        },
        pullMore() {
            this.goods.push
            (
                {
                    id: 1,
                    imgSrc: '../../../../static/images/n1.jpg',
                    sales: '62',
                    title: '红玫瑰黄玫瑰白玫瑰都是好玫瑰',
                    price: 23.44,
                },
                {
                    id: 2,
                    imgSrc: '../../../../static/images/n2.jpg',
                    sales: '62',
                    title: '红百合黄百合',
                    price: 44,
                },
                {
                    id: 3,
                    imgSrc: '../../../../static/images/n3.jpg',
                    sales: '62',
                    title: '巴拉拉小魔仙',
                    price: 55,
                },
                {
                    id: 4,
                    imgSrc: '../../../../static/images/m4.jpg',
                    sales: '62',
                    title: '哆啦A梦',
                    price: 66,
                },
            )
        }
    },
    components: {
        subcomment: subcomponent,
        navcomponent
    },
}
</script>


<style lang="less" scoped>

.search{
    width: 100%;
    height: .8rem;
    background-color: yellow;
    margin-bottom: .133333rem;
}

.products {
    width: 100%;
    height: 5.733333rem;
    background-color: #ffffff;
    margin-top:.3rem;
    h3 {
        font-size: .453333rem;
        text-align: center;
        line-height: .853333rem;
    }
    .goodGoods {
        width: 100%;
        height: 4.88rem;
        overflow-x: auto;
        ul {
            width: 300%;
            height: 100%;
            display: flex;
            li {
                width: 3.333333rem;
                height: 100%;
                margin-left: .266667rem;
                position: relative;
                img {
                    width: 3.333333rem;
                    height:3.333333rem;
                }
                .sales {
                    display: block;
                    position: absolute;
                    bottom: 1.546667rem;
                    right: 0px;
                    width: 1.573333rem;
                    height: .533333rem;
                    font-size: .32rem;
                    text-align: center;
                    line-height: .533333rem;
                    color: #ffffff;
                    background-color: rgba(51, 51, 51, 0.7);
                }
                p {
                    width: 100%;
                    height: .666667rem;
                    line-height: .666667rem;
                    font-size: .373333rem;
                    color: #333333;
                    padding-left: .266667rem;
                }
                .item {
                    width: 100%;
                    height: .666667rem;
                    display: flex;
                    justify-content: space-between;
                    span {
                        padding-left:.266667rem;
                        font-size: .373333rem;
                        line-height: .64rem;
                        color: #ff0000;
                    }
                    img {
                        width: .586667rem;
                        height:.586667rem;
                    }
                }
            }
        }
    }
}

.presell {
    margin-top: .266667rem;
    width: 100%;
    background-color: #fff;
    h3 {
        font-size: .453333rem;
        text-align: center;
        line-height: .8rem;
    }
    .banner {
        padding: 0   .266667rem;
        border-bottom: 1px solid #f0f0f0;
        &:last-child {
            margin-top: .133333rem;
            border: none;
        }
        img {
            width: 100%;
            height: 4.186667rem;
        }
        p {
            height: .4rem;
            margin-top: .133333rem;
            font-size: .373333rem;
            line-height: .4rem;
        }
        .item {
            width: 100%;
            line-height: .8rem;
            display: flex;
            justify-content: space-between;
            .description {
                font-size: .293333rem;
                color: #999999;
            }
            .price {
                color: #ff0000;
                font-size: .32rem;
            }
        }
    }
}

.productShow {
    width: 100%;
    background-color: #fff;
    margin-top: .266667rem;
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
                height: 6.346667rem;
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
                p {
                    width: 4.106667rem;
                    height: .8rem;
                    line-height: .8rem;
                    margin:0 auto;
                    font-size: .373333rem;
                    color: #333333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: left;
                }
                .item {
                    width: 4.106667rem;
                    height: 1.066667rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    span {
                        font-size: .4rem;
                        line-height: .8rem;
                        color: #ff0000;
                    }
                    img {
                        width: .8rem;
                        height:.813333rem;
                    }
                }
            }
            .more {
                width: 100%;
                height:1.2rem;
                background-color: #ffffff;
                text-align: center;
                margin-bottom: .266667rem;
                p {
                    line-height: 1.026667rem;
                    margin: 0px;
                    font-size:.28rem;
                    color: #666666;
                }
                img {
                    width: .24rem;
                    height: .213333rem;
                    vertical-align: top;
                }
            }
        }
    }
}

.footer {
    width: 100%;
    height: 6.133333rem;
    border-bottom: 1px solid #cccccc;
    text-align: center;
    margin-top: .533333rem;
    .icon {
        margin-top: .8rem;
        width: 100%;
        img {
            width: .933333rem;
            height: .933333rem;
            &:nth-child(2) {
                margin: 0 .533333rem;
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
                margin: 0 1.066667rem;
                color: #e94f4d;
            }
        }
    }
    p {
        color: #999;
        font-size: .32rem;
        line-height: .8rem;
    }
}
</style>
