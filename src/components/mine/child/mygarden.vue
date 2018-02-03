<template>
  <div>
      <div class="head">
          <router-link to="/membercenter">
          <i class="iconfont">&#xe50d;</i>
          </router-link>
          我的花园
      </div>
      <div class="mygarden">
        <i class="iconfont">&#xe690;</i>
        敬请期待 
      </div>
  </div>
</template>

<style lang="less" scoped>
.head{
    width: 100%;
    height: 38px;
    background-color: #ff6666;
    line-height: 38px;
    text-align: center;
    font-size: 15px;
    color:#fff;
    position: relative;
    a{
        color:#fff;
        i{
            position: absolute;
            font-size: 20px;
            left:10px;
        }
    }
}
.mygarden{
    width: 100%;
    height: 1000px;
    background-color: #fff;
    text-align: center;
    padding-top:200px;
    font-size: 13px;
    color:#999;
    position: relative;
    i{
        top:120px;
        font-size: 55px;
        color:#ff6666;
       position: absolute;
    }
}
</style>

