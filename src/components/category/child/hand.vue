<template>
    <div class="style">
        <div class="banner">
            <img src="../../../../static/images/p4.jpg">
        </div>
        <!-- 分类 -->
        <div class="flowerCategory">
            <ul>
                <li v-for="(item,index) in categorylist" :key="index" @click="goGoodslist(item.cat_id)">
                    <img :src="item.cat_adimg_1" :onerror="moren">
                    <p>{{item.cat_name}}</p>
                </li>
            </ul>
        </div>
        <!-- 商品展示 -->
        <div class="productShow">
            <ul>
                <li v-for='(val,index) in catGoods' :key='index' @click="goCarousel(val.goods_id)">
                    <div class="icons">
                        <img :src="val.goods_thumb">
                        <span class="sales">销量{{val.sales}}</span>
                    </div>
                    <div class="item">
                        <p class="title">{{val.goods_name}}</p>
                        <p class="local">{{val.city}}</p>
                        <div class="post">包邮</div>
                        <div class="buy">
                            <span class="price">￥{{val.shop_price}}</span>
                            <img src="../../../../static/images/tianjia_changgui.png">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import common from '../../common/common.js';
export default {
    data() {
        return { 
            moren: 'this.src="' + require('../../../../static/images/moren.png') + '"'  ,       
            catGoods:[],
            categorylist: [],
        };
    },
    mounted() {
        this.categoryListData(),
        this.catGoodsData()
    },
    watch:{
        $route(){
            this.categoryListData(),
            this.catGoodsData()
        },
    },
    methods: {
        goGoodslist(id) {
            this.$router.push({ path:`/goodslist/${id}`})
        },
        goCarousel(id) {
            this.$router.push({ path:`/carousel/${id}`})
        },
        categoryListData() {
            this.$http.get(`${common.apihost}api/home/category/catMain`, {
                params:{
                     cid:this.$route.params.handId
                }      
            }).then((res) => {
                this.categorylist = res.body.msg
            })
        },
        catGoodsData(){
            this.$http.get(`${common.apihost}api/home/category/catGoods`,{
                params:{
                    cid:this.$route.params.handId
                }
            }).then((res)=>{
                this.catGoods=res.body.data
            })
        }
    }
}
</script>


<style lang="less" scoped>
.banner {
    margin-top:.2rem;
    padding-right: .4rem;
    height: 3.733333rem;
    img {
        width: 100%;
        height: 100%;
    }
}

.flowerCategory {
    width: 100%;
    background-color: #fff;
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
            width: 25%;
            height: 2.4rem;
            text-align: center;
            padding-top: .3rem;
            img {
                width: 1.2rem;
                height: 1.2rem;
            }
            p {
                font-size: .32rem;
                color: #666;
            }
        }
    }
}

.productShow {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 2.666667rem;
            display: flex;
            border-bottom: 1px solid #f0f0f0;
            padding: .133333rem 0;
            .icons {
                width: 2.4rem;
                height: 2.4rem;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
                .sales {
                    position: absolute;
                    width: 1.2rem;
                    height: .48rem;
                    right: 0px;
                    bottom: 0px;
                    font-size: .32rem;
                    text-align: center;
                    line-height: .533333rem;
                    color: #fff;
                    background-color: rgba(51, 51, 51, 0.7);
                }
            }
            .item {
                width: 50%;
                flex: 1;
                padding-left: .133333rem;
                padding-right: .266667rem;
                .title {
                    font-size: .4rem;
                    height: .533333rem;
                    color: #333;
                    line-height: .533333rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .local {
                    height: .4rem;
                    font-size: .32rem;
                    line-height: .533333rem;
                    color: #999;
                }
                .post {
                    width: .8rem;
                    height: .4rem;
                    border-radius: 5px;
                    text-align: center;
                    margin-top: .266667rem;
                    color: #fff;
                    background-color: #ffa800;
                    font-size: .32rem;
                }
                .buy {
                    display: flex;
                    justify-content: space-between;
                    .price {
                        font-size: .4rem;
                        color: #ff0000;
                        line-height: .8rem;
                        font-weight: 600;
                    }
                    img {
                        width: .8rem;
                        height: .8rem;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
</style>


