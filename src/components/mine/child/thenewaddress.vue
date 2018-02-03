<template>
    <div>
        <div class="head">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            添加新地址
        </div>
        <div class="editAddress">
            <ul>
                <li>
                    收货人 <input type="text">
                </li>
                <li>
                    联系电话<input type="tel" name="user_mobile">
                </li>
                <li>
                    所在地区<input type="text">
                </li>
                <li>
                    街道<input type="text">
                </li>
            </ul>
            <div class="mui-input-row mui-radio">
                <label>设为默认地址</label>
                <input name="radio1" type="radio">
            </div>
            <button @click="commit()">提交</button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {

        }
    },
    methods: {
        commit() {
            Toast({
                message: '提交成功',
                position: 'middle',
                duration: 5000
            });
        }
    }
}
</script>


<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #f66;
    line-height: 38px;
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

.editAddress {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 44px;
            line-height: 44px;
            background-color: #fff;
            border-bottom: 1px solid #f0f0f0;
            padding-left: 10px;
            font-size: 13px;
            &:nth-child(5) {
                margin-top: 10px;
            }
            input {
                width: 85%;
                height: 40px;
                border: none;
            }
        }
    }
    .mui-input-row {
        margin-top: 10px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    button {
        width: 95%;
        height: 40px;
        background-color: #e94f4d;
        border-radius: 5px;
        margin-left: 9px;
        margin-top: 40px;
        font-size: 17px;
        color: #fff;
    }
}
</style>
