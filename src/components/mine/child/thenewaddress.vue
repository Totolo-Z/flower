<template>
    <div>
        <div class="head">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            添加新地址
        </div>
        <div class="editAddress">
            <ul>
                <li>
                    收货人: <input type="text" v-model="consignee" placeholder="请输入收货人姓名">
                </li>
                <li>
                    联系电话: <input type="number" class="number" oninput="if(value.length>11)value=value.slice(0,11)" v-model="mobile" placeholder="请输入手机号码">
                </li>
                <li>
                    省份:
                    <select @click="getCitySelect(1)" v-model="shengId">
                        <option :value="item.region_id" v-for="(item,index) in getProvince" :key="index">{{item.region_name}}</option>
                    </select>
                </li>
                <li>
                    城市:
                    <select @click="getCitySelect(2)" v-model="shiId">
                        <option :value="item.region_id" v-for="(item,index) in getCity" :key="index">{{item.region_name}}</option>
                    </select>
                </li>
                <li>
                    区县:
                    <select  v-model="district">
                        <option :value="item.region_id" v-for="(item,index) in getCounty" :key="index">{{item.region_name}}</option>
                    </select>
                </li>
                <li>
                    街道: <input type="text" v-model="street">
                </li>
            </ul>
            <div class="switch">
                设为默认地址
                <mt-switch v-model="default_address"></mt-switch>
            </div>
            <button @click="commit">提交</button>
        </div>
    </div>
</template>

<script>
import common from '../../common/common.js';
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            consignee: '',
            mobile: '',
            street: '',
            shengId: '',
            shiId: '',
            district: '',
            default_address: false,
            getProvince: [],
            getCity: [],
            getCounty: [],
        }
    },
    mounted() {
        this.getProvinceSelect();
    },
    methods: {
        getProvinceSelect() {
            this.$http.get(`${common.apihost}api/home/address/getRegion`,
                { 'headers': { 'XX-Token': this.$store.state.token } }
            ).then((res) => {
                if (res.data.code === 1) {
                    this.getProvince = res.body.data;
                } else {
                    Toast(res.data.msg);
                }
            })
        },
        getCitySelect(type) {
            var myId = '';
            if (type === 1) { // 获取市
                myId = this.shengId;
            } else if (type === 2) {  // 获取区
                myId = this.shiId;
            }
            this.$http.get(`${common.apihost}api/home/address/getSubRegion`,
                {
                    headers: { 'XX-Token': this.$store.state.token },
                    params: { id: myId }
                }).then((res) => {
                    if (res.data.code === 1) {
                        if (type === 1) {  // 市
                            this.getCity = res.body.data;
                        } else if (type === 2) {  // 区
                            this.getCounty = res.body.data;
                        }
                    }
                })
        },
        commit() {
            this.$http.post(`${common.apihost}api/home/address/addAddress`,
                {},
                {
                    headers: { 'XX-Token': this.$store.state.token },
                    params: {
                        consignee: this.consignee,
                        mobile: this.mobile,
                        province: this.shengId,
                        city: this.shiId,
                        district: this.district,
                        address: this.street,
                        default_address: this.default_address ? 1 : 0
                    }

                },{emulateJSON:true}).then((res) => {
                    if (res.data.code === 1) {
                        this.$router.push('/addressmanagement')
                    } else {
                        Toast(res.body.msg);
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
    line-height: 1.013333rem;
    text-align: center;
    font-size: .4rem;
    color: #fff;
    position: relative;
    i {
        position: absolute;
        left: .266667rem;
        font-size: .533333rem;
    }
}

.editAddress {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 1.173333rem;
            line-height: 1.173333rem;
            background-color: #fff;
            border-bottom: 1px solid #f0f0f0;
            padding-left: .266667rem;
            font-size: .346667rem;
            position: relative;
            select {
                width: 75%;
                height: 30px;
                padding-left: .266667rem;
            }
            i {
                position: absolute;
                right: .266667rem;
            }
            &:nth-child(7) {
                margin-top: .266667rem;
                padding-left: .266667rem;
            }
            input {
                width: 85%;
                height: 1.066667rem;
                border: none;
            }
            .number {
                width: 80%;
                height: 100%;
            }
        }
    }
    .switch {
        margin-top: .266667rem;
        width: 100%;
        height: 1.066667rem;
        line-height: 1.066667rem;
        background-color: #fff;
        padding-left: .266667rem;
        font-size: .4rem;
        display: flex;
        justify-content: space-between;
        .mint-switch {
            margin-right: .3rem;
        }
    }
    button {
        width: 95%;
        height: 1.066667rem;
        background-color: #e94f4d;
        border-radius: .133333rem;
        margin-left: .24rem;
        margin-top: 1.066667rem;
        font-size: .453333rem;
        color: #fff;
    }
}
</style>
