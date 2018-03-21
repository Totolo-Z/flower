<template>
    <div>
        <subcomment :commentId='swiper'></subcomment>
        <!-- 分类 -->
         <div class="flowerCategory">
          <ul>
              <li v-for="(item,index) in flowers" :key="index" @click="goGoodslist(item.id)">
                  <img :src="item.src">
                  <p>{{item.name}}</p>
              </li>
          </ul>
      </div>
        <!-- 今日限量秒杀 -->
        <div class="products">
            <h3>今日限量秒杀</h3>
            <div class="goodGoods">
                <ul>
                    <li v-for="(val,index) in product" :key="index">
                        <router-link :to="/carousel/+index">
                            <img :src="val.imgSrc">
                            <span class="sales">还剩{{val.sales}}</span>
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
                            <span class="price">￥{{val.price}}</span>
                            <img src="../../../../static/images/tianjia_changgui.png">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import subcomponent from '../../subcomponents/subcomponent';

export default {
    data() {
        return {
             swiper: [
                {
                    imgSrc: '../../../../static/images/p1.jpg'
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
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/n2.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/n3.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/n3.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/n3.jpg',
                    sales: '62',
                    title: '花暖寒冬',
                    price: '299.00',
                }
            ],
            goods: [
                {
                    imgSrc: '../../../../static/images/m1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m2.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m3.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m4.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m5.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m6.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m7.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m8.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    price: '299.00',
                },
            ],
            flowers: [
                {
                    src: '../../../../static/images/shoupeng-1.png',
                    name: '玫瑰花',
                    id: '0001',
                },
                {
                    src: '../../../../static/images/shoupeng-2.png',
                    name: '百合花',
                    id: '0002',
                },
                {
                    src: '../../../../static/images/shoupeng-3.png',
                    name: '向日葵',
                    id: '0003',
                },
                {
                    src: '../../../../static/images/shoupeng-4.png',
                    name: '康乃馨',
                    id: '0004',
                },
                {
                    src: '../../../../static/images/shoupeng-5.png',
                    name: '满天星',
                    id: '0005',
                },
                {
                    src: '../../../../static/images/shoupeng-6.png',
                    name: '非洲菊',
                    id: '0006',
                },
                {
                    src: '../../../../static/images/shoupeng-7.png',
                    name: '绣球花',
                    id: '0007',
                },
                {
                    src: '../../../../static/images/shoupeng-8.png',
                    name: '进口花',
                    id: '0008',
                },
            ]
        }
    },
    methods: {
        goGoodslist(id) {
            this.$router.push({ name: 'goodslist', params: { goodslistId: id } })
        },
    },
    components: { subcomment: subcomponent }
}
</script>

<style lang="less" scoped>

.flowerCategory{
    width: 100%;
    background-color: #fff;
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li{
            width: 25%;
            height: 2.253333rem;
            text-align: center;
            padding-top:.266667rem;
            img{
                width: 1.173333rem;
                height: 1.173333rem;
            }
            p{
                font-size: .32rem;
                color:#666;
            }
        }
    }
}

.products {
    width: 100%;
    background-color: #ffffff;
    margin-top: .266667rem;
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


.productShow {
    width: 100%;
    background-color: #fff;
    margin-top: .266667rem; 
    .product {
        width: 100%;
        height: 100%;
        margin-bottom: 2.666667rem;
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
        }
    }
}
</style>

