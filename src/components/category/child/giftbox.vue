<template>
    <div class="style">
        <div class="banner">
            <img src="../../../../static/images/p3.jpg">
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
                    src:'../../../../static/images/lihe-1.png',
                    name:'爱心型',
                    id:'giftbox_1',
                },
                 {
                    src:'../../../../static/images/lihe-2.png',
                    name:'抱抱桶',
                    id:'giftbox_2',
                },
                 {
                    src:'../../../../static/images/lihe-3.png',
                    name:'手提式',
                    id:'giftbox_3',
                },
                 {
                    src:'../../../../static/images/lihe-4.png',
                    name:'长方形',
                    id:'giftbox_4',
                },
            ]
        };
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
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 100px;
            display: flex;
            border-bottom: 1px solid #f0f0f0;
            padding: 5px 0;
            .icons {
                width: 90px;
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
                flex: 1;
                padding-left: 5px;
                padding-right: 10px;
                .title {
                    font-size: 15px;
                    color: #333333;
                    line-height: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .local {
                    font-size: 12px;
                    line-height: 15px;
                    color: #999;
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
                        color: #f00;
                        line-height: 30px;
                        font-weight: 600;
                    }
                    img {
                        width: 30px;
                        height: 30px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
</style>