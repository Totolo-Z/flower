<template>
    <div>
        <div class="head">
            <router-link to="/membercenter">
                <i class="iconfont">&#xe50d;</i>
            </router-link>
            我的收藏
        </div>
        <div class="myCollectGoods">
            <span class="myCollectDate">最近一个月收藏</span>
            <ul class="myCollectGoodsList">
                <li v-for='(val,index) in goods' :key='index'>
                    <div class="icons">
                        <img :src="val.imgSrc">
                        <span class="sales">销量{{val.sellNum}}</span>
                    </div>
                    <div class="item">
                        <p class="title">{{val.title}}</p>
                        <p class="local">{{val.local}}</p>
                        <div class="post">包邮</div>
                        <div class="buy">
                            <span class="price">￥ {{val.price}}</span>
                            <div class="seachSimilarity">
                                <span class="seachItem">
                                    <router-link to="seachSimilarity">
                                    找相似
                                    </router-link></span>
                                <i class="iconfont">&#xe625;</i>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #ff6666;
    position: relative;
    font-size: 15px;
    text-align: center;
    line-height: 38px;
    color: #fff;
    a {
        color: #fff;
        i {
            position: absolute;
            left: 10px;
            font-size: 20px;
        }
    }
}

.myCollectGoods {
    width: 100%;
    background-color: #fff;
    padding: 0 10px;
    .myCollectDate {
        width: 100%;
        font-size: 12px;
        color: #ccc;
        height: 26px;
        line-height: 26px;
    }
}

.myCollectGoodsList {
    width: 100%;
    li {
        width: 100%;
        height: 100px;
        display: flex;
        border-bottom: 1px solid #f0f0f0;
        padding: 5px 0;
        .icons {
            width: 25%;
            height: 90px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .sales {
                position: absolute;
                width: 45px;
                height: 18px;
                right: 0px;
                bottom: 0px;
                font-size: 12px;
                text-align: center;
                line-height: 20px;
                color: #ffffff;
                background-color: rgba(51, 51, 51, 0.7);
            }
        }
        .item {
            width: 75%;
            padding-left: 15px;
            padding-right: 10px;
            .title {
                font-size: 15px;
                color: #333333;
                line-height: 15px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .local {
                font-size: 12px;
                line-height: 20px;
                color: #999999;
            }
            .post {
                width: 30px;
                height: 15px;
                border-radius: 5px;
                text-align: center;
                line-height: 15px;
                color: #fff;
                background-color: #ffa800;
            }
            .buy {
                display: flex;
                justify-content: space-between;
                .price {
                    font-size: 15px;
                    color: #ff0000;
                    line-height: 30px;
                    font-weight: 600;
                }
                .seachSimilarity {
                    font-size: 12px;
                    color: #999;
                    text-align: center;
                    line-height: 30px;
                    .seachItem {
                        display: inline-block;
                        width: 46px;
                        height: 17px;
                        line-height: 17px;
                        border-radius: 5px;
                        border:1px solid #999;
                        a{
                            color:#999;
                        }
                    }
                }
            }
        }
    }
}
</style>
<script>
export default {
    data() {
        return {
            goods: [
                {
                    imgSrc: '../../../../static/images/m8.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                },
                {
                    imgSrc: '../../../../static/images/m6.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                },
                {
                    imgSrc: '../../../../static/images/m3.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                },
                {
                    imgSrc: '../../../../static/images/m8.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                },
                {
                    imgSrc: '../../../../static/images/m6.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                },
                {
                    imgSrc: '../../../../static/images/m3.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                },
            ],
        };
    },
}
</script>
