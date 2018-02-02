<template>
    <div class="style">
        <div class="head">
            <router-link to="/index">
                <i class="iconfont">&#xe50d;</i>
            </router-link>
            选择地区
        </div>
        <div class="bulletin">
            各地区售卖不同,请您根据您的收货地址选择相应的地区。
        </div>
        <p class="currentArea">当前定位地区</p>
        <div class="currentPosition">
            广东
        </div>
        <mt-index-list :show-indicator="false">
            <mt-index-section index="A">
                <mt-cell title="安徽"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="北京"></mt-cell>
            </mt-index-section>
            <mt-index-section index="C">
                <mt-cell title="重庆"></mt-cell>
            </mt-index-section>
            <mt-index-section index="F">
                <mt-cell title="福建"></mt-cell>
            </mt-index-section>
            <mt-index-section index="G">
                <mt-cell title="广东"></mt-cell>
                <mt-cell title="广西"></mt-cell>
                <mt-cell title="甘肃"></mt-cell>
                <mt-cell title="贵州"></mt-cell>
            </mt-index-section>
            <mt-index-section index="H">
                <mt-cell title="湖南"></mt-cell>
                <mt-cell title="湖北"></mt-cell>
                <mt-cell title="河南"></mt-cell>
                <mt-cell title="河北"></mt-cell>
                <mt-cell title="黑龙江"></mt-cell>
            </mt-index-section>
            <mt-index-section index="J">
                <mt-cell title="江西"></mt-cell>
                <mt-cell title="吉林"></mt-cell>
            </mt-index-section>
            <mt-index-section index="L">
                <mt-cell title="辽宁"></mt-cell>
            </mt-index-section>
            <mt-index-section index="N">
                <mt-cell title="宁夏"></mt-cell>
                <mt-cell title="内蒙古"></mt-cell>
            </mt-index-section>
            <mt-index-section index="O">
                <mt-cell title="澳门"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Q">
                <mt-cell title="青海"></mt-cell>
            </mt-index-section>
            <mt-index-section index="S">
                <mt-cell title="上海"></mt-cell>
                <mt-cell title="山东"></mt-cell>
                <mt-cell title="山西"></mt-cell>
                <mt-cell title="陕西"></mt-cell>
                <mt-cell title="四川"></mt-cell>
            </mt-index-section>
            <mt-index-section index="T">
                <mt-cell title="天津"></mt-cell>
                <mt-cell title="台湾"></mt-cell>
            </mt-index-section>
            <mt-index-section index="X">
                <mt-cell title="新疆"></mt-cell>
                <mt-cell title="西藏"></mt-cell>
                <mt-cell title="香港"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Y">
                <mt-cell title="云南"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="浙江"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
export default {
  
}
</script>


<style lang="less" scoped>
.style{
    background-color: #fff;
}
.head {
    width: 100%;
    height: 38px;
    background-color: #ff6666;
    position: relative;
    text-align: center;
    line-height: 38px;
    font-size: 15px;
    color: #fff;
    a {
        display: block;
        color: #fff;
        i {
            position: absolute;
            line-height: 38px;
            left: 10px;
            font-size: 20px;
        }
    }
}
.bulletin{
    width: 100%;
    height: 25px;
    background-color: #999;
    color:#fff;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
}
.currentArea{
    width: 100%;
    height: 30px;
    background-color: #f0f0f0;
    font-size: 12px;
    line-height: 30px;
    padding-left: 10px;
}
.currentPosition{
    width: 90px;
    height: 38px;
    border: #e94f4d;
    background-color: #f66;
    line-height: 38px;
    font-size: 14px;
    color:#fff;
    text-align: center;
    margin-left: 10px;
}
</style>

