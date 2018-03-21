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
                        <p class="title">{{val.title}}</p>
                        <p class="name">会员名字: {{val.name}}</p>
                        <p class="grade">信誉等级:<span class="star"> {{val.star}}</span></p>
                        <p class="safe">安全认证: <img src="../../../../static/images/pinpaidianjia1.png"></p>
                        <p class="distance"><i class="iconfont">&#xe68b;</i> 距离: <span class="far">{{val.far}}公里</span></p>
                    </div>
                    <div class="say">
                        <router-link :to="/inshop/+index">
                        <img src="../../../../static/images/dianpu.png">
                        </router-link>
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
            ],
            shop:[
                {
                    imgSrc:'../../../../static/images/qx.jpg',
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
    height: 1.6rem;
    img {
        width: 100%;
        height: 1.6rem;
    }
}

#shoplist {
    margin-top:.133333rem;
    margin-bottom: 1.333333rem;
    width: 100%;
    background-color: #fff;
    ul {
        width: 100%;
        li {
            display: flex;
            width: 100%;
            height: 3.066667rem;
            border-bottom: 1px solid #f0f0f0;
            .icon {
                width: 30%;
                height: 100%;
                position: relative;
                img {
                    width: 2.4rem;
                    height: 2.4rem;
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
                font-size: .32rem;
                height: .54rem;
                line-height: .54rem;
                padding-left: .2rem;
                .title{     
                    width: 100%;
                    font-size: .4rem;
                    height: .8rem;
                    line-height: .8rem;
                }
                .name{
                    width: 100%;
                    
                    color: #666666;
                }
                .grade{
                    color: #999999;
                    .star{
                        color: #ffa200;
                        font-size: .32rem;
                    }
                }
               .safe{
                   color: #999999;            
                   img{
                        width: 1.733333rem;
                        height: .45rem; 
                        vertical-align: middle;
                   }
               } 
               .distance{
                   font-size: .266667rem;
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
                        width: .613333rem;
                        height: .693333rem;
                    }
                    &:last-child {
                        width: .693333rem;
                        height: .706667rem;
                    }
                }
            }
        }
    }
}
</style>


