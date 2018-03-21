<template>
    <div>
        <div class="subcomponent">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(val,index) in commentId" :key="index">
                    <router-link :to="/carousel/+index">
                        <img :src="val.imgSrc">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<style lang="less" scoped>
.subcomponent {
    width: 100%;
    .mint-swipe {
        width: 100%;
        height: 4.186667rem;
        img {
            width: 100%;
            height: 4.186667rem;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
           
        }
    },
    props:['commentId']
}
</script>
