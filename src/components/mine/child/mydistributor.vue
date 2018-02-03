<template>
  <div>
    <div class="head">
      <router-link to="/membercenter">
        <i class="iconfont">&#xe50d;</i>
      </router-link>
      我的分销商
    </div>
    <div class="mydistributor">
      <ul>
        <li>
          <div class="distributorName">
            <h4>Jackson</h4>
            <span>加入时间:2017-7-29</span>
          </div>
          <div class="distributorShop">
            <p>查看微店</p>
          </div>
        </li>
        <li>
          <i class="iconfont">&#xe60d;</i>我的上司
        </li>
        <li>
          <i class="iconfont">&#xe64b;</i>一级会员
        </li>
        <li>
          <i class="iconfont">&#xe64b;</i>二级会员
        </li>
        <li>
          <i class="iconfont">&#xe64b;</i>三级会员
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 38px;
  background-color: #ff6666;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 38px;
  position: relative;
  a {
    color: #fff;
    i {
      position: absolute;
      font-size: 20px;
      left: 10px;
    }
  }
}

// .mydistributor {
//   width: 100%;
//   background-color: #fff;
//   ul {
//     width: 100%;
//     li {
//       width: 100%;
//       height: 44px;
//       border-bottom: 1px solid #f0f0f0;
//       &:nth-child(1) {
//         width: 100%;
//         height: 70px;
//         display: flex;
//         .demo-avatar {
//           width: 65px;
//           height: 70px;
//           position: relative;
//           .ivu-avatar {
//             display: inline-block;
//             background-color: #ccc;
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             margin-top: -22.5px;
//             margin-left: -22.5px;
//             width: 45px;
//             height: 45px;
//             border-radius: 50%;
//           }
//         }
//         .distributorName {
//           width: 60%;
//           h4 {
//             width: 100%;
//             font-size: 15px;
//             line-height: 35px;
//           }
//           span {
//             font-size: 12px;
//             color: #999;
//           }
//         }
//         .distributorShop{
//           width: 23%;
//          p{
//            width: 65px;
//            height: 31px;
//            background-color: #e94f4d;
//            border-radius: 6px;
//            text-align: center;
//            line-height: 31px;
//            font-size: 14px;
//            color:#fff;
//            margin:19px auto;
//          }
//         }
//       }
//       &:nth-child(2),
//       &:nth-child(3),
//       &:nth-child(4),
//       &:nth-child(5){
//         line-height: 44px;
//         padding-left: 10px;
//         font-size: 13px;
//         color:#333;
//         i{
//           font-size: 20px;
//           margin-right: 10px;
//         }
//           &:nth-child(2)>i{
//             color:#4db7e9;
//           }
//           &:nth-child(3)>i{
//             color:#ffd620;
//           }
//           &:nth-child(4)>i{
//             color:#d5dae0;
//           }
//           &:nth-child(5)>i{
//             color:#dd9924;
//           }
//       }
//     }
//   }
// }
</style>

