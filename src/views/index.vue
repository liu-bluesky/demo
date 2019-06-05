<template>
<div class="index">
  <!--顶部nav开始-->
    <div class="index-header-nav"></div>
  <!--顶部nav结束-->

  <!--login-nav开始-->
  <div class="index-login-nav"></div>
  <!--login-nav结束-->


  <!--banner开始-->
  <div class="index-banner">
    <swiper></swiper>
  </div>
  <!--banner结束-->


  <!--subjoin开始-->
  <div class="index-subjoin">
    <subjoin></subjoin>
  </div>
  <!--subjoin结束-->


  <!--宣传盒子开始-->
  <div class="index-banner-max-box">
    <recommend></recommend>
  </div>
  <!--宣传盒子结束-->

  <!--推荐开始-->
  <div class="index-recommend"></div>
  <!--推荐结束-->

  <!--内容开始-->
  <div class="index-content">
    <contents></contents>
  </div>
  <!--内容结束-->

  <!--视频开始-->
  <div class="index-video"></div>
  <!--视频结束-->

  <!--底部开始-->
  <div class="index-foot"></div>
  <!--底部结束-->
</div>
</template>

<script>
  import swiper from '../components/index/swiper/swiper'
  import subjoin from '../components/index/subjoin/subjoin'
  import recommend from '../components/index/recommend/recommend'
  import contents from '../components/index/content/contents'
    export default {
        name: "index",
      components:{
        swiper,
        subjoin,
        recommend,
        contents
      }
    }
</script>

<style scoped lang="scss">
  .index{
    margin: 0 auto;

    .index-subjoin{
      margin-top: -86px;
    }
    .index-banner-max-box{
      width: 100%;
      background-color: #f5f5f5;
    }
    .index-content{
      width: 100%;
      background-color: #f5f5f5;
    }
  }

</style>
