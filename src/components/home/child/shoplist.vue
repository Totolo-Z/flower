<template>
    <div>
        <!-- 店铺信息 -->
        <div id="shoplist">
            <ul>
                <li v-for="(val,index) in shop" :key="index">
                    <div class="icon">
                        <img :src="val.imgSrc">
                    </div>
                    <div class="item">
                        <p class="title">{{val.title}}</p>
                        <p class="grade">信誉等级:<span class="star"> {{val.star}}</span></p>
                        <p class="safe">安全认证: <img src="../../../../static/images/pinpaidianjia1.png"></p>
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
        <navcomponent> </navcomponent>
    </div>
</template>
<script>
import navcomponent from '../../subcomponents/navcomponent.vue';
export default {
    data() {
        return {
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
    },
    methods:{
        
    },
     components: {
        navcomponent
    },
}
</script>

<style lang="less" scoped>

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
                    width: 2rem;
                    height: 2rem;    
                    border-radius: 50%;
                    position: absolute;
                    top:50%;
                    left:50%;
                    margin-top:-37.5px;
                    margin-left: -37.5px;
                }
            }
            .item {
                width: 40.33%;
                height: 100%;
                font-size: .32rem;
                line-height: .8rem;
                padding-left: .2rem;
                color: #999;   
                .title{     
                    width: 100%;
                    font-size: .4rem;
                    height: 1rem;
                    line-height: .8rem;
                    color:#333;
                    padding-top:.25rem;
                }
                .grade{
                    .star{
                        color: #ffa200;
                        font-size: .32rem;
                    }
                }
               .safe{           
                   img{
                        width: 1.733333rem;
                        height: .45rem; 
                        vertical-align: middle;
                   }
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


