<template>
    <div>
        <div class="fixHead">
            <i class="iconfont" @click="$router.back()">&#xe50d;</i>
            修改地址
        </div>
        <div class="userInfo">
            <ul>
                <li>收&nbsp; 货 &nbsp;人&nbsp; {{userInfo.name}}</li>
                <li>联系号码&nbsp; {{userInfo.phone}}</li>
                <li>所在地区&nbsp; {{userInfo.area}}</li>
                <li>街&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;道&nbsp; {{userInfo.street}}</li>
            </ul>
            <button @click="commit()">提交</button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            userInfo: {
                name: 'jackson',
                phone: '13548556626',
                area: '广东省 深圳市',
                street: '西乡共和工业路',
            }
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
                width: 90%;
                position: absolute;
            }
        }
    }
    button {
        display: block;
        margin: 30px auto;
        width: 95%;
        height: 40px;
        background-color: #e94f4d;
        border-radius: 5px;
        font-size: 17px;
        color: #fff;
    }
}
</style>

