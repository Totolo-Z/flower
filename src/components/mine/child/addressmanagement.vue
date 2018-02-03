<template>
    <div>
        <div class="head">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            收货地址管理
        </div>
        <div class="userAddress">
            <div class="imgStyle">
                <img :src="addressList.src">
            </div>
            <div class="userInfo">
                <span>{{addressList.name}}</span>
                <span>{{addressList.phone}}</span>
                <router-link to="/fixAddress">
                    <i class="iconfont advince">&#xe60a;</i>
                </router-link>
                <p>
                    <i>【默认】</i>{{addressList.address}}</p>
            </div>
        </div>
        <router-link to="/thenewaddress">
            <button>+新建地址</button>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addressList: {
                src: '../../../../static/images/addicon.png',
                name: 'jackson',
                phone: '13565256626',
                address: '广东省深圳市宝安区西乡共和工业路',
            }
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
    line-height: 38px;
    font-size: 15px;
    color: #fff;
    position: relative;
    i {
        font-size: 20px;
        position: absolute;
        left: 10px;
    }
}

.userAddress {
    width: 100%;
    height: 75px;
    background-color: #fff;
    .imgStyle {
        width: 100%;
        height: 15px;
        img {
            width: 100%;
            height: 4px;
        }
    }
    .userInfo {
        width: 100%;
        color: #333;
        position: relative;
        span {
            font-size: 13px;
            line-height: 30px;
            padding-left: 15px;
        }
        .advince {
            position: absolute;
            right: 10px;
            top: 20px;
            font-size: 16px;
            color: #ccc;
        }
        p {
            font-size: 13px;
            padding-left: 8px;
            line-height: 25px;
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
