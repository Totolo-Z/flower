<template>
    <div class="style">
        <div class="banner">
            <img src="../../../../static/images/p1.jpg">
        </div>
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
            <ul>
                <li v-for='(val,index) in goods' :key='index' @click="goCarousel(val.id)">
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
                            <img src="../../../../static/images/tianjia_changgui.png">
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
            goods: [
                {
                    imgSrc: '../../../../static/images/m8.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，圣诞花束',
                    local: '深圳',
                    price: '269',
                    addImg: '../../../../static/images/tianjia_changgui.png',
                },
                {
                    imgSrc: '../../../../static/images/m6.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，圣诞花束',
                    local: '深圳',
                    price: '269',
                    addImg: '../../../../static/images/tianjia_changgui.png',
                },
                {
                    imgSrc: '../../../../static/images/m3.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，圣诞花束',
                    local: '深圳',
                    price: '269',
                    addImg: '../../../../static/images/tianjia_changgui.png',
                },
                {
                    imgSrc: '../../../../static/images/m8.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，圣诞花束',
                    local: '深圳',
                    price: '269',
                    addImg: '../../../../static/images/tianjia_changgui.png',
                },
                {
                    imgSrc: '../../../../static/images/m6.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，圣诞花束',
                    local: '深圳',
                    price: '269',
                    addImg: '../../../../static/images/tianjia_changgui.png',
                },
                {
                    imgSrc: '../../../../static/images/m3.jpg',
                    sellNum: '62',  // 销量
                    title: '暖冬一抹温暖，圣诞花束',
                    local: '深圳',
                    price: '269',
                    addImg: '../../../../static/images/tianjia_changgui.png',
                },
            ],
            category:[
                {
                    src:'../../../../static/images/baozhuang-1.png',
                    name:'包装纸',
                    id:'pack_1',
                },
                 {
                    src:'../../../../static/images/baozhuang-2.png',
                    name:'丝带类',
                    id:'pack_2',
                },
                 {
                    src:'../../../../static/images/baozhuang-3.png',
                    name:'包装盒',
                    id:'pack_3',
                },
                 {
                    src:'../../../../static/images/baozhuang-4.png',
                    name:'工具类',
                    id:'pack_4',
                },
            ]
        };
    },
    methods:{
        goGoodslist(id){
            this.$router.push({name:'goodslist',params:{goodslistId:id}})
        },
        goCarousel(id){
            this.$router.push({name:"carousel",params:{carouselId:id}})
        }
    }
}
</script>


<style lang="less" scoped>
.banner {
    padding-right: 15px;
    height: 140px;
    img {
        width: 100%;
        height: 100%;
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
            height: 2.4rem;
            text-align: center;
            padding-top:.3rem;
            img{
                width: 1.2rem;
                height: 1.2rem;
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
                width: 100%;
                flex: 1;
                padding-left: .133333rem;
                padding-right: .266667rem;
                .title {
                    font-size:.4rem;
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
                    margin-top:.266667rem;
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