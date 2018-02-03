<template>
    <div>
        <div class="head">
            <router-link to="/mycollection">
                <i class="iconfont">&#xe50d;</i>
            </router-link>
            我的收藏
        </div>
        <div class="similarityGoods">
            <div class="firstGoods">
                <div class="icons">
                    <img :src="goods.imgSrc">
                    <span class="sales">销量{{goods.sellNum}}</span>
                </div>
                <div class="item">
                    <p class="title">{{goods.title}}</p>
                    <p class="local">{{goods.local}}</p>
                    <div class="post">包邮</div>
                    <div class="buy">
                        <span class="price">￥ {{goods.price}}</span>
                        <span class="pay">{{goods.pay}}人付款</span>
                    </div>
                </div>
            </div>
            <div class="cutOffLine">
                --为你找到以下相似商品--
            </div>
             <ul class="similarityGoodsList">
                <li v-for='(val,index) in goodsList' :key='index' class="GoodsList">
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
                            <span class="pay">{{goods.pay}}人付款</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goods: {
                imgSrc: '../../../../static/images/m8.jpg',
                sellNum: '62',  // 销量
                title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                local: '深圳',
                price: '269',
                pay:'26',
            },
             goodsList: [
                {
                    imgSrc: '../../../../static/images/m8.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                    pay:'26',
                },
                {
                    imgSrc: '../../../../static/images/m6.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                    pay:'26',
                },
                {
                    imgSrc: '../../../../static/images/m3.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                    pay:'26',
                },
                {
                    imgSrc: '../../../../static/images/m8.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                    pay:'26',
                },
                {
                    imgSrc: '../../../../static/images/m6.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                    pay:'26',
                },
                {
                    imgSrc: '../../../../static/images/m3.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，融化你的心，似阳光的冬日花束',
                    local: '深圳',
                    price: '269',
                    pay:'26',
                },
            ],
        }
    }
}
</script>

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
.cutOffLine{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color:#ccc;
}
.similarityGoods {
    width: 100%;
    .firstGoods,
    .GoodsList {
        width: 100%;
        height: 100px;
        display: flex;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        padding: 5px 0;
        background-color: #fff;
         padding-left:10px;
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
                .pay{
                    font-size: 12px;
                    color:#ccc;
                }
            }
        }
    }
}
</style>

