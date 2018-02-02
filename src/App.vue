<template>
  <div id="app">
    <router-view/>
    <div class="navBar">
      <ul>
        <li>
          <router-link to="/home">
            <img src="../static/images/home.png">
            <p>首页</p>
          </router-link>
        </li>

        <li>
          <router-link to="/category">
            <img src="../static/images/classify.png">
            <p>分类</p>
          </router-link>
        </li>

        <li>
          <router-link to="/find">
            <img src="../static/images/find.png">
            <p>发现</p>
          </router-link>
        </li>

        <li>
          <router-link to="/cart">
            <img src="../static/images/shopping.png">
            <p>购物篮</p>
          </router-link>
        </li>

        <li>
          <router-link to="/mine">
            <img src="../static/images/my.png">
            <p>我的</p>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="less" scoped>
.navBar {
  width: 100%;
  height: 0.5rem;
  position: absolute;
  bottom: 0px;
  background-color: #fff;
  position: fixed;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    li {
      width: 20%;
      height: 100%;
      text-align: center;
      padding-top: 0.02rem;
      a {
        display: block;
        img {
          width: 0.25rem;
          height: 0.25rem;
        }
      }
    }
  }
}
</style>



