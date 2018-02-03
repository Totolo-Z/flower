<template>
    <div>
          <div class="head">
            <router-link to="/evaluation">
            <i class="iconfont">&#xe50d;</i>
            </router-link>
            评价商品
        </div>
        <div class="evaluationOfGoods">
            <div class="evaluationOfGoodsHead">
                评价宝贝
            </div>
            <div class="evaluationOfGoodsContent">
                <div class="evaluationOfGoodsImg">
                    <img :src="evaluation.imgSrc">
                </div>
                <div class="evaluationOfGoodsItem">
                    <p class="Name">{{evaluation.Name}}</p>
                    <p class="specification">{{evaluation.specification}}</p>
                    <span class="price">￥{{evaluation.price}}</span>
                </div>
            </div>
            <div class="evaluation">
                <div class="evaluationStar">
                    <p>商品评分
                        <i class="iconfont">&#xe635;&#xe635;&#xe635;&#xe635;&#xe635;</i>
                    </p>
                    <p>服务态度
                        <i class="iconfont">&#xe635;&#xe635;&#xe635;&#xe635;&#xe635;</i>
                    </p>
                    <p>发货速度
                        <i class="iconfont">&#xe635;&#xe635;&#xe635;&#xe635;&#xe635;</i>
                    </p>
                </div>
                <div class="inputEvaluation">
                    <div class="inputItem">
                   <textarea placeholder="输入评价" rows="10"></textarea>
                    </div>
                    <div class="addImg">
                        <i class="iconfont">&#xe699;</i>
                        <i class="iconfont">&#xe699;</i>
                        <i class="iconfont">&#xe699;</i>
                        <i class="iconfont">&#xe699;</i>
                        <i class="iconfont">&#xe699;</i>
                    </div>
                    <div class="commitEvaluation">
                        提交评论
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
            evaluation: {
                imgSrc: '../../../../static/images/m6.jpg',
                Name: '全国同城速递 红玫瑰康乃馨向日葵腊梅勿忘我',
                specification: '19朵混搭玫瑰Q款',
                price: '299.00',
            }
        }
    }
} 
</script>


<style lang="less" scoped>
.head {
    width: 100%;
    height: 38px;
    background-color: #ff6666;
    line-height: 38px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    position: relative;
    a{
        color:#fff;
         i {
        position: absolute;
        left: 10px;
        font-size: 20px;
    }
    }
}

.evaluationOfGoods {
    background-color: #fff;
    width: 100%;
    height: 3000px;
    padding-left: 10px;
    .evaluationOfGoodsHead {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: #ff6666;
    }
    .evaluationOfGoodsContent {
        width: 100%;
        height: 90px;
        display: flex;
        .evaluationOfGoodsImg {
            width: 80px;
            height: 100%;
            img {
                width: 80px;
                height: 80px;
            }
        }
        .evaluationOfGoodsItem {
            width: 100%;
            height: 100%;
            margin-left: 10px;
            .Name {
                width: 95%;
                line-height: 15px;
                font-size: 13px;
                color: #333;
            }
            .specification {
                font-size: 12px;
                color: #999;
                line-height: 35px;
            }
            .price {
                font-size: 13px;
                color: #ff0000;
                font-weight: 600;
            }
        }
    }
    .evaluation {
        width: 100%;
        height: 305px;
        .evaluationStar {
            width: 100%;
            height: 105px;
            p {
                width: 100%;
                height: 35px;
                line-height: 35px;
                font-size: 12px;
                color: #333;
                i {
                    font-size: 19px;
                    line-height: 35px;
                }
            }
        }
        .inputEvaluation {
            width: 100%;
            margin-top:15px;
            .inputItem{
                width: 97%;
                height: 53px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 12px;
                padding: 5px;
                textarea{
                    width: 100%;
                    height: 45px;       
                }
            }
            .addImg{
                width: 100%;
                height: 80px;
                display: flex;
                line-height: 80px;
                justify-content: space-around;
                i{
                   font-size: 38px;
                   color:#ccc;
                }
            }
            .commitEvaluation{
                width: 97%;
                height: 44px;
                border-radius: 5px;
                background-color: #e94f4d;
                color:#fff;
                line-height: 44px;
                font-size: 17px;
                text-align: center;
            }
        }
    }
}
::-webkit-input-placeholder {
    color: #ccc;
}

::-moz-placeholder {
    color: #ccc;
}

:-ms-input-placeholder {
    color: #ccc;
}
</style>

