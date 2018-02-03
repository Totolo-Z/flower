<template>
    <div>
        <div class="head">
            <router-link to="/membercenter">
                <i class="iconfont">&#xe50d;</i>
            </router-link>
            我的足迹
        </div>
        <div class="myFootprintContent">
            <div class="myFootprintDate">
                最近一个月浏览过的商品
            </div>
            <ul class="myFootprintList">
                <li v-for="(val,index) in footprintData" :key="index">
                    <img :src="val.imgSrc">
                    <div class="myFootprintItem">
                        <p class="goodsName">{{val.goodsName}}</p>
                        <p class="goodsPrice">{{val.goodsPrice}}</p>
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
            footprintData: [
                {
                    imgSrc: '../../../../static/images/p2.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/n1.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m1.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m2.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m3.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m4.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m5.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/m6.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
                {
                    imgSrc: '../../../../static/images/p2.jpg',
                    goodsName: '寒冬里的一抹艳阳,灿烂花束',
                    goodsPrice: '299.00',
                },
            ]
        }
    }
}
</script>


<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #ff6666;
    text-align: center;
    line-height: 38px;
    position: relative;
    font-size: 15px;
    color: #fff;
    a {
        color:#fff;
        i {
            position: absolute;
            left: 10px;
            font-size: 20px;
        }
    }
}

.myFootprintContent {
    width: 100%;
    .myFootprintDate {
        width: 100%;
        height: 34px;
        line-height: 34px;
        font-size: 12px;
        color: #ccc;
        padding-left: 10px;
    }
    .myFootprintList {
        width: 100%;
        li {
            float: left;
            width: 125px;
            height: 145px;
            border-bottom: 1px solid #f0f0f0;
            border-right: 1px solid #f0f0f0;
            text-align: center;
            padding-top: 5px;
            img {
                width: 105px;
                height: 100px;
            }
            .myFootprintItem {
                width: 105px;
                margin: 0 auto;
                p {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 12px;
                    line-height: 15px;
                    color: #333;
                    &:last-child {
                        font-size: 14px;
                        color: #ff0000;
                    }
                }
            }
        }
    }
}
</style>



