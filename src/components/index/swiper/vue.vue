<template>
  <div>

    <div class="swiper-container">
      <swiper  :options="swiperOption">
        <swiper-slide v-for="itemImg in itemImgs" :key="itemImg.id">
          <img :src="itemImg.img" alt="swiper-image" class="header" width="500px">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-prev swiper-button-black " slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        itemImgs:[
          {id:0,img: 'https://i1.mifile.cn/a4/xmad_15590358701464_sEyqY.jpg'},
          {id:1,img:  'https://i1.mifile.cn/a4/xmad_15590357922113_dZxos.jpg'},
          {id:2,img:  'https://i1.mifile.cn/a4/xmad_15590487108559_JOpcA.jpg'},
          {id:3,img: 'https://i1.mifile.cn/a4/xmad_15586683348207_opnBm.jpg'},
          {id:4,img:  'https://i1.mifile.cn/a4/xmad_15590297188488_lNBWg.jpg'},
        ],
        swiperOption:{
          /*
          * !!! notNextTick是一个组件自有属性，如果notNextTick设置为true，
          * 组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，
          * 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true*/
          notNextTick:true,//如果第一时间加载就用这个需要把这改为true 否则就false
          autoplay: {
            // delay: 100,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          slidesPerView:1,//视图上显示几个图片
          loop:true,//是否循环播放
          direction:'horizontal',//判断滑动方向
          // paginationType:'progress',分页器可以单独设置也可以集中配置
          paginationClickable:true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable :true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          preventClicks : true,//默认true
        }
      }
    },
    components:{
      swiper,
      swiperSlide
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 500px;
    height: 300px;
    margin: 20px auto;
  }
  .swiper-button-next{
    opacity: .3;
  }
  .swiper-button-prev{
    opacity: .3;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom:28px;
  }
</style>
