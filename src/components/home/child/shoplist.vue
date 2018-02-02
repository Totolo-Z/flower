<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(val,index) in swiper" :key="index">
                <router-link :to="/carousel/+index">
                    <img :src="val.imgSrc">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 店铺信息 -->
        <div id="shoplist">
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
                        <p class="distance"><i class="iconfont">&#xe68b;</i> 距离: <span class="far">{{val.far}}公里</span></p>
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
    data() {
        return {
            swiper: [
                {
                    imgSrc: '../../../../static/images/s1.jpg'
                },
                {
                    imgSrc: '../../../../static/images/s2.jpg'
                },
                {
                    imgSrc: '../../../../static/images/p3.jpg'
                }
            ],
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
.mint-swipe {
    width: 100%;
    height: 60px;
    img {
        width: 100%;
        height: 60px;
    }
}

#shoplist {
    margin-top:5px;
    margin-bottom: 50px;
    width: 100%;
    background-color: #fff;
    ul {
        width: 100%;
        li {
            display: flex;
            width: 100%;
            height: 120px;
            border-bottom: 1px solid #f0f0f0;
            .icon {
                width: 30%;
                height: 100%;
                position: relative;
                img {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    position: absolute;
                    top:50%;
                    left:50%;
                    margin-top:-45px;
                    margin-left: -45px;
                }
            }
            .item {
                width: 40.33%;
                height: 100%;
                .title{     
                    width: 100%;
                    font-size: 15px;
                    height: 35px;
                    line-height: 35px;
                }
                .name{
                    width: 100%;
                    height: 18px;
                    line-height: 18px;
                    color: #666666;
                }
                .grade{
                    color: #999999;
                    height: 18px;
                    line-height: 18px;
                    .star{
                        color: #ffa200;
                        font-size: 13px;
                    }
                }
               .safe{
                   color: #999999;
                   height: 18px;
                   line-height: 18px;                
                   img{
                        width: 65px;
                        height: 18px; 
                        vertical-align: middle;
                   }
               } 
               .distance{
                   line-height: 18px;
                   color: #999999;
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


