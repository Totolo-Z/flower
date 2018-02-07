<template>
  <div>
    <div class="head">
      <router-link to="/mine">
        <i class="iconfont">&#xe50d;</i>
      </router-link>
      找回密码
    </div>
    <div class="inputPhone">
      <input type="tel" name="usrtel" placeholder="请输入手机号" v-model="user.phone">
      <i class="iconfont" @click="clickMsg(user.phone)">&#xe615;</i>
    </div>
    <div class="inputSecurityCode">
      <input type="number" name="quantity" max="6" placeholder="请输入验证码" v-model="user.yanzheng">
      <button class="securityCode" @click="sendSecurityCode" v-text="buttonMsg" :disabled='buttonDisabled'></button>
    </div>
    <button class="nextStep">
      <router-link to="/findpassword">
        下一步
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonMsg:'发送验证码',
      buttonDisabled:false,
      user: {
        phone: '',
      },
    }
  },
 methods:{
   clickMsg(phone){
    this.user.phone='';
   },
   sendSecurityCode(){
     let time=60;
     this.buttonDisabled=true;
     const timer=setInterval(()=>{
       time -=1;
      this.buttonMsg=time;
     },1000);
     setTimeout(()=>{
       clearInterval(timer);
        this.buttonMsg='发送验证码';
        this.buttonDisabled=false;
     },60000);
   }
 }
}
</script>


<style lang="less" scoped>
.head {
  width: 100%;
  height: 38px;
  background-color: #ff6666;
  line-height: 38px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  position: relative;
  a {
    color: #fff;
    i {
      position: absolute;
      left: 10px;
      font-size: 20px;
    }
  }
}

.inputPhone {
  width: 100%;
  height: 44px;
  position: relative;
  background-color: #fff;
  input {
    width: 100%;
    height: 100%;
  }
  i {
    position: absolute;
    font-size: 15px;
    right: 10px;
    top: 12px;
    color: #ccc;
  }
}

.inputSecurityCode {
  width: 100%;
  height: 44px;
  margin-top: 10px;
  background-color: #fff;
  position: relative;
  input {
    width: 100%;
    height: 44px;
  }
  .securityCode {
    width: 80px;
    height: 44px;
    background-color: #ff6666;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    line-height: 44px;
    text-align: center;
    font-size: 13px;
  }
}

::-webkit-input-placeholder {
  color: #ccc;
  padding-left:15px;
}

::-moz-placeholder {
  color: #ccc;
}

:-ms-input-placeholder {
  color: #ccc;
}

.nextStep {
  width: 90%;
  height: 40px;
  background-color: #e94f4d;
  margin: 30px 17px 0 17px;
  border-radius: 5px;
  font-size: 17px;
  line-height: 40px;
  text-align: center;
  a {
    color: #fff;
  }
}
</style>
