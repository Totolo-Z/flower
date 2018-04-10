<template>
  <div class="style">
      <div class="head">
          <router-link to="/find">
          <i class="iconfont">&#xe50d;</i>
          </router-link>
          鲜花百科
      </div>
      <!-- 今日聚焦图片详情 -->
      <div class="focusPic">
          <div class="focus-title">
             鲜花百科
          </div>
          <div class="focus-container">
              <ul>
                  <li v-for="(val,index) in flowerList" :key="index" @click="goFlowerinfo(val.id)">           
                      <img :src="val.img" >
                        <p class="imgItem">{{val.post_title}}</p>
                        <p class="imgtitle">{{val.post_excerpt}}</p>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
import common from '../../common/common.js';
export default {
  data(){
      return{
           flowerList:[]
      }
  },
  mounted(){
      this.flowerListData()
  },
  methods:{
      goFlowerinfo(id){
          this.$router.push({path:`/flowerinfo/${id}`})
      },
      flowerListData(){
          this.$http.get(`${common.apihost}api/home/discover/encyList`,{
              params:{
                  id:this.$route.params.flowerinfoId
              }
          }).then((res)=>{
                this.flowerList=res.body.data
          })
      }
  }
}
</script>


<style lang="less" scoped>
.style{
    background-color: #fff;
    .head{
    width: 100%;
    height: 1.013333rem;
    background-color: #ff6666;
    position: relative;
    text-align: center;
    line-height: 1.013333rem;
    font-size: .4rem;
    color:#fff;
    i{
        position: absolute;
        left:.266667rem;
        font-size: .533333rem;
        color:#fff;
    }
}
.focusPic{
    width: 100%;
    background-color: #fff;
    padding:0 .266667rem;
    .focus-title{
        width: 100%;
        height:.933333rem;
        line-height: .933333rem;
        font-size: .4rem;
        color:#333;
    }
    .focus-container{
        width: 100%;
        ul{
            width: 100%;
            height: 100%;
            background-color: #fff;
            li{
                width: 100%;
                height: 8rem;
                border-bottom: 1px solid #f0f0f0;
                margin-bottom: .266667rem;
                background-color: #fff;
                
                img{
                    width: 100%;
                    height:6.666667rem;
                }
                .imgItem{
                    font-size: .346667rem;
                    color:#666;
                    line-height: .613333rem;
                }
                .imgtitle{
                    font-size: .32rem;
                    color:#999;
                }
            }
        }
    }
}
}

</style>

