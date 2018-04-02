<template>
  <div>
    <div class="head">
      <router-link to="/home">
        <i class="iconfont">&#xe50d;</i>
      </router-link>
      <div class="title">会员登录</div>
    </div>

    <div class="loginBox">
      <form name="login" id="login">
        <div class="userName">
          <input type="text" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入用户名/手机号" v-model="user.username">
          <i class="iconfont" @click="clearMsg('username')">&#xe615;</i>
        </div>
        <div class="password">
          <input type="password" placeholder="请输入密码" v-model="user.password" oninput="if(value.length>12)value=value.slice(0,11)" >
          <i class="iconfont" @click="clearMsg('password')">&#xe615;</i>
        </div>
        <input type="button" value="登录" class="login" @click="login()">
      </form>
    </div>

    <div class="loginRegister">
      <div class="autoLogin">
        <input type="checkbox">自动登录
      </div>
      <div class="freeRegister">
        <router-link to="/register">
          <span>免费注册</span>
        </router-link>
        <span>|</span>
        <router-link to="/forgetpassword">
          <span>忘记密码</span>
        </router-link>
      </div>
    </div>
    <div class="otherLogin">
      <p>第三方登录</p>
      <div class="otherLoginIcon">
        <router-link to="/">
          <img src="../../../../static/images/denglu_weixin.png">
        </router-link>
        <router-link to="">
          <img src="../../../../static/images/denglu_qq.png">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import common from '../../common/common.js';
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  
  methods: {
    clearMsg(str) {
      this.user[str] = '';
    },
    login() {
      var reg = /^((13|14|15|17|18)[0-9]\d{8})$/ //手机验证正则
      var phoneNum = this.user.username;
      if (!phoneNum) { //未输入手机号
        Toast('请输入手机号');
        return;
      } else if (!reg.test(phoneNum)) {//手机号不合法
        Toast('您输入的手机号不合法，请重新输入');
        return;
      }
      this.$http.post(`${common.apihost}api/user/public/login`, {
        username: this.user.username,
        password: this.user.password,
      }, { emulateJSON: true }).then((res) => {
        if (res.data.code === 1) {
          this.$store.commit('change_token',res.data.data.token)
          // console.log(res)
          this.$router.push('/membercenter')
        } else {
          Toast(res.body.msg)
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
  background-color: #ff6666;
  color: #fff;
  position: relative;
  line-height: 1.013333rem;
  margin-bottom: .266667rem;
  a {
    color: #fff;
    i {
      width: .533333rem;
      height: 100%;
      left: .266667rem;
      font-size: .533333rem;
      position: absolute;
    }
  }
  .title {
    width: 1.6rem;
    height: 100%;
    font-size: .4rem;
    margin: 0 auto;
  }
}

.userName,
.password {
  width: 100%;
  height: 1.173333rem;
  margin-bottom: .266667rem;
  position: relative;
  border: none;
  background-color: #fff;
  input {
    width: 90%;
    height: 85%;
    margin: 0 auto;
    margin-left: .133333rem;
    font-size: .32rem;
  }
  i {
    background-color: #fff;
    width: .4rem;
    height: .4rem;
    font-size: .4rem;
    line-height: .453333rem;
    right: .266667rem;
    top: .4rem;
    position: absolute;
    color: #ccc;
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

.password {
  margin-bottom: .8rem;
}

.login {
  width: 90%;
  height: 1.066667rem;
  border-radius: .266667rem;
  text-align: center;
  line-height: 1.066667rem;
  font-size: .453333rem;
  background-color: #e94f4d;
  margin-left: .48rem;
  color: #fff;
}


.loginRegister {
  width: 100%;
  height: .853333rem;
  line-height: .853333rem;
  display: flex;
  justify-content: space-between;
  padding: 0 .533333rem;
  color: #666;
  font-size: .32rem;
  .autoLogin {
    input {
      width: .266667rem;
      height: .266667rem;
      border: 1px solid #666;
    }
  }
  .freeRegister {
    a {
      display: inline-block;
      color: #ff6666;
    }
  }
}

.otherLogin {
  width: 100%;
  height: 5.333333rem;
  padding-top: .4rem;
  p {
    width: 100%;
    font-size: .32rem;
    height: .666667rem;
    line-height: .666667rem;
    text-align: center;
    color: #999;
  }
  .otherLoginIcon {
    width: 70%;
    margin: 0 auto;
    margin-top: .8rem;
    display: flex;
    justify-content: space-around;
    a {
      display: block;
      width: 1.173333rem;
      height: 1.173333rem;

      img {
        width: 1.173333rem;
        height: 1.173333rem;
      }
    }
  }
}
</style>

