<template>
  <div>
    <div class="banner">
        <img src="../../../../static/images/s1.jpg">
    </div>
     <!-- 店铺信息 -->
        <div class="shop">
            <ul>
                <li v-for="(val,index) in shop" :key="index">
                    <div class="icon">
                        <img :src="val.imgSrc">
                    </div>
                    <div class="item">
                        <h3 class="title">{{val.title}}</h3>
                        <p class="name">会员名字: {{val.name}}</p>
                        <p class="grade">信誉等级:<span class="star"> {{val.star}}</span></p>
                        <p class="safe">安全认证: <img src="../../../../static/images/pinpaidianjia1.png"></p>
                        <p class="distance"><i class="iconfont">&#xe68b;</i>  距离: <span class="far">{{val.far}}公里</span></p>
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
export default {
  data(){
    return{
        shop:[
                {
                    imgSrc:'../../../../static/images/m2.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★★★★',
                    far:'36.6',
                },
                {
                    imgSrc:'../../../../static/images/m3.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★★★★',
                    far:'36.6',
                },
                {
                    imgSrc:'../../../../static/images/m4.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★★★★',
                    far:'36.6',
                },
                {
                    imgSrc:'../../../../static/images/m5.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★★★★',
                    far:'36.6',
                },
                {
                    imgSrc:'../../../../static/images/m6.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★★★★',
                    far:'36.6',
                },
            ]
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
                padding-left:.133333rem;
                font-size: .32rem;
                line-height: .4rem;
                color: #999;
                .title{     
                    font-size: .4rem;
                    line-height: .666667rem;
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

