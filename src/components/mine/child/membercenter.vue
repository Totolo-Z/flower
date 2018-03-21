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
            <div class="allOrders">
                <span class="myorder">
                    <router-link to="/myorder">
                        我的订单
                    </router-link>
                </span>
                <span class="allOrder">
                    <router-link to="/allorder">全部订单
                        <i class="iconfont">&#xe60a;</i>
                    </router-link>
                </span>
            </div>
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
                    <i class="iconfont myListLeft">&#xe68b;</i>
                    <span class="myListName">收货地址管理</span>
                    <i class="iconfont myListRight">&#xe60a;</i>
                    </router-link>
                </li>
                <li>
                    <i class="iconfont myListLeft">&#xe6b2;</i>
                    <span class="myListName" @click="exit">退出登录</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memberIcon: {
                imgSrc: '../../../../static/images/qx.jpg',
                memberName: 'Jackson',
            }
        }
    },
    methods:{
        exit(){
            const url='http://192.168.0.126/api/user/public/logout';
            this.$http.get(url,{
                
            }).then((res)=>{
                if(res.data.code===1){
                     this.$store.commit('change_token',)
                }
                console.log(res.data)
               
                // this.$router.push('/mine')
            })
        }
    }
}
</script>

<style lang="less" scoped>
.memberCenterIcon {
    width: 100%;
    height: 160px;
    position: relative;
    background-color: #fffacd;
    border-bottom: 1px solid #f0f0f0;
    .memberIconInfo {
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: 11px;
        img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
        }
        .memberName {
            font-size: 16px;
            line-height: 26px;
            color: #333;
        }
        .level {
            font-size: 12px;
            color: #999;
        }
    }
}

.myOrderGoods {
    margin-top: 10px;
    width: 100%;
    height: 110px;
    background-color: #fff;
    .allOrders {
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #f0f0f0;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        a {
            color: #333;
        }
        .myOrder {
            font-size: 13px;
            color: #333;
        }
        .allOrder {
            font-size: 12px;
            a {
                color: #999;
                i {
                    font-size: 14px;
                    line-height: 20px;
                }
            }
        }
    }
    .goodsState {
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: space-around;
        .goodsStateinfo {
            height: 100%;
            text-align: center;
            padding-top: 15px;
            line-height: 18px;
            img {
                width: 21px;
                height: 17px;
            }
        }
    }
}

.myList {
    margin-top: 10px;
    width: 100%;
    height: 307px;
    background-color: #fff;
    ul {
        width: 100%;
        height: 100%;
        li {
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #f0f0f0;
            line-height: 40px;
            font-size: 13px;
            padding-left: 10px;
            position: relative;
             color: #333;
            a{
                color: #333;
            }
            &:last-child {
                border: none;
            }
            .myListLeft {
                font-size: 20px;
            }
            .myListRight {
                position: absolute;
                font-size: 15px;
                color: #999;
                right: 10px;
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
            &:nth-child(4)>.myListLeft {
                color: #ff6991;
                font-size: 18px;
                font-weight: 500;
            }
        }
    }
}
</style>


