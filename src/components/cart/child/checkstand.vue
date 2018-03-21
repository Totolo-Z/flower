<template>
    <div>
        <div class="head">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            收银台
        </div>
        <div class="payment">
            <p class="paymentTitle">支付金额</p>
            <p class="paymentPrice">￥ 299.00</p>
            <p class="paymentItem">商品名称:全国同城送花红玫瑰花康乃馨向日葵教师节礼盒鲜花速递</p>
        </div>
        <div class="payway">
            <div class="paywayTitle">
                <i class="iconfont">&#xe691;</i>
                <span>支付方式</span>
            </div>
            <div class="payInfo">
                <div class="wechatPay">
                    <img src="../../../../static/images/weixin_weixuan.png" v-show="show">
                    <img src="../../../../static/images/weixin_xuanzhong.png" v-show="!show">
                    <van-radio name="1" v-model="radio" @click="clickIcon">微信支付</van-radio>
                </div>
            </div>
        </div>
        <button @click="pay()">支付</button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            show: true,  
            hide: true,
            radio: '0',
        }
    },
    methods: {
        pay() {
            Toast('支付成功');
        },
        clickIcon() {
            this.show = !this.show
        },
        clickPay() {
            this.hide = !this.hide
        }
    }
}
</script>


<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #f66;
    text-align: center;
    font-size: 15px;
    color: #fff;
    line-height: 38px;
    position: relative;
    i {
        position: absolute;
        left: 10px;
        font-size: 20px;
    }
}

.payment {
    width: 100%;
    height: 151px;
    background-color: #fff;
    text-align: center;
    padding-top: 20px;
    .paymentTitle {
        font-size: 15px;
        color: #333;
        line-height: 35px;
    }
    .paymentPrice {
        font-size: 19px;
        color: #f02;
        line-height: 40px;
    }
    .paymentItem {
        width: 50%;
        font-size: 13px;
        margin: 0 auto;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.payway {
    width: 100%;
    height: 145px;
    background-color: #fff;
    margin-top: 10px;
    .paywayTitle {
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #f0f0f0;
        line-height: 44px;
        padding-left: 10px;
        font-size: 14px;
        color: #333;
        i {
            font-size: 18px;
            color: #ea279e;
            margin-right: 5px;
        }
    }
    .payInfo {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        div {
            width: 50%;
            height: 60px;
            text-align: center;
            padding-top: 15px;
            img {
                width: 35px;
                height: 35px;
            }
            .van-radio{
                width: 100%;
            }
        }
    }
}

button {
    width: 90%;
    height: 40px;
    background-color: #e94f4d;
    color: #fff;
    line-height: 40px;
    border-radius: 8px;
    font-size: 17px;
    margin: 15px 17px;
}
</style>

