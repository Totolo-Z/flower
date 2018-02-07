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
                    <input type="text" placeholder="请输入手机号" v-model="user.phone" @keyup="numInput('phone')">
                    <i class="iconfont" @click="clearMsg(user.phone)">&#xe615;</i>
                </li>
                <li>
                    <input type="text" placeholder="请输入验证码" v-model="user.yanzheng" @keyup="numInput('yanzheng')" :maxlength="6">
                    <button @click="sendYanzheng" v-text="buttonMsg" :disabled="buttonDisabled"></button>
                </li>
                <li><input type="password" placeholder="请输入密码" v-model="user.password">
                    <i class="iconfont">&#xe6c7;</i>
                </li>
                <li v-show="canSee">
                    <input type="password" placeholder="请再次确认密码" v-model="user.password2">
                    <i class="iconfont" @click="canSee=false">&#xe666;</i>
                </li>
                <li v-show="!canSee">
                    <input type="text" placeholder="请再次确认密码" v-model="user.password2" @blur="yanzheng">
                    <i class="iconfont" @click="canSee=true">&#xe6c7;</i>
                </li>
            </ul>
        </div>
        <div class="register">
            注册
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
            // gender: 1,
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
        numInput(str) { // 整数限制
            this.user[str] = numberLimit(this.user[str]);
        },
        sendYanzheng() {
            let time = 60;
            this.buttonDisabled = true;
            const timer = setInterval(() => {
                time -= 1;
                this.buttonMsg = time;
            }, 1000);
            setTimeout(() => {
                clearInterval(timer);
                this.buttonMsg = '发送验证码';
                this.buttonDisabled = false;
            }, 60000);
        },
    },
    filters: {
        SexState(id) {
            if (id === 0) {
                return '男';
            } else if (id === 1) {
                return '女';
            }
        },
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
                width: 100%;
                height: 44px;
                line-height: 44px;
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
            &:nth-child(3)>i {
                color: #ff6666;
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
    padding-left: 15px;
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
    color: #fff;
    font-size: 17px;
    background-color: #e94f4d;
    margin-left: 18px;
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
