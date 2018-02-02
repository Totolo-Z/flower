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
        <p class="distance">
          <i class="iconfont">&#xe68b;</i>距离: {{shopinfo.distance}}</p>
      </div>
    </div>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部商品</mt-tab-item>
      <mt-tab-item id="2">基本资料</mt-tab-item>
      <mt-tab-item id="3">店铺等级</mt-tab-item>
      <mt-tab-item id="4">店铺海报</mt-tab-item>
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
      <mt-tab-container-item id="4">
        hahahah
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
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
        distance: '56.33公里',
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
}
</script>

<style lang="less" scoped>
.shopinfos {
  width: 100%;
  height: 150px;
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
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }
  }
  .shopName {
    width: 70%;
    height: 80%;
    .name {
      font-size: 15px;
      line-height: 30px;
    }
    .member,
    .order,
    .overbooking,
    .distance {
      width: 100%;
      font-size: 12px;
      line-height: 20px;
    }
    .distance {
      i {
        font-size: 12px;
      }
    }
  }
}

.mint-tab-container {
  background-color: #fff;
}
.mint-navbar {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  .mint-tab-item {
    color: #999;
  }
}
.mint-tab-item.is-selected {
  border-width: 40px;
  color: #f66;
  border-bottom: 2px solid #f66;
}
.shopShow {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  li {
    width: 33.33%;
    height: 150px;
    text-align: center;
    padding-top: 6px;
    border-bottom: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
    img {
      width: 105px;
      height: 100px;
    }
    .shopName {
      padding: 0 15px;
      font-size: 12px;
      line-height: 16px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price {
      font-size: 14px;
      color: #ff0000;
    }
  }
}

.basicinformation {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  li {
    height: 50px;
    line-height: 50px;
    font-size: 13px;
    color: #666;
    span {
      font-size: 12px;
      color: #999;
    }
    &:nth-child(3) {
      img {
        width: 85px;
        height: 15px;
        vertical-align: middle;
        &:nth-child(1),
        &:nth-child(2) {
          width: 65px;
          height: 15px;
        }
      }
    }
    &:nth-child(4) {
      span {
        font-size: 18px;
        color: #ffa200;
      }
    }

    &:last-child {
      //  overflow: hidden;
      //   text-overflow: ellipsis;
      //   white-space: nowrap;    
      line-height: 0px;
      height: 80px;
      .shopAdd {
        font-size: 13px;
        color: #666;
        line-height: 50px;
      }
    }
  }
}

.lever {
  width: 100%;
  height: 900px;
  .storelevel {
    width: 100%;
    height: 60px;
    padding-left: 10px;
    p {
      line-height: 60px;
      font-size: 13px;
      color: #666;
      span {
        font-size: 14px;
        color: #ffa200;
      }
    }
  }

  .mt-progress {
    width: 100%;
    margin-bottom: 32px;
    padding-right: 50%;
    padding-left: 10px;
    color: #666;
    .title {
      font-size: 12px;
      margin-right: 10px;
    }
    .mt-progress-runway {
      height: 10px;
      .mt-progress-progress {
        height: 10px;
        background-color: #ff6666;
      }
    }
  }
}
</style>

