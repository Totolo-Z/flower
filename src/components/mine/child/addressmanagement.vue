<template>
    <div>
        <div class="head">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            收货地址管理
        </div>
        <div class="userAddress" v-for="(val,index) in addressList" :key="index">
            <div class="nameInfo">
                <span>{{val.consignee}}</span>
                <span>{{val.mobile}}</span>
            </div>
            <p>{{val.province}}{{val.city}}{{val.district}}{{val.address}}</p>
            <div class="edit">
                <span class="sign">{{val.default_address}}</span>
                <div class="iconSign">
                    <span @click="editAddress(val.address_id)">
                        <i class="iconfont  advince">&#xe61f;</i>编辑</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span @click="deleteAddress(val.address_id)">
                        <i class="iconfont delete">&#xe619;</i>删除</span>
                </div>
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
        editAddress(id) {
            this.$router.push({ path: `/fixAddress/${id}` })
        },
        addressManage() {
            this.$http.get(`${common.apihost}api/home/address/index`,
                {
                    headers: { 'XX-Token': this.$store.state.token },
                }).then((res) => {
                    if (res.data.code === 1) {
                        this.addressList = res.body.data
                }
            })     
        },
        deleteAddress(address_id){
            this.$http.get(`${common.apihost}api/home/address/deleteAddress`,
            {
                headers: { 'XX-Token': this.$store.state.token },
                params:{
                    aid:address_id
                }
                }
            ).then((res)=>{
                if(res.data.code===1){
                     this.addressManage()
                }
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
    height: 2.8rem;
    background-color: #fff;
    margin-top: .133333rem;
    color: #333;
    position: relative;
    .nameInfo {
        width: 100%;
        height: .75rem;
        line-height: .75rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .4rem;
        font-size: .346667rem;
    }

    .edit {
        width: 100%;
        height: .7rem;
        line-height: .7rem;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #f0f0f0;
        .sign {
            color: #e94f4d;
            font-size: .32rem;
            padding-left: .4rem
        }
        .iconSign {
            width: 3.4rem;
            font-size: .32rem;
            a {
                display: inline-block;
            }
            i {
                font-size: .45rem;
            }
        }
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

button {
    width: 95%;
    height: 1.066667rem;
    background-color: #e94f4d;
    border-radius: 5px;
    color: #fff;
    line-height: 1.066667rem;
    font-size: .453333rem;
    text-align: center;
    margin-left: .24rem;
    position: absolute;
    bottom: 2.133333rem;
}
</style>
