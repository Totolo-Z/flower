<template>
    <div>
        <div class="head">
            <router-link to="/membercenter">
                <i class="iconfont">&#xe50d;</i>
            </router-link>
            我的优惠券
        </div>
        <div class="couponNumber">
            <ul>
                <li v-for="(val,index) in couponList" :key="index">
                    <div class="couponLeft">
                        <p class="couponNum">￥
                            <i>{{val.couponNum}}</i>
                        </p>
                        <p>满{{val.quota}}元可使用</p>
                    </div>
                    <div class="couponRight">
                        <h4>{{val.cash}}元现金券</h4>
                        <p>消费满{{val.expense}}元立减{{val.decrease}}元</p>
                        <p>剩余{{val.surplus}}张</p>
                        <p>{{val.date}}</p>
                        <p class="use">使用</p>
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
            couponList: [
                {
                    couponNum: '10',
                    quota: '150',
                    cash: '10',
                    expense: '150',
                    decrease: '10',
                    surplus: '2',
                    date: '2018.01.15-2018.03.20',
                },
                {
                    couponNum: '20',
                    quota: '200',
                    cash: '20',
                    expense: '200',
                    decrease: '20',
                    surplus: '2',
                    date: '2018.01.15-2018.03.20',
                },
                {
                    couponNum: '25',
                    quota: '200',
                    cash: '25',
                    expense: '200',
                    decrease: '25',
                    surplus: '1',
                    date: '2018.01.15-2018.03.20',
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
    color: #fff;
    font-size: 15px;
    position: relative;
    a {
        color: #fff;
        i {
            position: absolute;
            left: 10px;
            font-size: 20px;
        }
    }
}

.couponNumber {
    width: 100%;
    height: 1000px;
    background-color: #fff;
    ul {
        width: 100%;
        height: 35%;
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li {
            width: 284px;
            height: 101px;
            text-align: center;
            margin-bottom: 10px;
            background-size: cover;
            margin: 0 auto;
            &:nth-child(1) {
               background-image: url(../../../../static/images/coupon-1.png);
            }
            &:nth-child(2) {
               background-image: url(../../../../static/images/coupon-2.png);
            }
            &:nth-child(3) {
                background-image: url(../../../../static/images/coupon-3.png);
            }
            display: flex;
            .couponLeft {
                width: 110px;
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
                .couponNum {
                    font-size: 23px;
                    font-weight: 600;
                    color: #fff;
                    i {
                        font-size: 30px;
                    }
                }
                p {
                    color: #fff;
                    font-size: 12px;
                }
            }
            .couponRight {
                width: 160px;
                padding-top: 10px;
                padding-bottom: 10px;
                color: #fff;
                text-align: left;
                padding-left: 10px;
                position: relative;
                h4 {
                    font-size: 15px;
                }
                p {
                    font-size: 12px;
                    color: #fff;
                    line-height: 25px;
                }
                .use {
                    width: 45px;
                    height: 16px;
                    border-radius: 16px;
                    border: 1px solid #fff;
                    position: absolute;
                    top: 53px;
                    right: 0px;
                    text-align: center;
                    line-height: 15px;
                }
            }
        }
    }
}
</style>
