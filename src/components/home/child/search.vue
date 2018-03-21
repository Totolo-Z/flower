<template>
    <div>
        <div class="search">
            <router-link to="/index">
                <i class="iconfont back">&#xe50d;</i>
            </router-link>
            <input type="search" placeholder="搜索喜欢的宝贝" class="custom">
            <i class="iconfont glass">&#xe607;</i>
        </div>
        <div class="hot-search">
            <p class="hot">热门搜索</p>
            <div class="hot-search-tags">
                <span>
                    <router-link to="#">
                        <i>红玫瑰</i>
                    </router-link>
                </span>
                <span>
                    <router-link to="#">
                        <i>手捧鲜花</i>
                    </router-link>
                </span>
                <span>
                    <router-link to="#">
                        <i>礼盒鲜花</i>
                    </router-link>
                </span>
                <span>
                    <router-link to="#">
                        <i>商务鲜花</i>
                    </router-link>
                </span>
                <span>
                    <router-link to="#">
                        <i>蛋糕预订</i>
                    </router-link>
                </span>
                <span>
                    <router-link to="#">
                        <i>包装辅料</i>
                    </router-link>
                </span>
                <span>
                    <router-link to="#">
                        <i>同城速递</i>
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.search {
    width: 100%;
    height: 1.013333rem;
    color: #fff;
    line-height: 1.013333rem;
    position: relative;
    background-color: #ff6666;
    a {
        display: block;
        color:#fff;
        .back {
            position: absolute;
            left: .266667rem;
            font-size: .533333rem;
        }
    }

    input {
        width: 80%;
        height: 85%;
        line-height: 1.013333rem;
        text-align: left;
        font-size: .373333rem;
        margin-left:.933333rem;
        background-color: #ff6666;
        caret-color:auto;
        
    }
    input.custom{
        caret-color:#fff;
    }
    .glass {
        position: absolute;
        right: .346667rem;
        top: 0px;
        font-size: .346667rem;
    }
}


input::-webkit-search-cancel-button{
  display: none;
  color:#fff;
}

input[type=search]::-ms-clear{
  display: none;
}
::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
}

::-moz-placeholder {
    color: #fff;
}

:-ms-input-placeholder {
    color: #fff;
}

.hot-search {
    width: 100%;
    padding-left: .266667rem;
    .hot {
        width: 100%;
        height: .8rem;
        font-size: .32rem;
        line-height: .8rem;
        color: #b0b0b0;
    }
    .hot-search-tags {
        width: 100%;
        span {
            display: block;
            max-width: 100%;
            margin-right: .266667rem;
            margin-bottom: .266667rem;
            border-radius: .266667rem;
            float: left;
            border: 1px solid #e6e6e6;
            background-color: #f5f5f5;
            color: #000;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3) {
                border: 1px solid #e94f4d;
                background-color: #ff6666;
            }
            a {
                display: block;
                height: .613333rem;
                padding: 0 .346667rem;
                color: #000;
                line-height: .613333rem;
                text-align: center;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                i {
                    font-size: .346667rem;
                    display: block;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            &:nth-child(1)>a,
            &:nth-child(2)>a,
            &:nth-child(3)>a {
                color: #fff;
            }
        }
    }
}
</style>
