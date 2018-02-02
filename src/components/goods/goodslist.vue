<template>
    <div>
        <div class="head">
            <span class="synthesize" @click="openContent=!openContent;">
                {{ rank[activeIndex] }}
                <i class="iconfont">&#xe501;</i>
            </span>
            <span class="sales">销量优先
                <i class="iconfont" @click="changeIcon=false" v-show="changeIcon">&#xe6af;</i>
                <i class="iconfont" @click="changeIcon=true" v-show="!changeIcon">&#xe658;</i>
            </span>
            <span class="filtrate" @click="show=!show">筛选
                <i class="iconfont">&#xe672;</i>
            </span>
            <div class="accordion" v-show="openContent">
                <ul>
                    <li v-for="(item,index) in rank" :key="index" :class="{'active': activeIndex === index}" @click="activeIndex = index">
                        {{item}}
                        <i class="iconfont" v-show="activeIndex === index">&#xe64a;</i>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 商品列表 -->
        <div class="productShow" v-show="!changeIcon">
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
                        <div class="districtPost">
                            <span class="postStatus">{{val.postStatus}}</span>
                            <span class="district">{{val.district}}</span>
                        </div>
                        <div class="item">
                            <span class="price">￥{{val.price}}</span>
                            <img src="../../../static/images/tianjia_changgui.png">
                        </div>
                    </li>
                    <div class="more">
                        <p>查看更多</p>
                        <img src="../../../static/images/more.png">
                    </div>
                </ul>
            </div>
        </div>
        <!-- 商品列表2  -->
        <div>
            <ul class="shopContent" v-show="changeIcon">
                <li v-for="(item,index) in goods" :key="index">
                    <div class="imgInfo">
                        <img :src="item.imgSrc">
                        <span class="salesVolume">销量{{item.sales}}</span>
                    </div>
                    <div class="shopInfo">
                        <h5 class="commodity">{{item.title}}</h5>
                        <p class="district">{{item.district}}</p>
                        <p class="postStatus">{{item.postStatus}}</p>
                        <div class="priceItem">
                            <span class="price">￥{{item.price}}</span>
                            <img src="../../../static/images/tianjia_changgui.png">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 侧滑导航 -->
        <div class="offcanvas" v-show="show">
            <div class="search">
                <input type="text" placeholder="搜索">
            </div>
            <div class="offcanvas-content">
                <ul>
                    <li class="offcanvas-title">
                        品牌
                    </li>
                    <li>香奈儿</li>
                    <li>迪奥</li>
                    <li>汤姆福特</li>
                    <li>圣罗兰</li>
                    <li>纪梵希</li>
                    <li>魅可</li>
                </ul>
                <ul>
                    <li class="offcanvas-title">
                        服务和折扣
                    </li>
                    <li>包邮</li>
                    <li>速递</li>
                    <li>折扣</li>
                </ul>
                <ul>
                    <li class="offcanvas-title">
                        价格区间
                    </li>
                    <li>
                        <input type="text" placeholder="最低价">
                        <span></span>
                        <input type="text" placeholder="最高价">
                    </li>
                    <li>5-53 <br>25%的选择</li>
                    <li>53-160 <br>55%的选择</li>
                    <li>160-500 <br>20%的选择</li>
                </ul>
                <ul>
                    <li class="offcanvas-title">
                        适合对象
                    </li>
                    <li>爱人</li>
                    <li>朋友/同事</li>
                    <li>老师</li>
                    <li>领导/长辈</li>
                    <li>病人</li>
                    <li>客户</li>
                </ul>
                <ul>
                    <li class="offcanvas-title">
                        适合节日
                    </li>
                    <li>情人节</li>
                    <li>七夕</li>
                    <li>圣诞节</li>
                    <li>母亲节</li>
                    <li>教师节</li>
                    <li>感恩节</li>
                </ul>
                <div class="offcanvas-footer">
                    <span>重置</span>
                    <span>完成</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            change: true,
            openContent: false,
            changeIcon: false,
            show:false,
            goods: [
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '广州',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '上海',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '北京',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
                {
                    imgSrc: '../../../static/images/ca1.jpg',
                    sales: '62',
                    title: '只要有花可开，就不允许生命与黯淡为伴',
                    district: '深圳',
                    postStatus: '包邮',
                    price: '299.00',
                },
            ],
            rank: ['综合排序', '信用', '价格由高到低', '价格由低到高'],
            activeIndex: 0,
        }
    },
    methods: {
    },
}
</script>


