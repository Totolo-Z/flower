<template>
    <div>
        <div class="search">
            <router-link to="/index">
                <i class="iconfont back">&#xe50d;</i>
            </router-link>
            <input type="search" placeholder="搜索喜欢的宝贝">
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
    height: 38px;
    color: #fff;
    line-height: 38px;
    position: relative;
    background-color: #ff6666;
    a {
        display: block;
        color:#fff;
        .back {
            position: absolute;
            left: 10px;
            font-size: 20px;
        }
    }

    input {
        width: 80%;
        height: 100%;
        line-height: 38px;
        text-align: left;
        font-size: 14px;
        margin-left:35px;
        background-color: #ff6666;
    }
    .glass {
        position: absolute;
        right: 13px;
        top: 0px;
        font-size: 13px;
    }
}

::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5)
}

::-moz-placeholder {
    color: #fff;
}

:-ms-input-placeholder {
    color: #fff;
}

.hot-search {
    width: 100%;
    padding-left: 10px;
    .hot {
        width: 100%;
        height: 30px;
        font-size: 12px;
        line-height: 30px;
        color: #b0b0b0;
    }
    .hot-search-tags {
        width: 100%;
        span {
            display: block;
            max-width: 100%;
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 10px;
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
                height: 23px;
                padding: 0 13px;
                color: #000;
                line-height: 23px;
                text-align: center;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                i {
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
