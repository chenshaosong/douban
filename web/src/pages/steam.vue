<template>
  <div class="app">
    <top></top>
<div class="steam">
  <steam-unit v-for="(obj,index) in steamobj" :key="index" :resultobj="obj"></steam-unit>
</div>
  <foot></foot>
  </div>
</template>

<script>
  import steamUnit from '../components/steam/steamUnit'
  import '../components/public/top'
  import '../components/public/footer'
  var getsteam = require('../apis/getsteam');
    export default {
        name: "steam",
      components:{
        "steam-unit":steamUnit
      },
      data(){
          return{
            steamobj:[]
          }
      },
      methods:{
        steamdata(){
          getsteam(data =>{
            this.steamobj = JSON.parse(data);
          } )
        },
      },
      mounted(){
          this.steamdata();
      }
    }
</script>

<style scoped lang="scss">
  .app{
    .steam{
      padding-left:0.15rem;
      padding-top:0.47rem;
    }
  }
</style>
