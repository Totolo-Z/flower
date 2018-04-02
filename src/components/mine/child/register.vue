<template>
    <div>
        <div class="head">
            <router-link to="/login">
                <i class="iconfont">&#xe50d;</i>
            </router-link>
            用户注册
        </div>
        <div class="userRegister">
            <form name="register" id="register">
            <ul>
                <li>
                    <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号" v-model="user.phone" @blur="checkPhone">
                    <i class="iconfont" @click="clearMsg(user.phone)">&#xe615;</i>
                </li>
                <li>
                    <input type="number" placeholder="请输入验证码" v-model="user.yanzheng" oninput="if(value.length>6)value=value.slice(0,6)">
                    <button @click="sendYanzheng" v-text="buttonMsg" :disabled="buttonDisabled"></button>
                </li>
                <li><input type="password" placeholder="请输入密码" v-model="user.password" maxlength="12">
                    <i class="iconfont">&#xe666;</i>
                </li>
                <li v-show="canSee">
                    <input type="text" placeholder="请再次确认密码" v-model="user.password2" @blur="yanzheng" maxlength="12">
                    <i class="iconfont" @click="canSee=true">&#xe6c7;</i>
                </li>
                <li v-show="!canSee">
                    <input type="password" placeholder="请再次确认密码" v-model="user.password2" maxlength="12">
                    <i class="iconfont" @click="canSee=false">&#xe666;</i>
                </li>             
            </ul>
            </form>
        </div>
        <div class="register">
            <input type="submit" value="注册" class="submit" @click="submit">
        </div>
        <div class="tips">
            <p>
                <!-- {{ gender | SexState}} -->
                <span>温馨提示：</span>根据相关法律规定，用户需绑定真实手机号进行实名认证，花蝴蝶将对用户隐私信息给予严格保密。</p>
        </div>
    </div>
</template>

<script>
import { numberLimit } from '@/utils/inputLimit';
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            canSee: false,
            buttonMsg: '发送验证码',
            buttonDisabled: false,
            user: {
                phone: '',
                yanzheng: '',
                password: '',
                password2: '',
            },
        };
    },
    methods: {
        clearMsg(phone) {
            this.user.phone = '';
        },
        yanzheng() {
            if (this.user.password !== this.user.password2) {
                alert('密码不一致');
            }
        },
        checkPhone() {
            var reg = /^((13|14|15|17|18)[0-9]\d{8})$/ //手机验证正则
            var phoneNum = this.user.phone;
            if (!phoneNum) { //未输入手机号
                Toast('请输入手机号');
                return;
            }else if (!reg.test(phoneNum)) {//手机号不合法
                Toast('您输入的手机号不合法，请重新输入');
                return;
            }
        },
        sendYanzheng() {  
            var reg = /^((13|14|15|17|18)[0-9]\d{8})$/ //手机验证正则
            var phoneNum = this.user.phone;
            if (!phoneNum) { //未输入手机号
                Toast('请输入手机号');
                return;
            }else if (!reg.test(phoneNum)) {//手机号不合法
                Toast('您输入的手机号不合法，请重新输入');
                return;
            }
            const url = 'http://192.168.0.126/api/user/Verification_Code/send';
            this.$http.post(url, {
                 username : this.user.phone ,
            }, { emulateJSON: true }).then((res) => {  
            }).catch();
            let time = 10;
            this.buttonDisabled = true;
            const timer = setInterval(() => {
                time -= 1;
                this.buttonMsg = time +'s后重新发送';
            }, 1000);
            setTimeout(() => {
                clearInterval(timer);
                this.buttonMsg = '发送验证码';
                this.buttonDisabled = false;
            }, 10000);
        },
        submit(){
            const url='http://192.168.0.126/api/user/public/register';
            this.$http.post(url,{
                username :this.user.phone,
                verification_code:this.user.yanzheng,
                password:this.user.password,
                confirm_password:this.user.password2,
                },{emulateJSON:true}).then((res)=>{
                     Toast(res.body.msg);
                    
            })
        }
    },
}
</script>

<style lang="less" scoped>
.head {
    width: 100%;
    height: 1.013333rem;
    background-color: #ff6666;
    text-align: center;
    line-height: 1.013333rem;
    position: relative;
    color: #fff;
    font-size: .4rem;
    a {
        color: #fff;
        i {
            position: absolute;
            left: .266667rem;
            font-size: .533333rem;
        }
    }
}

.userRegister {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 1.173333rem;
            line-height: 1.173333rem;
            background-color: #fff;
            margin-bottom:.266667rem;
            position: relative;
            input {
                width: 90%;
                height:.666667rem;
                line-height: .666667rem;
                margin-left:.266667rem;
                font-size: .32rem;
            }
            i {
                position: absolute;
                font-size: .533333rem;
                color: #ccc;
                right:.266667rem;
                top: 0px;
            }
            &:nth-child(1)>i {
                font-size: .426667rem;
                font-weight: 600;
            }
            &:nth-child(2)>button {
                position: absolute;
                font-size: .32rem;
                width: 2.4rem;
                height: 1.173333rem;
                background-color: #ff6666;
                color: #fff;
                right: 0px;
                top: 0px;
            }
        }
    }
}

::-webkit-input-placeholder {
    color: #ccc;
}

::-moz-placeholder {
    color: #ccc;
}

:-ms-input-placeholder {
    color: #ccc;
}

.register {
    margin-top: .533333rem;
    width: 90%;
    height: 1.066667rem;
    border-radius: 10px;
    text-align: center;
    line-height: 1.066667rem;
    font-size: .453333rem;
    background-color: #e94f4d;
    margin-left: .48rem;
    input{
        width: 100%;
        color: #fff;
    }
}

.tips {
    margin-top: .266667rem;
    padding-left: .48rem;
    p {
        font-size:.32rem;
        line-height: .4rem;
        color: #ccc;
        span {
            color: #ff6666;
        }
    }
}
</style>
