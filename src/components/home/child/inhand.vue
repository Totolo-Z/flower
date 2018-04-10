<template>
    <div>
        <subcomment :commentId='swiper'></subcomment>
        <!-- 分类 -->
         <div class="flowerCategory">
          <ul>
              <li v-for="(item,index) in categorylist" :key="index" @click="goGoodslist(item.cat_id)">
                  <img :src="item.cat_adimg_1">
                  <p>{{item.cat_name}}</p>
              </li>
          </ul>
      </div>
        <!-- 商品展示 -->
        <div class="productShow">
            <div class="product">
                <ul>
                    <li v-for="(val,index) in flowerList" :key="index" @click="goCarousel(val.goods_id)"> 
                            <div class="icons">
                                <img :src="val.goods_thumb">
                                <span class="sales">销量{{val.sales}}</span>
                            </div>
                        <p class="title">{{val.goods_name}}</p>
                        <div class="item">
                            <span class="price">￥{{val.shop_price}}</span>
                            <img src="../../../../static/images/tianjia_changgui.png">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <navcomponent> </navcomponent>
    </div>
</template>

<script>
import subcomponent from '../../subcomponents/subcomponent';
import navcomponent from '../../subcomponents/navcomponent.vue';
import common from '../../common/common.js';
export default {
    data() {
        return {
            categorylist:{},
            flowerList:[],
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
        }
    },
    mounted(){
        this.categorylistData()
        this.flowerListData()
    },
    watch:{
        $route(){
            this.categorylistData(),
            this.flowerListData()
        }
    },
    methods: {
        goGoodslist(id) {
            this.$router.push({path:`/goodslist/${id}`})
        },
        goCarousel(id){
            this.$router.push({path:`/carousel/${id}`})
        },
        categorylistData(){
            this.$http.get(`${common.apihost}api/home/category/catMain`,{
                params:{
                    cid:this.$route.params.inhandId
                }
            }).then((res)=>{
                this.categorylist=res.body.msg
            })
        },
        flowerListData(){
            this.$http.get(`${common.apihost}api/home/category/catGoods`,{
                params:{
                    cid:this.$route.params.inhandId
                }
            }).then((res)=>{
                this.flowerList=res.body.data
            })
        }
        
    },
    components: { 
        subcomment: subcomponent,
        navcomponent
    }
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

