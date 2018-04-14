<template>
    <div>
        <!-- 商品列表 -->
        <div class="adversityProduct">
            <div class="product">
                <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <li v-for="(val,index) in goodsList" :key="index">
                        <div class="icons">
                            <img :src="val.goods_img">
                            <span class="sales">销量{{val.sales}}</span>
                        </div>
                        <p class="title">{{val.goods_name}}</p>
                        <div class="districtPost">
                            <span class="postStatus">包邮</span>
                            <span class="district">{{val.city}}</span>
                        </div>
                        <div class="item">
                            <span class="price">￥{{val.shop_price}}</span>
                            <img src="../../../static/images/tianjia_changgui.png">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <navcomponent></navcomponent>
    </div>
</template>

<script>
import navcomponent from '../subcomponents/navcomponent';
import common from '../common/common.js';
import { InfiniteScroll } from 'mint-ui';
export default {
    data() {
        return {
            goodsList: [],
            pageIndex: 1,
        }
    },
    mounted() {
        this.goodsListData()
    },
    methods: {
        goodsListData() {
            this.$http.get(`${common.apihost}api/home/advert/advertList`,
                {
                    params: {
                        advert_id: this.$route.params.adversitycarouselId
                    }

                }
            ).then((res) => {
                this.goodsList = res.body.data
            })
        },
        loadMore() {
            this.loading = true;
            this.pageIndex++;
            this.goodsListData();
        },
    },
    components: {
        navcomponent
    }
}
</script>


<style lang="less" scoped>
.adversityProduct {
    width: 100%;
    background-color: #fff;
    margin-bottom: 1.333333rem;
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
                height: 6.666667rem;
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
                .title {
                    text-align: left;
                    width: 4.106667rem;
                    height: .8rem;
                    line-height: .8rem;
                    margin: 0 auto;
                    font-size: .373333rem;
                    color: #333333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .districtPost {
                    width: 4.106667rem;
                    height: .533333rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    .postStatus {
                        width: .8rem;
                        height: .426667rem;
                        background-color: #ffa800;
                        border-radius: .08rem;
                        line-height: .426667rem;
                        color: #fff;
                        font-size: .32rem;
                    }
                    .district {
                        font-size: .32rem;
                        color: #999
                    }
                }
                .item {
                    width: 4.106667rem;
                    height: .933333rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    span {
                        font-size: .4rem;
                        line-height: .8rem;
                        color: #ff0000;
                    }
                    img {
                        width: .746667rem;
                        height: .773333rem;
                    }
                }
            }
        }
    }
}
</style>