<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    color: #333;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    .synthesize {
        width: 38.33%;
        text-align: center;
        color: #f66;
        i {
            font-size: 14px;
        }
    }
    .sales {
        width: 38%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        i {
            font-size: 17px;
        }
    }
    .filtrate {
        width: 22%;
        height: 100%;
        border-left: 1px solid #f0f0f0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        i {
            font-size: 14px;
        }
    }
    .accordion {
        min-width: 100%;
        height: 182px;
        background-color: #fff;
        position: absolute;
        top: 37px;
        z-index: 99;
        ul {
            width: 100%;
            height: 100%;
            li {
                width: 100%;
                height: 44px;
                border-top: 1px solid #f0f0f0;
                line-height: 44px;
                padding-left: 35px;
                padding-right: 10px;
                font-size: 13px;
                color: #333;
            }
            .active {
                color: #f66;
            }
            i {
                font-size: 18px;
                float: right;
                margin-right: 10px;
                line-height: 44px;
                color: #ff6666;
            }
        }
    }
}


.productShow {
    width: 100%;
    height: 952px;
    background-color: #fff;
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
                height: 250px;
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
                .title {
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
                .districtPost {
                    width: 154px;
                    height: 20px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    .postStatus {
                        width: 30px;
                        height: 16px;
                        background-color: #ffa800;
                        border-radius: 3px;
                        line-height: 16px;
                        color: #fff;
                    }
                    .district {
                        font-size: 12px;
                        color: #999
                    }
                }
                .item {
                    width: 154px;
                    height: 35px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    span {
                        font-size: 15px;
                        line-height: 30px;
                        color: #ff0000;
                    }
                    img {
                        width: 28px;
                        height: 29px;
                    }
                }
            }
            .more {
                width: 100%;
                height: 45px;
                background-color: #ffffff;
                text-align: center;
                margin-bottom: 10px;
                p {
                    line-height: 30px;
                    margin: 0px;
                    font-size: 14px;
                    color: #666666;
                }
                img {
                    width: 9px;
                    height: 8px;
                    vertical-align: top;
                }
            }
        }
    }
}

.shopContent {
    width: 100%;
    background-color: #fff;
    li {
        width: 100%;
        height: 115px;
        border-top: 1px solid #f0f0f0;
        display: flex;
        .imgInfo {
            width: 115px;
            height: 100%;
            position: relative;
            img {
                position: absolute;
                width: 90px;
                height: 90px;
                top: 50%;
                left: 50%;
                margin-left: -45px;
                margin-top: -45px;
            }
            .salesVolume {
                position: absolute;
                right: 13px;
                bottom: 13px;
                width: 45px;
                height: 18px;
                background-color: rgba(51, 51, 51, 0.5);
                color: #fff;
                text-align: center;
                line-height: 18px;
            }
        }
        .shopInfo {
            width: 65%;
            height: 100%;
            padding-top: 10px;
            .commodity {
                font-size: 15px;
                color: #333;
            }
            .district {
                font-size: 12px;
                color: #999;
                line-height: 24px;
            }
            .postStatus {
                font-size: 12px;
                width: 30px;
                height: 16px;
                line-height: 16px;
                border-radius: 3px;
                text-align: center;
                background-color: #ffa800;
                color: #fff;
            }
            .priceItem {
                width: 100%;
                height: 28px;
                line-height: 28px;
                display: flex;
                justify-content: space-between;
                .price {
                    color: #f00;
                    font-size: 15px;
                    font-weight: 600;
                }
                img {
                    width: 28px;
                    height: 28px;
                }
            }
        }
    }
}

.offcanvas {
    width: 280px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    right: 0px;
    top: 38px;
    z-index: 110;
    .search {
        width: 100%;
        height: 32px;

        input {
            width: 100%;
            height: 100%;
            background-color: #f5f5f5;
        }
    }
    .offcanvas-content {
        width: 100%;
        ul {
            width: 100%;
            height: 120px;
            border-bottom: 1px solid #f0f0f0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;
            font-size: 12px;
            .offcanvas-title {
                width: 100%;
                height: 32px;
                background-color: #fff;
                padding-left: 10px;
                line-height: 32px;
                text-align: left;
                color: #999;
            }
            li {
                width: 82px;
                height: 35px;
                background-color: #f5f5f5;
                line-height: 35px;
                color: #333;
                border-radius: 5px;
            }
            &:nth-child(2) {
                height: 76px;
            }
            &:nth-child(3) {
                li {
                    &:nth-child(2) {
                        width: 95%;
                        position: relative;
                        display: flex;
                        justify-content: space-around;
                        span{
                            position: absolute;
                            width: 25px;
                            height: 2px;
                            background-color: #c8c8c8;    
                            margin-top:15px;                       
                        }
                        input{
                            width: 95px;
                            height: 25px;
                            border-radius: 5px;
                            margin-top:5px;
                            text-align: center;
                        }
                    }
                    &:nth-child(3),
                    &:nth-child(4),
                    &:nth-child(5){
                        line-height: 17px;
                    }
                }
            }
        }
        .offcanvas-footer{
            width: 100%;
            height: 40px;
            display: flex;
            text-align: center;
            line-height: 40px;
            font-size: 15px;
            color:#fff;
            span{
                width: 50%;
                height: 100%;
                background-color:#fd9596 ;
                &:last-child{
                    background-color: #e94f4d;
                }
            }
        }
    }
}
</style>

