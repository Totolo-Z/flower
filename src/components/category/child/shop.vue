<template>
  <div>
    <div class="banner">
        <img src="../../../../static/images/s1.jpg">
    </div>
     <!-- 店铺信息 -->
        <div class="shop">
            <ul>
                <li v-for="(val,index) in shopList" :key="index">
                    <div class="icon">
                        <img :src="val.logo">
                    </div>
                    <div class="item">
                        <h3 class="title">{{val.supplier_name}}</h3>
                        <p class="grade">信誉等级:<span class="star">★★★★</span></p>
                        <p class="safe">安全认证: <img src="../../../../static/images/pinpaidianjia1.png"></p>
                    </div>
                    <div class="say">
                        <img src="../../../../static/images/dianpu.png">
                        <img src="../../../../static/images/kefu.png">
                    </div>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import common from '../../common/common.js';
export default {
  data(){
    return{
        shopList:[],
    }
  },
  mounted(){
      this.shopData()
  },
  methods:{
     shopData(){
         this.$http.get(`${common.apihost}api/home/category/getSupplier`,{
             params:{
                 sid:1,
                 p:2
             }
         }).then((res)=>{
             this.shopList=res.body.msg
             console.log(res.body.msg)
         })
     }
  }
}
</script>

<style lang="less" scoped>
.banner {
    padding-right: .4rem;
    height: 1.6rem;
    img {
        width: 100%;
        height: 100%;
    }
}
.shop {
    margin-top:.133333rem;
    margin-bottom: 1.333333rem;
    width: 100%;
    background-color: #fff;
    ul {
        width: 100%;
        li {
            display: flex;
            width: 100%;
            height: 2.666667rem;
            border-bottom: 1px solid #f0f0f0;
            .icon {
                width: 22%;
                height: 100%;
                position: relative;
                img {
                    width: 1.6rem;
                    height: 1.6rem;
                    border-radius: 50%;
                   transform: translateY(.466667rem);
                }
            }
            .item {
                width: 50%;
                height: 100%;
                padding-left:.4rem;
                font-size: .32rem;
                line-height: .6rem;
                color: #999;
                .title{     
                    font-size: .4rem;
                    line-height: 1rem;
                    color:#333;
                }
                .name{
                    color: #666;
                }
                .grade{
                    .star{
                        color: #ffa200;
                        font-size: .373333rem;
                    }
                }
               .safe{
                   img{
                        width: 1.733333rem;
                        height: .4rem; 
                        vertical-align: middle;
                   }
               } 
            }
            .say {
                width: 28%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                img {
                    &:first-child {
                        width: .693333rem;
                        height: .8rem;
                    }
                    &:last-child {
                        width: .8rem;
                        height: .8rem;
                    }
                }
            }
        }
    }
}
</style>

