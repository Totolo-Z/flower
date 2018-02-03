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
                    star:'★ ★ ★ ★',
                    far:'36.6',
                },
                {
                    imgSrc:'../../../../static/images/m3.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★ ★ ★ ★',
                    far:'36.6',
                },
                {
                    imgSrc:'../../../../static/images/m4.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★ ★ ★ ★',
                    far:'36.6',
                },
                {
                    imgSrc:'../../../../static/images/m5.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★ ★ ★ ★',
                    far:'36.6',
                },
                {
                    imgSrc:'../../../../static/images/m6.jpg',
                    title:'小蝶鲜花花坊',
                    name:'小蝶儿',
                    star:'★ ★ ★ ★',
                    far:'36.6',
                },
            ]
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
    padding-right: 15px;
    height: 60px;
    img {
        width: 100%;
        height: 100%;
    }
}
.shop {
    margin-top:5px;
    margin-bottom: 50px;
    width: 100%;
    background-color: #fff;
    ul {
        width: 100%;
        li {
            display: flex;
            width: 100%;
            height: 100px;
            border-bottom: 1px solid #f0f0f0;
            .icon {
                width: 20%;
                height: 100%;
                position: relative;
                img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    position: absolute;
                    top:50%; 
                    left:50%;
                    margin-top:-30px;
                    margin-left: -30px;
                }
            }
            .item {
                width: 50.33%;
                height: 100%;
                padding-left: 5px;
                .title{     
                    width: 100%;
                    font-size: 15px;
                    line-height: 25px;
                }
                .name{
                    width: 100%;
                    line-height: 16px;
                    font-size: 12px;
                    color: #666;
                }
                .grade{
                    color: #999;
                    line-height: 16px;
                    font-size: 12px;
                    .star{
                        color: #ffa200;
                        font-size: 14px;
                    }
                }
               .safe{
                   color: #999;
                   font-size: 12px;
                   line-height: 16px;                
                   img{
                        width: 65px;
                        height: 15px; 
                        vertical-align: middle;
                   }
               } 
               .distance{
                   line-height: 16px;
                   font-size: 12px;
                   color: #999;
               }
            }
            .say {
                width: 30%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                img {
                    &:first-child {
                        width: 26px;
                        height: 30px;
                    }
                    &:last-child {
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
}
</style>

