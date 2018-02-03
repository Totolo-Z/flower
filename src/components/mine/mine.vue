<template>
  <div>
    <div class="head">
      <router-link to="/home">
        <i class="iconfont">&#xe50d;</i>
      </router-link>
      <div class="title">会员登录</div>
    </div>
    <!-- 头像 -->
    <div class="icon">
      <img src="../../../static/images/qx.jpg">
    </div>
    <div class="userName">
      <input type="text" placeholder="请输入用户名/手机号" v-model="user.name">
      <i class="iconfont" @click="clearMsg('name')">&#xe615;</i>
    </div>
    <div class="password">
      <input type="password" placeholder="请输入密码" v-model="user.password">
      <i class="iconfont" @click="clearMsg('password')">&#xe615;</i>
    </div>
    <!-- 登录 -->
    <button class="login">
      <router-link to="/membercenter">
        登录
      </router-link>
    </button>
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
        <router-link to="">
          <img src="../../../static/images/denglu_weixin.png">
        </router-link>
        <router-link to="">
          <img src="../../../static/images/denglu_qq.png">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
    };
  },
  methods: {
    clearMsg(str) {
      this.user[str] = '';
    },
  }
}
</script>


<style lang="less" scoped>
.head {
  width: 100%;
  height: 38px;
  background-color: #ff6666;
  color: #fff;
  position: relative;
  line-height: 38px;
  a {
    color: #fff;
    i {
      width: 20px;
      height: 100%;
      left: 10px;
      font-size: 20px;
      position: absolute;
    }
  }
  .title {
    width: 60px;
    height: 100%;
    font-size: 15px;
    margin: 0 auto;
  }
}

.icon {
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
}

.userName,
.password {
  width: 100%;
  height: 44px;
  margin-bottom: 10px;
  position: relative;
  border:none;
  background-color: #fff;
  input {
    width: 98%;
    height: 100%;
    background-color: #fff;
    margin: 0 auto;
    margin-left: 5px;
  }
  i {
    width: 15px;
    height: 15px;
    font-size: 15px;
    line-height: 17px;
    right: 5px;
    top: 15px;
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
  margin-bottom: 30px;
}

.login {
  width: 90%;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  font-size: 17px;
  background-color: #e94f4d;
  margin-left: 18px;
  a {
    color: #fff;
  }
}

.loginRegister {
  width: 100%;
  height: 32px;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: #666;
  .autoLogin {
    input {
      width: 10px;
      height: 10px;
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
  height: 200px;
  padding-top: 15px;
  p {
    width: 100%;
    font-size: 12px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #999;
  }
  .otherLoginIcon {
    width: 70%;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    a {
      display: block;
      width: 44px;
      height: 44px;

      img {
        width: 44px;
        height: 44px;
      }
    }
  }
}
</style>

