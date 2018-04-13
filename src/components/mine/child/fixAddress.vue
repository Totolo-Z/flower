<template>
    <div>
        <div class="fixHead">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            修改地址
        </div>
        <div class="userInfo">
            <ul>
                <li>
                    收件人: &nbsp;<input type="text" v-model="consignee">
                </li>
                <li>
                    联系电话: &nbsp;<input type="number" class="number" oninput="if(value.length>11)value=value.slice(0,11)" v-model="mobile">
                </li>
                <li>
                    省份:
                    <select @click="getCitySelect(1)" v-model="shengId.region_id">
                        <option :value="item.region_id" v-for="(item,index) in getProvince" :key="index">{{item.region_name}}</option>
                    </select>
                </li>
                <li>
                    城市:
                    <select @click="getCitySelect(2)" v-model="shiId.region_id">
                        <option :value="item.region_id" v-for="(item,index) in getCity" :key="index">{{item.region_name}}</option>
                    </select>
                </li>
                <li>
                    区县:
                    <select v-model="district.region_id">
                        <option :value="item.region_id" v-for="(item,index) in getCounty" :key="index">{{item.region_name}}</option>
                    </select>
                </li>
                <li>
                    街道:<input type="text" v-model="street">
                </li>
            </ul>
            <div class="switch">
                设为默认地址
                <mt-switch v-model="default_address"></mt-switch>
            </div>
            <button @click="commitAddress">提交</button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import common from '../../common/common.js';
export default {
    data() {
        return {
            consignee: '',
            mobile: '',
            street: '',
            shengId: {
                region_id: '',
                region_name: '',
            },
            shiId: {
                region_id: '',
                region_name: '',
            },
            district: {
                region_id: '',
                region_name: '',
            },
            default_address: false,
            getProvince: [],
            getCity: [],
            getCounty: [],
        }
    },
    mounted() {
        this.getProvinceSelect();
        this.addressShowData()
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
                myId = this.shengId.region_id;
                this.shiId = {
                    region_id: '',
                    region_name: '',
                };
                this.district = {
                    region_id: '',
                    region_name: '',
                };
            } else if (type === 2) {  // 获取区
                myId = this.shiId.region_id;
                this.district = {
                    region_id: '',
                    region_name: '',
                };
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
        addressShowData() {
            this.$http.get(`${common.apihost}api/home/address/findAddress`,
                {
                    headers: { 'XX-Token': this.$store.state.token },
                    params: {
                        address_id: this.$route.params.fixAddressId
                    }
                }
            ).then((res) => {
                if (res.data.code === 1) {
                    this.consignee = res.body.data.consignee,
                        this.mobile = res.body.data.mobile,
                        this.street = res.body.data.address,
                        this.getProvince[0] = {
                            region_id: res.body.data.province,
                            region_name: res.body.data.province_name,
                        };
                    this.getCity[0] = {
                        region_id: res.body.data.city,
                        region_name: res.body.data.city_name,
                    };
                    this.getCounty[0] = {
                        region_id: res.body.data.district,
                        region_name: res.body.data.district_name,
                    };
                    this.shengId.region_id = res.body.data.province,
                        this.shengId.region_name = res.body.data.province_name,
                        this.shiId.region_id = res.body.data.city,
                        this.shiId.region_name = res.body.data.city_name,
                        this.district.region_id = res.body.data.district,
                        this.district.region_name = res.body.data.district_name;
                }
            })
        },
        commitAddress() {
            this.$http.post(`${common.apihost}api/home/address/editAddress`,
                {},
                {
                    headers: { 'XX-Token': this.$store.state.token },
                    params: {
                        consignee: this.consignee,
                        mobile: this.mobile,
                        province: this.shengId.region_id,
                        city: this.shiId.region_id,
                        district: this.district.region_id,
                        address: this.street,
                        default_address: this.default_address ? 1 : 0,
                        address_id: this.$route.params.fixAddressId
                    }
                },
                { emulateJSON: true }).then((res) => {
                    if (res.data.code === 1) {
                        this.$router.push('/addressmanagement')
                    } else {
                        Toast(res.body.msg);
                }
            }).catch()
        }
    }
}
</script>


<style lang="less" scoped>
.fixHead {
    width: 100%;
    height: 38px;
    line-height: 38px;
    background-color: #f66;
    text-align: center;
    font-size: 15px;
    color: #fff;
    position: relative;
    i {
        position: absolute;
        left: 10px;
        font-size: 20px;
    }
}

.userInfo {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 44px;
            line-height: 44px;
            font-size: 13px;
            color: #333;
            background-color: #fff;
            padding-left: 10px;
            border-bottom: 1px solid #f0f0f0;
            input {
                width: 80%;
                position: absolute;
            }
            select {
                width: 75%;
                height: 30px;
                padding-left: .266667rem;
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
        display: block;
        margin: .8rem auto;
        width: 95%;
        height: 1.066667rem;
        background-color: #e94f4d;
        border-radius: .133333rem;
        font-size: .453333rem;
        color: #fff;
    }
}
</style>

