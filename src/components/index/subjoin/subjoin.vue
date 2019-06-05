<template>
    <div class="sub">
    <div class="subflex">
      <div class="font-color block1">
        <ul class="block1-ul">
          <li class="ul-li"><a class="ul-li-a" href=""><i class="iconfont icon-icon-test "></i>选购手机</a></li>
          <li class="ul-li"><a class="ul-li-a" href=""><i class="iconfont icon-icon-test "></i>企业团购</a></li>
          <li class="ul-li"><a class="ul-li-a" href=""><i class="iconfont icon-icon-test "></i>F码通道</a></li>
          <li class="ul-li"><a class="ul-li-a" href=""><i class="iconfont icon-icon-test "></i>米粉卡</a></li>
          <li class="ul-li"><a class="ul-li-a" href=""><i class="iconfont icon-icon-test "></i>以旧换新</a></li>
          <li class="ul-li"><a class="ul-li-a" href=""><i class="iconfont icon-icon-test "></i>话费充值</a></li>
        </ul>
      </div>
      <div class="font-color block2"><img src="https://i1.mifile.cn/a4/xmad_1559319039848_CQefl.jpg" alt="" width="316px" height="170px"></div>
      <div class="font-color block3"><img src="https://i1.mifile.cn/a4/xmad_15589747473883_mCjDP.jpg" alt="" width="316px" height="170px"></div>
      <div class="font-color block4"><img src="https://i1.mifile.cn/a4/xmad_15591870612933_eyMJK.jpg" alt="" width="316px" height="170px"></div>
    </div>
      <div class="banner w">
        <img src="https://i1.mifile.cn/a4/xmad_15590330241391_fkvOo.jpg" alt="" width="1226px">
      </div>
    </div>
</template>

<script>
    export default {
        name: "subjoin"
    }
</script>

<style scoped lang="scss">
  .banner{
    background-color: #fff;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 29px;
  }
.sub{
  margin: 0 auto;
  min-width: 1226px;
  max-width: 1226px;
  .subflex{
    display: flex;
    justify-content: space-between;
  }
  .block1{
    display: flex;
    justify-content: space-around;
    .block1-ul{
      width: 234px;
      height: 170px;
      text-align: center;
      list-style-type: none;
      background: #5f5750;
      overflow: hidden;


      .ul-li{
        position: relative;
        float: left;
        width: 70px;
        height: 82px;
        padding:  3px;
        margin-left: -1px;

        .ul-li-a{
          color: rgba(255,255,255,0.7);
          transition: all .3s ease-in-out;
          font-weight: 400;
          .iconfont{
            margin-top: 10px;
            font-size: 30px;
            display: block;
            text-align: center;
            /*display: block;*/
          }
        }
        .ul-li-a:hover{
          color: white;
        }

      }
      .ul-li::after,.ul-li::before{
        position: absolute;
        content: "";
        background: #665e57;
        /*665e57 */
      }
      .ul-li::after{
        top: 6px;
        left: 0px;
        width: 1px;
        height: 70px;
      }
    .ul-li::before{
      width: 66px;
      height: 1px;
      top: -1px;
      left: 6px;
    }

    }
  }
}
</style>
