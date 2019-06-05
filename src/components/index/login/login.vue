<template>
   <div>
     <transition name="rule">
       <div class="deal-rule" v-show="this.$store.state.onOff">
         <!--v-show="onOff"-->
         <div class="deal">
           <span class="dealread">协议声明</span>
           <i class="dealicon iconfont icon-ziyuanldpi" @click="click"></i>
         </div>
         <div class="deal-class" ref="dealclass">

           <span   data-href="http://www.mi.com/about/user-agreement/" class="xiaomi">《小米商城用户协议》</span>、
           <span  data-href="https://static.account.xiaomi.com/html/agreement/account/cn.html" class="xiaomi">《账号协议》</span>、
           <span  data-href="https://www.mi.com/about/privacy/" class="xiaomi">《隐私政策》</span>、
           请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件
         </div>
         <div class="dela-content" ref="iframe">
           <div v-for="(item,i) in delaContent" :key="i" >
             <iframe class="show" :src="item"></iframe>
           </div>
         </div>
         <div class="decision">
             <button class="button-left" @click="click">不同意</button>
           <button class="button-right">同意</button>
         </div>
       </div>
     </transition>
     <!--黑色背景开关顶-->
     <transition
       @before-enter="beforeEnter"
       @enter="enter"
       @after-enter="afterEnter">
       <div class="model-backdrop" v-show="this.$store.state.onOff"></div>
     </transition>
   </div>
</template>

<script>
    export default {
        name: "login",
      data(){
        return {
          delaContent:['https://static.account.xiaomi.com/html/agreement/account/cn.html'
            ,'https://static.account.xiaomi.com/html/agreement/account/cn.html',
            'https://static.account.xiaomi.com/html/agreement/account/cn.html'],
        }
      },
      created(){

      },
      mounted(){
        this.getiframe()
      },
      methods:{

        beforeEnter(el){
          el.style.opacity=0
        },
        enter(el,done){
          el.offsetWidth//刷新动画
          el.style.opacity=0.5
          el.style.transition = 'all 0.3s linear'
          done()
        },
        afterEnter(el){},
        getiframe(){
          let span=this.$refs.dealclass.children
          let iframe=this.$refs.iframe
          // console.log(iframe.children[2].children[0]);
          // console.log(iframe);
          // var s=this.$refs.iframe.children[0].children[0]  [0].children[0]
          for (var i=0;i<span.length;i++){
            // console.log(s[i].children[0]);

            const index=i
            span[i].onclick=function () {
              for (var i=0;i<span.length;i++){
                iframe.children[i].children[0].style.display='none'
              }
              iframe.children[0].children[0].style.display='none'
              iframe.children[index].children[0].style.display='block'

              //   console.log(iframe.children[index]);

            }
          }
        },
        click(){
          this.$store.commit('getonOff',true)
        },
      }
    }
</script>

<style scoped lang="scss">
  /*开关灯*/
  .rule-enter,
  .rule-leave-to{
    transform: translateY(-765px);
    transition: all .3s ease-out;
  }
  .rule-enter-active{
    transition: all .5s ease-out;
  }
  .rule-leave-active{
    transition: all .2s ease-out;
  }

  .model-backdrop{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100%;
    height: 100%;
    background-color: #000;
  }
  .deal-rule{
    position: fixed;
    left: 50%;
    top: 200px;
    margin-left: -330px;
    min-width: 660px;
    max-width: 660px;
    background-color: #fff;
    z-index: 1050;
    /*协议声明*/
    .deal{
      width: 100%;
      height: 60px;
      background-color: #f5f5f5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .dealread{
        font-size: 18px;
        margin-left: 19px;

      }
      .dealicon{
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-right: 22px;
        text-align: center;
        line-height: 28px;
        justify-content: space-between;
        align-items: center;

      }
      .dealicon:hover{
        color: #fff;
        background-color: #e53935;
      }

    }
    .deal-class{

      height: 62px;
      font-size: 14px;
      margin-left: 40px;
      margin-top: 22px;
      margin-right: 40px;

      span{
        cursor: pointer;
      }
    }
    .dela-content{
      width: 100%;
      height: 340px;
      border-bottom: 1px solid #E1E1E2;
      overflow: hidden;
      iframe{
        width: 600px;
        height: 320px;
        margin-left: 30px;
        border-width: 0;
        padding-bottom: 20px;
      }
    }
    .decision{
      width: 100%;
      height:80px;
      background-color: #f5f5f5;
      display: flex;
      /*justify-content: space-between;*/
      justify-content: center;
      align-items: center;
      button{
        width: 160px;
        height: 40px;

      }
       .button-right{
         color: #fff;
         background-color: #FF6600;
         border: 1px solid  #FF6600;
         transition: all 0.8s ease;
         margin-left: 18px;
       }
      .button-right:hover{
        border-color: #f25807;
        background-color: #f25807;


      }
      .button-left{
        color: #767373;
        background-color: #fff;
        border: 1px solid  #b0b0b0;
        transition: all 0.4s ease;
      }
      .button-left:hover{
        color: #fff;
        background-color:#757575;
      }
    }
  }


</style>
