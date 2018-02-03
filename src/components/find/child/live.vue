<template>
  <div>
       <div class="live">
          <ul>
              <li>
                  <img src="../../../../static/images/c3.jpg">
                  <div class="name">
                      正在直播 婉婉
                  </div>
              </li>
              <li>
                  <img src="../../../../static/images/c2.jpg">
                  <div class="name">
                      正在直播 蓝蓝
                  </div>
              </li>
              <li>
                  <img src="../../../../static/images/c1.jpg">
                  <div class="name">
                      正在直播 党党
                  </div>
              </li>
              <li>
                  <img src="../../../../static/images/n2.jpg">
                  <div class="name">
                      正在直播 芯芯
                  </div>
              </li>
          </ul>
      </div> 
  </div>
</template>
<style lang="less" scoped>
.live{
    width: 100%;
    height: 187px;
    background-color: #fff;
    overflow-x: auto;
    ul{
        width: 180%;
        height: 100%;
        display: flex;
        align-items: center;
        li{
            width: 125px;
            height: 148px;
            margin-left: 10px;
            img{
                width: 125px;
                height: 125px;
                vertical-align: bottom;
            }
            .name{
                width: 100%;
                height:22px;
                color:#fff;
                font-size: 12px;
                line-height: 22px;
                text-align: center;
                background-color: #f66;
            }
        }
    }
}
</style>

