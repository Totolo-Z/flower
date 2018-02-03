<template>
  <div>
    <table>
      <tr>购物篮
        <i>编辑</i>
      </tr>
      <tr>
        <td>
          <input type="checkbox"><img src="../../../static/images/dianpu.png"> 小蝶鲜花花坊
        </td>
        <td v-for="(item,index) in goodsList" :key="index">
          <input type="checkbox">
          <div class="goodsContent">
            <div class="imgInfo">
              <img :src="item.imgSrc">
            </div>
            <div class="goodsRight">
              <h4>{{item.title}}</h4>
              <p>{{item.goodsSize}}</p>
              <p class="price">￥{{item.price}}</p>
            </div>
          </div>
        </td>
      </tr>
      <tr class="tatolMoney">
        <td>
          <input type="checkbox"> 全选
        </td>
        <td>
          合计：
          <span>￥{{ needPay }}</span>
        </td>
        <td>
          <router-link to="/confirmorder">
            <button>结算
              <span>{{goodsList.length}}</span>
            </button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  mounted() {
    // console.log(this.$store.getters.goodsList);
    this.goodsList = this.$store.getters.goodsList;
  },
  computed: {
    needPay() {
      let sum = 0;
      this.goodsList.forEach((val) => {
        sum += Number(val.price);
      })
      return sum;
    },
  },
}
</script>


<style lang="less" scoped>
table {
  width: 100%;
  tr {
    width: 100%;
    display: block;
    background-color: #fff;
    &:nth-child(1) {
      height: 38px;
      text-align: center;
      background-color: #f66;
      line-height: 38px;
      font-size: 15px;
      color: #fff;
      position: relative;
      i {
        position: absolute;
        right: 10px;
      }
    }
    td {
      padding-left: 10px;
      display: flex;
      border-bottom: 1px solid #f0f0f0;
        input {
          width: 14px;
          height: 14px;
        }
      .goodsContent {
        width: 92%;
        height: 100px;
        display: flex;
        .imgInfo {
          width: 100px;
          height: 100%;
          position: relative;
          img {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -40px;
            margin-left: -40px;
          }
        }
        .goodsRight {
          width: 70%;
          height: 100%;
          background-color: #fff;
          padding-top: 10px;
          h4 {
            font-size: 13px;
            color: #333;
          }
          p {
            line-height: 30px;
            color: #999;
          }
          .price {
            color: #f00;
            font-size: 15px;
            font-weight: 600;
          }
        }
      }
      &:nth-child(1) {
        width: 100%;
        display: flex;
        height: 44px;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        align-items: center;
          input {
            width: 14px;
            height: 14px;
          }
        img {
          width: 20px;
          height: 21px;
          margin: 0 10px;
        }
      }
    }
  }
  .tatolMoney {
    width: 100%;
    height: 44px;
    top: 574px;
    position: fixed;
    display: flex;
    border-bottom: 1px solid #f0f0f0;
    td {
      width: 100%;
      height: 100%;
      font-size: 12px;
      color: #666;
      &:nth-child(1) {
        width: 42%;
        height: 44px;
        border-bottom: 1px solid #f0f0f0;
          input {
            width: 14px;
            height: 14px;
          }
      }
      &:nth-child(2) {
        width: 30%;
        line-height: 44px;
        span {
          color: #f00;
          font-size: 13px;
          font-weight: 600;
        }
      }
      &:nth-child(3) {
        width: 25%;
        height: 39px;
        margin: 2px auto;
        padding: 0;
        a {
          width: 100%;
          height: 100%;
          button {
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 39px;
            font-size: 15px;
            color: #fff;
            background-color: #e94f4d;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>

