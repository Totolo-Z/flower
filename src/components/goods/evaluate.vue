<template>
    <div>
        <!-- 返回 -->
        <div class="back">
                <i class="iconfont back-icon" @click="$router.back()">&#xe50d;</i>
            <div class="back-img" >
                <img :src="backImg.imgSrc">
            </div>
        </div>
        <!-- 宝贝评价 -->
        <div class="evaluate">
            <div class="evaluate-head">
                <span>宝贝评价</span> (236)
            </div>
            <div class="evaluate-tag">
                <span class="tag-posi">
                    <a href="#">花很新鲜(23)</a>
                </span>
                <span class="tag-posi">
                    <a href="#">上门送货很快(52)</a>
                </span>
                <span class="tag-posi">
                    <a href="#"> 包装挺好(56)</a>
                </span>
                <span class="tag-posi">
                    <a href="#">质量不错(45)</a>
                </span>
                <span class="tag-neg">
                    <a href="#">不新鲜(4)</a>
                </span>
            </div>
            <div class="evaluate-content" v-for="(val,index) in commentList" :key="index">
                <div class="comment-list" >
                    <div class="comment-item-info">
                        <div class="comment-item-icon">
                            <img :src="val.imgIcon">
                        </div>
                        <div class="comment-item-author">
                            <p class="name">{{val.name}}</p>
                            <span class="date">{{val.date}}</span>&nbsp;&nbsp;&nbsp;
                            <span class="style">款型:{{val.style}} </span>
                        </div>
                    </div>
                    <div class="comment-item-content">
                        <span class="content">{{val.content}}</span>
                    </div>
                    <div class="comment-img-container">
                        <ul>
                            <li v-for="(val,index) in commentPic" :key="index">
                                <img :src="val.commentImg">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backImg: 
                {
                    imgSrc: '../../../static/images/x1.jpg',
                },
            commentList: [
                {
                    imgIcon: '../../../static/images/qx.jpg',
                    name: '小雪人',
                    date: '2017.12.25',
                    style: '红玫瑰',
                    content: '首先值得肯定的是他们家的服务，是我遇见的服务态度最好的一家！因为第一次送花闹了点小插曲，但是客服很有耐心的帮我调解，最后花店重新把花抱回去重新插过了，第二次明显比第一次好了很多！花很新鲜，总的来说值得购买，下次还会来',
                },
                  {
                    imgIcon: '../../../static/images/qx.jpg',
                    name: '小雪人',
                    date: '2017.12.25',
                    style: '红玫瑰',
                    content: '首先值得肯定的是他们家的服务，是我遇见的服务态度最好的一家！因为第一次送花闹了点小插曲，但是客服很有耐心的帮我调解，最后花店重新把花抱回去重新插过了，第二次明显比第一次好了很多！花很新鲜，总的来说值得购买，下次还会来',
                },
            ],
            commentPic: [
                {
                    commentImg: '../../../static/images/x1.jpg',
                },
                 {
                    commentImg: '../../../static/images/x1.jpg',
                },
                {
                    commentImg: '../../../static/images/x1.jpg',
                },
            ],
        }
    },
   
}
</script>


<style lang="less" scoped>
.back {
    width: 100%;
    height: 1.6rem;
    background-color: #ccc;
    position: relative;
    padding-left: .266667rem;
    display: table;
    .back-icon {
        position: absolute;
        left: .266667rem;
        font-size: .666667rem;
        line-height: 1.6rem;
        color: #fff;
    }
    .back-img {
        margin:0 auto;
        width: 2rem;
        height: 1.6rem;
        img {
            width: 1.333333rem;
            height: 1.333333rem;
            transform: translate(.266667rem,.133333rem)
        }
    }
}

.evaluate {
    width: 100%;
    .evaluate-head {
        width: 100%;
        height: 1.146667rem;
        line-height: 1.146667rem;
        padding-left: .266667rem;
        font-size: .4rem;
        font-weight: 500;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        span {
            width: 2.666667rem;
            height: 100%;
        }
    }
    .evaluate-tag {
        width: 100%;
        height: 2.133333rem;
        padding-left: .266667rem;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        span {
            display: block;
            max-width: 100%;
            height:.613333rem;
            border-radius: 10px;
            float: left;
            margin-right: .133333rem;
            margin-top: .266667rem;
            a {
                display: block;
                height:.613333rem;
                padding: 0 .346667rem;
                line-height:.613333rem;
                text-align: center;
                font-size: .32rem;
            }
        }
        .tag-posi {
            background-color: #ffe0e0;
            a {
                color: #ff0300;
            }
        }
        .tag-neg {
            background-color: #f1f1f1;
            a {
                color: #999999;
            }
        }
    }
    .evaluate-content {
        width: 100%;
        padding-top:.266667rem;
        background-color: #fff;
        .comment-list {
            width: 100%;
            margin-bottom:.266667rem;
            .comment-item-info {
                width: 100%;
                height: .82rem;
                display: flex;
                .comment-item-icon {
                    width: 10%;
                    height: .82rem;
                    position: relative;
                    img {
                        width: .666667rem;
                        height: .666667rem;
                        border-radius: 50%;
                        transform: translate(.2rem,.066667rem);
                    }
                }
                .comment-item-author {
                    width: 90%;
                    height:.8rem;
                    .name {
                        width: 100%;
                        height: .346667rem;
                        line-height: .346667rem;
                        font-size: .346667rem;
                        color: #333;
                        font-weight: 600;
                    }
                    .date,
                    .style {
                        font-size: .32rem;
                        line-height: .32rem;
                        color: #ccc;
                    }
                }
            }
            .comment-item-content {
                width: 100%;
                padding: .266667rem;
                line-height: .426667rem;
                color: #333;
                font-size: .32rem;
            }
            .comment-img-container {
                width: 100%;
                height: 2.933333rem;
                ul {
                    width: 100%;
                    height: 2.666667rem;
                    display: flex;
                    padding-left: .266667rem;
                    li {
                        width: 30%;
                        height: 2.666667rem;  
                        margin-right: .133333rem;                  
                        img {
                            width: 2.666667rem;
                            height: 2.666667rem;
                        }
                    }
                }
            }
        }
    }
}
</style>

