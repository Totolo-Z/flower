<template>
    <div>
        <div class="head">
            <router-link to="/forgetpassword">
                <i class="iconfont">&#xe50d;</i>
            </router-link>
            找回密码
        </div>
        <div class="newPassword">
            <input type="password" placeholder="新密码 :" v-model="user.newPass">
            <i class="iconfont newpass" @click="clearMsg('newPass')">&#xe615;</i>
        </div>
        <div class="confirmPassword">
            <input type="password" placeholder="确认密码 :" v-model="user.confirm">
            <i class="iconfont confirm" @click="clearMsg('confirm')">&#xe615;</i>
        </div>
        <button class="commit">
            提交
        </button>
    </div>
</template>

<script>
export default {
  data(){
      return{
          user:{
              newPass:'',
              confirm:'',
          }
      }
  },
  methods:{
    clearMsg(str){
        this.user[str]='';
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
    font-size: 15px;
    color: #fff;
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

.newPassword,
.confirmPassword {
    width: 100%;
    position: relative;
    input {
        width: 100%;
        height: 44px;
    }
    i {
        position: absolute;
        right: 10px;
        font-size: 13px;
        color: #ccc;
    }
    .newpass,
    .confirm {
        top: 13px;
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

.commit {
    width: 90%;
    height: 40px;
    background-color: #e94f4d;
    margin: 30px 17px 0 17px;
    border-radius: 5px;
    font-size: 17px;
    line-height: 40px;
    text-align: center;
    color:#fff;
}
</style>

