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
                }
            ],
            commentPic: [
                {
                    commentImg: '../../../static/images/x1.jpg',
                },
                 {
                    commentImg: '../../../static/images/x1.jpg',
                }
            ],
        }
    },
    created() {
        console.log(this.$route.params.goodsId);
    }
}
</script>


<style lang="less" scoped>
.back {
    width: 100%;
    height: 60px;
    background-color: #ccc;
    position: relative;
    padding-left: 10px;
    display: table;
    .back-icon {
        font-size: 25px;
        line-height: 60px;
        color: #fff;
    }
    .back-img {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 50%;
        left: 50%;
        margin-left: -25px;
        margin-top: -25px;
        img {
            width: 50px;
            height: 50px;
        }
    }
}

.evaluate {
    width: 100%;
    // background-color: #fff;
    .evaluate-head {
        width: 100%;
        height: 43px;
        line-height: 43px;
        padding-left: 10px;
        font-size: 15px;
        font-weight: 500;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        span {
            width: 100px;
            height: 100%;
        }
    }
    .evaluate-tag {
        width: 100%;
        height: 80px;
        padding-left: 10px;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        span {
            display: block;
            max-width: 100%;
            height: 23px;
            border-radius: 10px;
            float: left;
            margin-right: 5px;
            margin-top: 10px;
            a {
                display: block;
                height: 23px;
                padding: 0 13px;
                line-height: 23px;
                text-align: center;
                font-size: 12px;
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
        padding-top:10px;
        background-color: #fff;
        .comment-list {
            width: 100%;
            margin-bottom:10px;
            .comment-item-info {
                width: 100%;
                height: 30px;
                display: flex;
                .comment-item-icon {
                    width: 10%;
                    height: 30px;
                    position: relative;
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-left: -12px;
                        margin-top: -12px;
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                    }
                }
                .comment-item-author {
                    width: 90%;
                    height: 30px;
                    .name {
                        width: 100%;
                        height: 13px;
                        line-height: 13px;
                        font-size: 13px;
                        color: #333;
                        font-weight: 600;
                    }
                    .date,
                    .style {
                        font-size: 12px;
                        line-height: 12px;
                        color: #ccc;
                    }
                }
            }
            .comment-item-content {
                width: 100%;
                padding: 10px;
                line-height: 16px;
                color: #333;
            }
            .comment-img-container {
                width: 100%;
                height: 110px;
               
                ul {
                    width: 100%;
                    height: 100px;
                    display: flex;
                    padding-left: 10px;
                    li {
                        width: 33.33%;
                        height: 100px;

                        img {
                            width: 100px;
                            height: 100px;
                        }
                    }
                }
            }
        }
    }
}
</style>

