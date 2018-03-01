<template>
    <div>
        <div class="head">
            <router-link to="/mine">
                <i class="iconfont">&#xe50d;</i>
            </router-link>
            用户注册
        </div>
        <div class="userRegister">
            <ul>
                <li>
                    <input type="number" placeholder="请输入手机号" v-model="user.phone" @blur="checkPhone">
                    <i class="iconfont" @click="clearMsg(user.phone)">&#xe615;</i>
                </li>
                <li>
                    <input type="number" placeholder="请输入验证码" v-model="user.yanzheng" :maxlength="6">
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
        </div>
        <div class="register">
            <input type="submit" value="注册" class="submit" @click="submit()">
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
    mounted() {
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
            const url = 'http://www.huahudie.cc/mobile/webapi/register/checkMobileExist';
            this.$http.post(url, { mobile_phone: phoneNum }, { emulateJSON: true })
                .then((res) => {
                    if ( res.body == true ){
                        Toast('手机号码已存在');
                    }else{
                        Toast('该手机号可以注册');
                    }
                }).catch()
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
            const url = 'http://www.huahudie.cc/mobile/webapi/sendSms/sendMobileCode';
            this.$http.post(url, { mobile_phone: this.user.phone }, { emulateJSON: true }).then((res) => {
            
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
            const url='http://www.huahudie.cc/mobile/webapi/register/actRegister';
            this.$http.post(url,{
                mobile_phone:this.user.phone,
                mobile_code:this.user.yanzheng,
                password:this.user.password
                },{emulateJSON:true}).then((res)=>{
                     Toast(res.body.content);
                     console.log(res)
            })
        }
    },
}
</script>

<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #ff6666;
    text-align: center;
    line-height: 38px;
    position: relative;
    color: #fff;
    font-size: 15px;
    a {
        color: #fff;
        i {
            position: absolute;
            left: 10px;
            font-size: 20px;
        }
    }
}

.userRegister {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 44px;
            line-height: 44px;
            background-color: #fff;
            margin-bottom: 10px;
            position: relative;
            input {
                width: 97%;
                height: 44px;
                line-height: 44px;
                margin-left: 10px;
            }
            i {
                position: absolute;
                font-size: 20px;
                color: #ccc;
                right: 10px;
                top: 0px;
            }
            &:nth-child(1)>i {
                font-size: 16px;
                font-weight: 600;
            }
            &:nth-child(2)>button {
                position: absolute;
                font-size: 12px;
                width: 90px;
                height: 44px;
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
    margin-top: 20px;
    width: 90%;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
    font-size: 17px;
    background-color: #e94f4d;
    margin-left: 18px;
    input{
        width: 100%;
        color: #fff;
    }
}

.tips {
    margin-top: 10px;
    padding-left: 18px;
    p {
        font-size: 12px;
        line-height: 15px;
        color: #ccc;
        span {
            color: #ff6666;
        }
    }
}
</style>
