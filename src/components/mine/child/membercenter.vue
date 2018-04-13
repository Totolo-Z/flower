<template>
    <div>
        <!-- 会员头像 -->
        <div class="memberCenterIcon">
            <div class="memberIconInfo">
                <img :src="memberIcon.imgSrc">
                <p class="memberName">{{memberIcon.memberName}}</p>
                <p class="level">[普通会员]</p>
            </div>
        </div>
        <!-- 我的订单  -->
        <div class="myOrderGoods">
            <router-link to="/myorder">
                <div class="allOrders">
                    <span class="myorder">
                        我的订单
                    </span>
                    <span class="allOrder">
                        全部订单
                        <i class="iconfont">&#xe60a;</i>
                    </span>
                </div>
            </router-link>
            <div class="goodsState">
                <div class="goodsStateinfo">
                    <router-link to="/obligation">
                        <img src="../../../../static/images/daifukuan.png">
                    </router-link>
                    <p>待付款</p>
                </div>
                <div class="goodsStateinfo">
                    <router-link to="/notyetshipped">
                        <img src="../../../../static/images/daifahuo.png">
                    </router-link>
                    <p>待发货</p>
                </div>
                <div class="goodsStateinfo">
                    <router-link to="/waitforreceiving">
                        <img src="../../../../static/images/daishouhuo.png">
                    </router-link>
                    <p>待收货</p>
                </div>
                <div class="goodsStateinfo">
                    <router-link to="/evaluation">
                        <img src="../../../../static/images/daipinjia.png">
                    </router-link>
                    <p>待评价</p>
                </div>
            </div>
        </div>
        <!-- 我的列表 -->
        <div class="myList">
            <ul>
                <li>
                    <router-link to="/mycoupon">
                        <i class="iconfont myListLeft">&#xe63c;</i>
                        <span class="myListName">我的优惠券</span>
                        <i class="iconfont myListRight">&#xe60a;</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/service">
                        <i class="iconfont myListLeft">&#xe720;</i>
                        <span class="myListName">客服与帮助</span>
                        <i class="iconfont myListRight">&#xe60a;</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/addressmanagement">
                        <i class="iconfont myListLeft">&#xe61f;</i>
                        <span class="myListName">收货地址管理</span>
                        <i class="iconfont myListRight">&#xe60a;</i>
                    </router-link>
                </li>
                <li>服务时间 ：周一至周六 &nbsp;09:00-18:30</li>
                <li>平台客户服务热线 : 400-1166-081</li>
                <div class="loginout">
                    <button  @click.stop="loginout" :disabled="btnDisabled">
                        退出登录
                    </button>
                </div>
            </ul>
        </div>
        <navcomponent></navcomponent>
    </div>
</template>

<script>
import common from '../../common/common.js';
import navcomponent from '../../subcomponents/navcomponent.vue';
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            memberIcon: {
                imgSrc: '../../../../static/images/qx.jpg',
                memberName: 'Jackson',
            },
            btnDisabled: false,
        };
    },
    methods: {
        loginout() {
            this.btnDisabled = true;
            setTimeout(() => {
                this.btnDisabled = false;
            }, 3000);
            this.$http.post(`${common.apihost}api/user/public/logout`,
                {},
                { 'headers': { 'XX-Token': this.$store.state.token } },
                {emulateJSON:true}).then((res) => {
                this.btnDisabled = false;
                if (res.data.code === 1) {
                    this.$router.push('/login');
                } else {
                    Toast(res.body.msg);
                }
            }).catch()
        }
    },
    components:{
        navcomponent
    }
}
</script>

<style lang="less" scoped>
.memberCenterIcon {
    width: 100%;
    height: 4.266667rem;
    position: relative;
    background-color: #fffacd;
    border-bottom: 1px solid #f0f0f0;
    .memberIconInfo {
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: .293333rem;
        img {
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 50%;
        }
        .memberName {
            font-size: .426667rem;
            line-height: .693333rem;
            color: #333;
        }
        .level {
            font-size: .32rem;
            color: #999;
        }
    }
}

.myOrderGoods {
    margin-top: .266667rem;
    width: 100%;
    height: 2.933333rem;
    background-color: #fff;
    .allOrders {
        width: 100%;
        height: 1.173333rem;
        border-bottom: 1px solid #f0f0f0;
        line-height: 1.173333rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .266667rem;
        .myOrder {
            font-size: .346667rem;
            color: #333;
        }
        .allOrder {
            font-size: .32rem;
            a {
                color: #999;
                i {
                    font-size: .373333rem;
                    line-height: .533333rem;
                }
            }
        }
    }
    .goodsState {
        width: 100%;
        height: 1.76rem;
        display: flex;
        justify-content: space-around;
        .goodsStateinfo {
            height: 100%;
            text-align: center;
            padding-top: .4rem;
            line-height: .48rem;
            font-size: .32rem;
            img {
                width: .56rem;
                height: .453333rem;
            }
        }
    }
}

.myList {
    margin-top: .266667rem;
    width: 100%;
    height: 8.7rem;
    background-color: #fff;
    ul {
        width: 100%;
        height: 100%;
        li {
            width: 100%;
            height: 1.066667rem;
            border-bottom: 1px solid #f0f0f0;
            line-height: 1.066667rem;
            font-size: .346667rem;
            padding-left: .266667rem;
            position: relative;
            color: #333;
            a {
                color: #333;
            }
            .myListLeft {
                font-size: .533333rem;
            }
            .myListRight {
                position: absolute;
                font-size: .4rem;
                color: #999;
                right: .266667rem;
            }
            &:nth-child(1)>a>.myListLeft {
                color: #ff6666;
            }
            &:nth-child(2)>a>.myListLeft {
                color: #00d1a4;
            }
            &:nth-child(3)>a>.myListLeft {
                color: #ff6991;
            }
        }
    }
    .loginout {
        margin: 1.066667rem auto;
        background-color: #f66;
        height: .933333rem;
        border-radius: 10px;
        width: 90%;
        font-size: .42rem;
        font-weight: 500;
        text-align: center;
        line-height: .933333rem;
       button{
           color:#fff;
       }
    }
}
</style>


