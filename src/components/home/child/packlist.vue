<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(val,index) in swiper" :key="index">
                <router-link :to="/carousel/+index">
                    <img :src="val.imgSrc">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
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
                    <li v-for="(val,index) in goods" :key="index"  @click="goCarousel(val.id)">  
                            <div class="icons">
                                <img :src="val.imgSrc">
                                <span class="sales">销量{{val.sales}}</span>
                            </div>
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
                    src:'../../../../static/images/baozhuang-1.png',
                    name:'包装纸',
                    id:'packlist_1',
                },
                {
                    src:'../../../../static/images/baozhuang-2.png',
                    name:'丝带类',
                    id:'packlist_2',
                },
                {
                    src:'../../../../static/images/baozhuang-3.png',
                    name:'包装盒',
                    id:'packlist_3',
                },
                {
                    src:'../../../../static/images/baozhuang-4.png',
                    name:'工具类',
                    id:'packlist_4',
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


