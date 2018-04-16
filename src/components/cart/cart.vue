
<template>
  <div>
    <div class="cartHead">
      购物篮
    </div>
    <!--商家  -->
    <div class="cartGoodsContent" v-for="(item,index) in shop" :key="index">
      <van-checkbox v-model="item.value" class='shopName'> <img src="../../../static/images/dianpu.png" class='shopIcon'>&nbsp; {{item.supplier_name}}
      </van-checkbox>
      <!--商品  -->
      <div v-for="(item2, index2) in item.goods_list" :key="index2" class='shopStyle'>
        <div class="shopContent">
          <van-checkbox v-model="item2.checked" class='shopCheck'> </van-checkbox>
          <div class="conten">
            <div class="imgInfo">
              <img :src="item2.goods_thumb">
            </div>
            <div class="goodsRight">
              <h4>{{item2.goods_name}}</h4>
              <van-stepper v-model="item2.step" />
              <div class="edit">
                <span class="price">￥{{item2.goods_price}}</span>
                <span class="editDelete" @click="editDelete(item2.rec_id)">删除</span>
              </div>
            </div>
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
        <span>￥{{totalAmount}}</span>
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
import common from '../common/common.js';
export default {
  data() {
    return {
      totalAmount:'',
      shop: [
        {
          goods_list: [
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
    this.goodsShow()
  },
  methods: {
    goodsShow() {
      this.$http.get(`${common.apihost}api/home/cart/index`, {
        'headers': { 'XX-Token': this.$store.state.token },
      }
      ).then((res) => {
        this.shop = res.body.data.goods
        this.goodsList = res.body.data.goods
        this.totalAmount=res.body.data.totalAmount
      })
    },
    editDelete(del){
      this.$http.get(`${common.apihost}api/home/cart/cancel`,{
        headers: { 'XX-Token': this.$store.state.token },
        params:{
             id:del
        }
      }).then((res)=>{
        if(res.data.code===1){
           this.goodsShow()
        }
      })
    }
  },
  // shopList() {
  //   let sum = 1;
  //   this.shop.forEach((val) => {
  //     val.goodsList.forEach((val2, index2) => {
  //       sum += index2;
  //     })
  //   });
  //   return sum;
  // },
  components: {
    navcomponent
  },
}
</script>


<style lang="less" scoped>
.cartHead {
  width: 100%;
  height: 1.013333rem;
  text-align: center;
  background-color: #f66;
  line-height: 1.013333rem;
  font-size: .4rem;
  color: #fff;
}

.cartGoodsContent {
  width: 100%;
  background-color: #fff;
  margin-bottom: .266667rem;
  .shopContent {
    width: 100%;
    height: 3.3rem;
    display: flex;
    border-top: 1px solid #f0f0f0;
    padding-top: .266667rem;
    .conten {
      width: 90%;
      height: 2.666667rem;
      display: flex;
      justify-content: space-around;
      position: relative;
      .imgInfo {
        width: 2.666667rem;
        height: 100%;
        position: relative;
        img {
          width: 2.133333rem;
          height: 2.133333rem;
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
        margin-top: .266667rem;
        padding-left: .133333rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h4 {
          font-size: .346667rem;
          color: #333;
          width: 100%;
          line-height: .5rem;
        }
        .edit {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .editDelete {
            font-size: .32rem;
            color: #333;
            margin-right: .266667rem;
            border: 1px solid #ccc;
            border-radius: 10px;
            width: 1.1rem;
            height: .48rem;
            text-align: center;
          }
          .price {
            color: #f00;
            font-size: .4rem;
            margin-bottom: .133333rem;
          }
        }
      }
    }
  }
}

.tatolMoney {
    background-color: #fff;
    width: 100%;
    height: 1.173333rem;
    position: fixed;
    bottom: 1.34rem;
    display: flex;
    align-items: center;
    line-height: 1.173333rem;
    font-size: .32rem;
    color: #666;
    border-bottom: 1px solid #f0f0f0;
    .allCheck {
      width: 20%;
    }
    .total {
      width: 53%;
      text-align: right;
      margin-right: .133333rem;
      span {
        color: #f00;
      }
    }
    .accounts {
      width: 22%;
      height: 1rem;
      background-color: #e94f4d;
      border-radius: 5px;
      text-align: center;
      font-size: .406667rem;
      a {
        color: #fff;
      }
    }
  }
</style>
