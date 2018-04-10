<template>
    <div>
        <div class="head">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            收货地址管理
        </div>
        <div class="userAddress" v-for="(val,index) in addressList" :key="index">
              <img src="val.../../../../static/images/addicon.png">  
            <div class="userInfo">
                <span>{{val.consignee}}</span>
                <span>{{val.mobile}}</span>
                <router-link to="/fixAddress">
                    <i class="iconfont advince">&#xe60a;</i>
                </router-link>
                <p>{{val.province}}{{val.city}}{{val.district}}{{val.address}}</p>
            </div>
        </div>
        <router-link to="/thenewaddress">
            <button>+新建地址</button>
        </router-link>
    </div>
</template>

<script>
import common from '../../common/common.js';
export default {
    data() {
        return {
            addressList: [],
        }
    },
    mounted() {
        this.addressManage()
    },
    methods: {
        addressManage() {
            this.$http.get(`${common.apihost}api/home/address/index`,
                {
                    'headers': { 'XX-Token': this.$store.state.token }
                }).then((res) => {
                    this.addressList = res.body.data
                })
        }
    }
}
</script>

<style lang="less" scoped>
.head {
    width: 100%;
    height: 1.013333rem;
    background-color: #f66;
    text-align: center;
    line-height: 1.013333rem;
    font-size: .4rem;
    color: #fff;
    position: relative;
    i {
        font-size: .533333rem;
        position: absolute;
        left: .266667rem;
    }
}

.userAddress {
    width: 100%;
    height: 2.5rem;
    background-color: #fff;
    margin-bottom: .133333rem;

    img {
        width: 100%; 
        height: .106667rem;
        margin-top:0px;
    }
    .userInfo {
        width: 100%;
        color: #333;
        position: relative;
        span {
            font-size: .346667rem;
            line-height: .6rem;
            padding-left: .4rem;
        }
        .advince {
            position: absolute;
            right: .266667rem;
            top: .533333rem;
            font-size: .426667rem;
            color: #ccc;
        }
        p {
            font-size: .346667rem;
            padding: 0rem .3rem;
            line-height: .6rem;
            -webkit-line-clamp: 2;
            i {
                color: #e94f4d;
            }
        }
    }
}

button {
    width: 95%;
    height: 40px;
    background-color: #e94f4d;
    border-radius: 5px;
    color: #fff;
    line-height: 40px;
    font-size: 17px;
    text-align: center;
    margin-left: 9px;
    position: absolute;
    bottom: 80px;
}
</style>
