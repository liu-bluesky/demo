<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'App',
  data(){
    return {
        off:this.$store.state.onOff
    }
  },
  methods:{
    click(){
      this.$store.commit('getonOff',this.off)
    },

  },

}
</script>

<style lang="scss">
@import url('css/base.css');
@import "fonts/font_heljz6cukj/iconfont.css";
@import "../node_modules/swiper/dist/css/swiper.min.css";
</style>
