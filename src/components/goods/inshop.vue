<template>
  <div class="classname">
    <!-- 店铺名字 -->
    <div class="shopinfos">
      <div class="shopIcon">
        <img :src="shopinfo.shopIcon">
      </div>
      <div class="shopName">
        <h3 class="name">{{shopinfo.name}}</h3>
        <p class="member">会员名: {{shopinfo.member}}</p>
        <p class="order">接单量: {{shopinfo.order}}</p>
        <p class="overbooking">下单量: {{shopinfo.overbooking}}</p>
      </div>
    </div>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部商品</mt-tab-item>
      <mt-tab-item id="2">基本资料</mt-tab-item>
      <mt-tab-item id="3">店铺等级</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="shopShow">
          <li v-for="(val,index) in shopshow" :key="index">
            <img :src="val.imgSrc">
            <p class="shopName">{{val.shopName}}</p>
            <p class="price"> ￥{{val.price}}</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="basicinformation" v-for="(val,index) in basicinformation" :key="index">
          <li class="shopName">店铺名称:
            <span>{{val.shopName}}</span>
          </li>
          <li class="member">会员名称:
            <span>{{val.member}}</span>
          </li>
          <li class="quality">认证资质:
            <span>
              <img src="../../../static/images/pinpaidianjia1.png">
              <img src="../../../static/images/pinpaidianjia2.png">
              <img src="../../../static/images/pinpaidianjia3.png">
            </span>
          </li>
          <li class="shoplevel">店铺等级:
            <span> ★ ★ ★ ★ ★</span>
          </li>
          <li class="deliverregion">配送区域:
            <span>{{val.deliverregion}}</span>
          </li>
          <li class="mainproducts">主营商品:
            <span>{{val.mainproducts}}</span>
          </li>
          <li class="shopaddress">
            <span class="shopAdd">店铺地址:</span>
            <span class="address">{{val.address}}</span>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="lever">
          <div class="storelevel">
            <p class="level">店铺等级:&nbsp;
              <span>★ ★ ★ ★ ★</span>
            </p>
          </div>
          <mt-progress :value="100">
            <div slot="start" class="title">花新鲜度</div>
            <div slot="end" class="progress">100%</div>
          </mt-progress>
          <mt-progress :value="90">
            <div slot="start" class="title">服务态度</div>
            <div slot="end" class="progress">90%</div>
          </mt-progress>
          <mt-progress :value="80">
            <div slot="start" class="title">发货速度</div>
            <div slot="end" class="progress">80%</div>
          </mt-progress>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <navcomponent></navcomponent>
  </div>
</template>
<script>
import navcomponent from '../subcomponents/navcomponent';
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1',
      selected: '1',
      shopinfo:
      {
        shopIcon: '../../../static/images/h2.jpg',
        name: '小蝶鲜花花坊',
        member: '小蝶儿',
        order: '5555',
        overbooking: '552',
      },
      shopshow: [
        {
          imgSrc: '../../../static/images/m1.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        },
        {
          imgSrc: '../../../static/images/m2.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        },
        {
          imgSrc: '../../../static/images/m3.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        },
        {
          imgSrc: '../../../static/images/m4.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        },
        {
          imgSrc: '../../../static/images/m5.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        },
        {
          imgSrc: '../../../static/images/m6.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        },
        {
          imgSrc: '../../../static/images/m7.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        },
        {
          imgSrc: '../../../static/images/n2.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        },
        {
          imgSrc: '../../../static/images/n3.jpg',
          shopName: '冬日暖歌-向日葵的笑脸',
          price: '299.00',
        }
      ],
      basicinformation: [
        {
          shopName: '小蝶鲜花花坊',
          member: '小蝶儿',
          deliverregion: '宝安区、南山区、龙华区、石岩、固戍、坪洲',
          mainproducts: '本店实体店主要经营以鲜花、绿植盆栽为主',
          address: '广东省深圳市宝安区桃源居社区1288,富源公寓28号对面',
        }
      ],
    }
  },
  components: {
    navcomponent
  },
}
</script>

<style lang="less" scoped>
.shopinfos {
  width: 100%;
  height: 4rem;
  background-color: rgba(249, 204, 194, 0.4);
  display: flex;
  align-items: center;
  .shopIcon {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
    }
  }
  .shopName {
    width: 70%;
    height: 80%;
    .name {
      font-size: .4rem;
      line-height: .8rem;
    }
    .member,
    .order,
    .overbooking {
      width: 100%;
      font-size: .32rem;
      line-height: .6rem;
      color: #666;
    }
  }
}

.mint-tab-container {
  background-color: #fff;
}

.mint-navbar {
  width: 100%;
  height: 1.173333rem;
  line-height: 1.173333rem;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  .mint-tab-item {
    display: block;
    color: #999;
  }
}

.mint-tab-item.is-selected {
  color: #f66;
  border-bottom: 2px solid #f66;
  margin-bottom: 0px;
}

.shopShow {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  li {
    width: 33.33%;
    height: 4rem;
    text-align: center;
    padding-top: .16rem;
    border-bottom: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
    img {
      width: 2.8rem;
      height: 2.666667rem;
    }
    .shopName {
      padding: 0 .4rem;
      font-size: .32rem;
      line-height: .426667rem;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price {
      font-size: .373333rem;
      color: #ff0000;
    }
  }
}

.basicinformation {
  width: 100%;
  height: 100%;
  padding-left: .266667rem;
  li {
    height: 1.333333rem;
    line-height: 1.333333rem;
    font-size: .346667rem;
    color: #666;
    span {
      font-size: .32rem;
      color: #999;
    }
    &:nth-child(3) {
      img {
        width: 2.266667rem;
        height: .4rem;
        vertical-align: middle;
        &:nth-child(1),
        &:nth-child(2) {
          width: 1.733333rem;
          height: .4rem;
        }
      }
    }
    &:nth-child(4) {
      span {
        font-size: .48rem;
        color: #ffa200;
      }
    }

    &:last-child {
      height: 2.133333rem;
      .shopAdd {
        font-size: .346667rem;
        color: #666;
        line-height: 1.333333rem;
      }
    }
  }
}

.lever {
  width: 100%;
  height: 11rem;
  .storelevel {
    width: 100%;
    height: 1.6rem;
    padding-left: .266667rem;
    p {
      line-height: 1.6rem;
      font-size: .346667rem;
      color: #666;
      span {
        font-size: .373333rem;
        color: #ffa200;
      }
    }
  }

  .mt-progress {
    width: 100%;
    margin-bottom: .853333rem;
    padding-right: 50%;
    padding-left: .266667rem;
    color: #666;
    font-size: .32rem;
    .title {
      margin-right: .266667rem;
    }
  }
}
</style>

