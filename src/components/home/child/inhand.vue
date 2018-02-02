<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(val,index) in swiper" :key="index">
                <router-link :to="'/carousel/'+index">
                    <img :src="val.imgSrc">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
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
            height: 0.8rem;
            text-align: center;
            padding-top:0.1rem;
            img{
                width: 0.44rem;
                height: 0.44rem;
            }
            p{
                font-size: 0.12rem;
                color:#666;
            }
        }
    }
}

.products {
    width: 100%;
    height: 215px;
    background-color: #ffffff;
    margin-top: 5px;
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
            width: 100%;
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
                    height: 26px;
                    line-height: 26px;
                    font-size: 14px;
                    color: #333333;
                    padding-left: 10px;
                }
                .item {
                    width: 100%;
                    height: 30px;
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

.productShow {
    width: 100%;
    height: 952px;
    background-color: #fff;
    margin-top: 10px;
    .product {
        width: 100%;
        height: 100%;
        margin-bottom: 50px;
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
        }
    }
}
</style>

