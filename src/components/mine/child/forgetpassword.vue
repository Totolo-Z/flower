<template>
  <div>
    <div class="head">
      <router-link to="/mine">
        <i class="iconfont">&#xe50d;</i>
      </router-link>
      重置密码
    </div>
    <div class="inputPhone">
      <input type="number" name="usrtel" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号" v-model="user.phone" @blur="checkphone">
      <i class="iconfont" @click="clearMsg('phone')">&#xe615;</i>
    </div>
    <div class="inputSecurityCode">
      <input type="number" name="quantity" oninput="if(value.length>6)value=value.slice(0,6)" placeholder="请输入验证码" v-model="user.yanzheng">
      <button class="securityCode" @click="sendSecurityCode" v-text="buttonMsg" :disabled='buttonDisabled'></button>
    </div>
    <div class="newPassword">
      <input type="password" placeholder="新密码 :" v-model="user.newPass">
      <i class="iconfont newpass" @click="clearMsg('newPass')">&#xe615;</i>
    </div>
    <div class="confirmPassword">
      <input type="password" placeholder="确认密码 :" v-model="user.confirm">
      <i class="iconfont confirm" @click="clearMsg('confirm')">&#xe615;</i>
    </div>
    <button class="commit" @click="submit">
      提交
    </button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      buttonMsg: '发送验证码',
      buttonDisabled: false,
      user: {
        phone: '',
        yanzheng: '',
        newPass: '',
        confirm: '',
      },
    }
  },
  methods: {
    clearMsg(str) {
      this.user[str] = '';
    },
    checkphone() {
      var reg = /^((13|14|15|17|18)[0-9]\d{8})$/;
      var phoneNum = this.user.phone;
      if (!phoneNum) {//未输入手机号
        Toast('请输入手机号');
        return;
      } else if (!reg.test(phoneNum)) {
        Toast('您输入的手机号不合法，请重新输入');
      }
    },
    sendSecurityCode() {
      var reg = /^((13|14|15|17|18)[0-9]\d{8})$/;
      var phoneNum = this.user.phone;
      const url = 'http://192.168.0.126/api/user/Verification_Code/send';
      this.$http.post(url, {
         username: this.user.phone,
      }, { emulateJSON: true }).then((res) => {
        console.log(res.data)
      }).catch()
      let time = 10;
      this.buttonDisabled = true;
      const timer = setInterval(() => {
        time -= 1;
        this.buttonMsg = time;
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        this.buttonMsg = '发送验证码';
        this.buttonDisabled = false;
      }, 10000);
    },
    submit() {
      const url = 'http://192.168.0.126/api/user/public/passwordReset';
      this.$http.post(url, {
        username: this.user.phone,
        verification_code: this.user.yanzheng,
        password: this.user.newPass,
        confirm_password: this.user.confirm
      }, { emulateJSON: true }).then((res) => {
        if(res.data.code===1){
            this.$router.push('/mine')
        }else{
            Toast(res.body.msg);
        }
      }).catch()
    }
  }
}
</script>


<style lang="less" scoped>
.head {
  width: 100%;
  height: 1.013333rem;
  background-color: #ff6666;
  line-height: 1.013333rem;
  text-align: center;
  color: #fff;
  font-size: .4rem;
  position: relative;
  a {
    color: #fff;
    i {
      position: absolute;
      left: .266667rem;
      font-size: .533333rem;
    }
  }
}

.inputPhone,
.inputSecurityCode,
.newPassword,
.confirmPassword {
  width: 100%;
  height: 1.173333rem;
  position: relative;
  background-color: #fff;
  margin-bottom: .266667rem;
  input {
    width: 90%;
    height: 100%;
    font-size: .32rem;
    margin-left: .266667rem;
  }
  i {
    position: absolute;
    font-size: .4rem;
    right: .266667rem;
    top: .32rem;
    color: #ccc;
  }
  .securityCode {
    width: 2.133333rem;
    height: 1.173333rem;
    background-color: #ff6666;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    line-height: 1.173333rem;
    text-align: center;
    font-size: .346667rem;
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

.commit {
  width: 90%;
  height: 1.066667rem;
  background-color: #e94f4d;
  margin: .8rem .453333rem 0 .453333rem;
  border-radius: .133333rem;
  font-size: .453333rem;
  line-height: 1.066667rem;
  text-align: center;
  color: #fff;
}
</style>
