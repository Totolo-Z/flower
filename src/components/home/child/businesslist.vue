<template>
  <div>
        <subcomment :commentId='swiper'></subcomment>
         <!-- 分类 -->
        <div class="flowerCategory">
            <ul>
                <li v-for="(item,index) in category" :key="index" @click="goGoodslist(item.id)">
                    <img :src="item.src">
                    <p>{{item.name}}</p>
                </li>
            </ul>
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
import subcomponent from '../../subcomponents/subcomponent.vue';
 
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
            category:[
                {
                    src:'../../../../static/images/shangwu-1.png',
                    name:'开业花篮',
                    id:'001',
                },
                {
                    src:'../../../../static/images/shangwu-2.png',
                    name:'婚庆花篮',
                    id:'002',
                },
                {
                    src:'../../../../static/images/shangwu-3.png',
                    name:'台花',
                    id:'003',
                },
                  {
                    src:'../../../../static/images/shangwu-4.png',
                    name:'桌花',
                    id:'004',
                },
            ]
        }
    },
    methods:{
        goGoodslist(id){
            this.$router.push({name:'goodslist',params:{goodslistId:id}})
        },
         goCarousel(id){
            this.$router.push({name:'carousel',params:{carouselId:id}})
        }
    },
    components:{
        subcomment:subcomponent
    },
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

