<template>
    <div>
        <div class="navcomponent">
            <ul>
                <li>
                    <router-link to="/home">
                        <img src="../../../static/images/home.png">
                        <p>首页</p>
                    </router-link>
                </li>

                <li>
                    <router-link to="/category">
                        <img src="../../../static/images/classify.png">
                        <p>分类</p>
                    </router-link>
                </li>

                <li>
                    <router-link to="/find">
                        <img src="../../../static/images/find.png">
                        <p>发现</p>
                    </router-link>
                </li>

                <li>
                    <router-link to="/cart">
                        <img src="../../../static/images/shopping.png">
                        <p>购物篮</p>
                    </router-link>
                </li>

                <li @click="jumpPage"> 
                    <img src="../../../static/images/my.png">
                    <p>我的</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        jumpPage() {
            if (!this.$store.state.token) {
                this.$router.push('/login')
            } else {
                this.$router.push('/membercenter')
            }
        }
    }
}
</script>
<style lang="less" scoped>
.navcomponent {
    width: 100%;
    height: 1.333333rem;
    position: absolute;
    bottom: 0px;
    background-color: #fff;
    position: fixed;
    border-top: 1px solid #f0f0f0;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        li {
            width: 20%;
            height: 100%;
            text-align: center;
            padding-top: .066667rem;
            font-size: .32rem;
            a {
                display: block;
                &:hover {
                    color: #333;
                }
            }
            img {
                width: .666667rem;
                height: .666667rem;
            }
            p {
                line-height: 0px;
            }
        }
    }
}
</style>