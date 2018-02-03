<template>
    <div>
        <div class="advice">
            <ul>                                                            
                <li v-for="(val,index) in advice" :key="index">
                    <div class="information">
                        <div class="icon">
                            <img :src="val.iconImg">
                        </div>
                        <div class="nickname">
                            <p class="name">{{val.name}}</p>
                            <p class="time">{{val.time}}分钟前被推荐</p>
                        </div>
                    </div>
                    <div class="content">
                        <p class="comment">{{val.comment}}</p>
                        <div class="picture">
                            <ul class="pic">
                                <li><img :src="val.oneImg"></li>
                                <li><img :src="val.twoImg"></li>
                                <li><img :src="val.threeImg"></li>
                            </ul>
                        </div>
                        <div class="recommend">
                            <img :src="val.imgShop">
                            <span class="description">【脱单神器，赶快购买吧！】</span>
                        </div>
                    </div>
                    <div class="share">
                        <div class="like">
                            <i class="iconfont">&#xe618;</i>&nbsp;&nbsp;点赞
                        </div>
                        <div class="discuss">
                            <i class="iconfont">&#xe63b;</i>&nbsp;&nbsp;评论
                        </div>
                        <div class="sharing">
                            <i class="iconfont">&#xe681;</i>&nbsp;&nbsp;分享
                        </div>
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
            advice: [
                {
                    iconImg: '../../../static/images/qx.jpg',
                    name: '烊烊的小姐姐',
                    time: '20',
                    comment: '脱单神器，赶快行动购买吧！',
                    oneImg: '../../../static/images/n2.jpg',
                    twoImg: '../../../static/images/n2.jpg',
                    threeImg: '../../../static/images/n2.jpg',
                    imgShop: '../../../static/images/n2.jpg',
                },
                {
                    iconImg: '../../../static/images/qx.jpg',
                    name: '小叮当',
                    time: '20',
                    comment: '脱单神器，赶快行动购买吧！',
                    oneImg: '../../../static/images/n3.jpg',
                    twoImg: '../../../static/images/n3.jpg',
                    threeImg: '../../../static/images/n3.jpg',
                    imgShop: '../../../static/images/n3.jpg',
                },
                {
                    iconImg: '../../../static/images/qx.jpg',
                    name: '豆浆油条',
                    time: '20',
                    comment: '脱单神器，赶快行动购买吧！',
                    oneImg: '../../../static/images/m6.jpg',
                    twoImg: '../../../static/images/m6.jpg',
                    threeImg: '../../../static/images/m6.jpg',
                    imgShop: '../../../static/images/m6.jpg',
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.advice {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            margin-bottom: 10px;
            background-color: #fff;
            .information {
                width: 100%;
                height: 50px;
                background-color: #fff;
                display: flex;
                .icon {
                    width: 15%;
                    height: 50px;
                    position: relative;
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-top: -15px;
                        margin-left: -15px;
                    }
                }
                .nickname {
                    width: 85%;
                    height: 100%;
                    padding-top: 5px;
                    .name {
                        font-size: 14px;
                        font-weight: 600;
                        color: #333;
                        line-height: 20px;
                    }
                    .time {
                        color: #ccc;
                        font-size: 12px;
                    }
                }
            }
            .content {
                width: 100%;
                height: 210px;
                padding-left: 10px;
                padding-right: 5px;
                border-bottom: 1px solid #f0f0f0;
                .comment {
                    width: 100%;
                    height: 20px;
                    font-size: 12px;
                    color: #ccc;
                    line-height: 25px;
                }
                .picture {
                    width: 100%;
                    height: 125px;
                    .pic {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        li {
                            width: 33%;
                            height: 115px;
                            margin-right: 5px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                .recommend {
                    width: 99%;
                    height: 50px;
                    padding-left: 5px;
                    background-color: #f5f5f5;
                    line-height: 50px;
                    color: #666;
                    img {
                        width: 40px;
                        height: 40px;
                        vertical-align: middle;
                    }
                }
            }
            .share {
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: space-around;
                div {
                    width: 50px;
                    height: 100%;
                    line-height: 40px;
                    text-align: center;
                    font-size: 13px;
                    color: #333;
                    i {
                        font-size: 14px;
                        font-weight: 600;
                    }
                }
            }
        }
    }
}
</style>


