<template>
    <div>
        <div class="memberSetUp">
            <ul>
                <li>
                    <span>头像</span>
                    <div class="demo-avatar">
                        <Avatar icon="person" size="large" />
                    </div>
                    <i class="iconfont">&#xe60a;</i>
                </li>
                <li>
                    <span>昵称</span>
                    <span class="setUpName">{{setUpInfo.setUpName}}</span>
                    <i class="iconfont">&#xe60a;</i>
                </li>
                <li>
                    <span>性别</span>
                    <i class="iconfont">&#xe60a;</i>
                </li>
                <li>
                    <span>签名</span>
                    <i class="iconfont">&#xe60a;</i>
                </li>
                <li>
                    <span>地区</span>
                    <i class="iconfont">&#xe60a;</i>
                </li>
            </ul>
        </div>
        <router-link to="/mine">
        <div class="login">
            退出登录
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            setUpInfo: {
                setUpName:'Jackson',
            }
        }
    }
}
</script>


<style lang="less" scoped>
.memberSetUp {
    width: 100%;
    height: 226px;
    background-color: #fff;
    ul {
        width: 100%;
        height: 100%;
        li {
            width: 100%;
            height: 45px;
            line-height: 45px;
            font-size: 13px;
            color: #333;
            padding-left: 10px;
            border-bottom: 1px solid #f0f0f0;
            display: flex;
            position: relative;
            &:last-child {
                border: none;
            }
            .demo-avatar{
                position: absolute;
                right: 30px;
            }
            .setUpName{
                position: absolute;
                right:30px;
                color:#999;
            }
            i{
                position: absolute;
                right:10px;
                font-size: 15px;
                color:#999;
            }
        }
    }
}

.login {
    margin-top:20px;
    width: 90%;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
    font-size: 17px;
    background-color: #e94f4d;
    margin-left: 18px;
    color: #fff;
}
</style>
