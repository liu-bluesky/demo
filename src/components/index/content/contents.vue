<template>
    <div class="contentbox">
      <div class="class">
        <span class="phone">手机</span>
      </div>
      <ul class="contents">
        <!--图书-->
        <li class="transform-y books">
          <div class="content-class">
            图书
          </div>
          <div class="swiper-container">
              <swiper v-bind:options="swiperOption">
                <swiper-slide v-for="item in items" :key="item.id">
                <h2 class="title">{{item.title}}</h2>
                  <p class="comment">{{item.comment}}</p>
                  <h3 class="price">{{item.price}} 元</h3>
                  <img :src="item.img" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-next swiper-button-white"  slot="button-prev"></div>
                <div class="swiper-button-prev swiper-button-white"  slot="button-next"></div>
              </swiper>
          </div>
        </li>
        <!--miui主题-->
        <li class="transform-y books">
          <div class="content-class">
            图书
          </div>
          <div class="swiper-container">
            <swiper v-bind:options="swiperOption">
              <swiper-slide v-for="item in items" :key="item.id">
                <h2 class="title">{{item.title}}</h2>
                <p class="comment">{{item.comment}}</p>
                <h3 class="price">{{item.price}} 元</h3>
                <img :src="item.img" alt="">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-next swiper-button-white"  slot="button-prev"></div>
              <div class="swiper-button-prev swiper-button-white"  slot="button-next"></div>
            </swiper>
          </div>
        </li>
        <!--游戏-->
        <li class="transform-y books">
          <div class="content-class">
            图书
          </div>
          <div class="swiper-container">
            <swiper v-bind:options="swiperOption">
              <swiper-slide v-for="item in items" :key="item.id">
                <h2 class="title">{{item.title}}</h2>
                <p class="comment">{{item.comment}}</p>
                <h3 class="price">{{item.price}} 元</h3>
                <img :src="item.img" alt="">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-next swiper-button-white"  slot="button-prev"></div>
              <div class="swiper-button-prev swiper-button-white"  slot="button-next"></div>
            </swiper>
          </div>
        </li>
        <!--应用-->
        <li class="transform-y books">
          <div class="content-class">
            图书
          </div>
          <div class="swiper-container">
            <swiper v-bind:options="swiperOption">
              <swiper-slide v-for="item in items" :key="item.id">
                <h2 class="title">{{item.title}}</h2>
                <p class="comment">{{item.comment}}</p>
                <h3 class="price">{{item.price}} 元</h3>
                <img :src="item.img" alt="">
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-next swiper-button-white"  slot="button-prev"></div>
              <div class="swiper-button-prev swiper-button-white"  slot="button-next"></div>
            </swiper>
          </div>
        </li>
      </ul>




    </div>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper"

  export default {
        name: "contents",
        data(){
          return {
            items:[
              {id:0,
                title:'哈利·波特与被诅咒的孩子'
                ,comment:"哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！ "
                ,price:29.37,img:'https://i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757'},
              {id:1,
                title:'好吗好的'
                ,comment:"畅销作家大冰2016年新书！讲给你听，好吗好的！ "
                ,price:17.99,img:"https://i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14"},
            ],
            swiperOption:{
              // autoplay:{
              //   // 动画效果
              //   // stopOnLastSlide:false,
              //   // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
              //   disableOnInteraction:true,
              //   // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
              // },
              preventInteractionOnTransition : true,//滑动的时候不能切换
              direction:'horizontal',
              paginationClickable:true,
              pagination:{
                el:'.swiper-pagination',
                type:'bullets',//默认原点
                clickable:true//设置为true的时候就编程点击分页器切换轮播图
              },
              paginationHide:true,//这是一个函数加不加都可以
              navigation:{
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev",
              },
              preventClicks : true,//默认true
              // effect:"fade",//淡入淡出效果
            },

          }
        },
     components:{
       swiper,
       swiperSlide
     }
    }
</script>

<style scoped lang="scss">
  .class{
    padding: 10px auto;

    height: 52px;
    line-height: 52px;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
  }

    .contentbox{
      min-width: 1226px;
      max-width: 1226px;
      margin: 0 auto;
      background-color: #f5f5f5;
    }
  .contents{
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
      display: block;
      width: 296px;
      height: 374px;
      margin-bottom: 14px;
      padding-top: 45px;
      background-color: #fff;
      float: left;
    }
    .books{
      border-top: 1px solid #ffac13;
      width: 276px;
      color: #ffac13;
      text-align: center;
      line-height: 24px;
      font-size: 14px;
      .content-class{
        margin: 0 0px 18px 0px;

      }
      .swiper-container{

      }
      .swiper-container{
        background-color: #fff;
      }
      .swiper-button-next, .swiper-button-prev{
        background-size: 14px;
        background-color: rgba(0,0,0,.3);
        transition: all .5s ease-in-out;
      }
      .swiper-button-next{
        right:0;
      }
      .swiper-button-prev{
        left: 0;
      }
      .swiper-container{
        height: 332px;
        .swiper-button-next, .swiper-button-prev{
          opacity: 0;
          transition: all .5s ease-in-out;
        }
      }
      .swiper-container:hover{
        .swiper-button-next, .swiper-button-prev{
          opacity: 0.5;
          transition: all .5s ease-in-out;
        }
      }
      .swiper-container:hover{
        .swiper-button-next:hover, .swiper-button-prev:hover{
          opacity: 1;
        }
      }
      .title{
        width: 256px;
        font-weight: 400;
        color: #333;
        line-height: 1.25;
        line-height: 1.25;
        padding-bottom: 6px;
        margin: 0 auto;
      }
      .comment{color: #b0b0b0;font-size: 12px;line-height: 20px;text-align: center;
        width: 192px;
        margin: 0 auto;}
      .price{
        font-weight: 400;
        padding: 10px 0;
        width: 276px;
        height: 21px;
        margin: 0 10px 15px 10px;
        line-height: 1.5;
        color: #333;
        font-size: 14px;
      }
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
     z-index: 200;
    }

  }
</style>
