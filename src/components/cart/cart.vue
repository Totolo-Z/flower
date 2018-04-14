
<template>
  <div>
    <div class="cartHead">
      购物篮
      <i @click="show=!show">编辑</i>
    </div>
    <div class="editChange" v-show="show">
      <span>删除</span>
    </div>
    <!--商家  -->
    <div class="cartGoodsContent" v-for="(item,index) in shop" :key="index">
      <!--商品  -->
      <div v-for="(item2, index2) in item.goodsList" :key="index2" class='shopStyle'>
        <van-checkbox v-model="item2.value" class='shopName'>&nbsp;{{item.name}}</van-checkbox>
        <div class="shopContent">
          <van-checkbox v-model="item2.checked" class='shopCheck'> </van-checkbox>
          <div class="conten">
            <div class="imgInfo">
              <img :src="item2.imgSrc">
            </div>
            <div class="goodsRight">
              <h4>{{item2.title}}</h4>
              <p class="price">￥{{item2.price}}</p>
            </div>
            <van-stepper v-model="item2.step" />
          </div>
        </div>
      </div>
    </div>

    <div class="tatolMoney">
      <div class="allCheck">
        <van-checkbox>&nbsp;全选</van-checkbox>
      </div>
      <div class="total">
        合计：
        <span>￥{{ needPay }}</span>
      </div>

      <div class="accounts">
        <router-link to="/confirmorder">
          结算
          <span>({{shop.length}})</span>
        </router-link>
      </div>
    </div>
    <navcomponent> </navcomponent>
  </div>
</template>

<script>
import navcomponent from '../subcomponents/navcomponent.vue';
export default {
  data() {
    return {
      show: false,
      result: [],
      shop: [
        {
          name: '小蝶鲜花花坊',
          goodsList: [
            {
              checked: true,
              step: 1,
            }
          ],
        }
      ],
    };
  },
  mounted() {
    this.shop[0].goodsList = this.$store.getters.goodsList;
  },
  computed: {
    needPay() {
      let sum = 0;
      this.shop.forEach((val) => {
        val.goodsList.forEach((val2) => {
          sum += Number(val2.price);
        })
      });
      return sum;
    },
  },
  shopList() {
    let sum = 1;
    this.shop.forEach((val) => {
      val.goodsList.forEach((val2, index2) => {
        sum += index2;
      })
    });
    return sum;
  },
  components: {
    navcomponent
  },
}
</script>


<style lang="less" scoped>
.cartHead {
  width: 100%;
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

.editChange {
  width: 100%;
  height: 30px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #f0f0f0;
  span {
    display: inline-block;
    height: 20px;
    border: 1px solid #f66;
    margin: 5px 10px;
    border-radius: 8px;
    padding: 0 5px;
    color: #f66;
  }
}

.cartGoodsContent {
  width: 100%;
  background-color: #fff;
  .shopStyle {
    width: 100%;
    .shopName {
      width: 100%;
      height: 1.1rem;
      line-height: 1.1rem;
      font-size: .373333rem;
      color: #333;
      font-weight: 600;
    }
    .shopContent {
      width: 100%;
      height: 4rem;
      display: flex;
      .conten {
        width: 100%;
        height: 100px;
        border-top: 1px solid #f0f0f0;
        display: flex;
        justify-content: space-around;
        position: relative;
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
            margin-left: -40px;
            margin-top: -40px;
          }
        }
        .goodsRight {
          width: 80%;
          height: 100%;
          margin-top:.266667rem;
          h4 {
            font-size: .346667rem;
            color: #333;
            width: 100%;
            line-height: .5rem;
          }
          .price {
            color: #f00;
            font-size: 15px;
            font-weight: 600;
          }
        }
        .van-stepper {
          position: absolute;
          top: 50px;
          right: 20px;
        }
      }
    }
  }
}

.tatolMoney {
  background-color: #fff;
  width: 100%;
  height: 44px;
  top: 573px;
  position: fixed;
  display: flex;
  line-height: 44px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #f0f0f0;
  .allCheck {
    width: 20%; // text-align: center;
  }
  .total {
    width: 53%;
    text-align: right;
    margin-right: 5px;
    span {
      color: #f00;
    }
  }
  .accounts {
    width: 22%;
    height: 40px;
    background-color: #e94f4d;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    a {
      color: #fff;
    }
  }
}
</style>
