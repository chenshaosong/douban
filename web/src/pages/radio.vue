<template>
  <div class="app">
    <top></top>
  <div class="radio">
      <radio-unit :radioobj="radiodatas"></radio-unit>
    <div class="more">
      <a href="javascript:;">显示更多广播</a>
    </div>
  </div>
    <foot></foot>
  </div>
</template>

<script>
  import radioUnit from '../components/radio/radioUnit'
  import '../components/public/top'
  import '../components/public/footer'
  let getData = require('../apis/getData');
  const StaticUrl = require("../constants/publicUrl");
  export default {
        name: "radio",
    data(){
      return {
        radiodatas:{}
      }
    },
      components:{
          "radio-unit":radioUnit
      },
    methods:{
      radiodata(){
        getData(StaticUrl.radio,data =>{
          console.log(data);
          this.radiodatas = data;
        } )
      }
    },
    mounted(){
          this.radiodata();
    }
    }
</script>

<style scoped lang="scss">
  .app {
    .radio {
      padding-left:0.15rem;
      padding-top:0.47rem;
      .more {
        width: 100%;
        padding-top: 0.32rem;
        text-align: center;
        a {
          color: #42bd56;
          font-size: 0.15rem;
        }
      }
    }
  }
</style>
