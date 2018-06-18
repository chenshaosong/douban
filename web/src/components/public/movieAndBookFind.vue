<template>
  <div class="find">
    <h3>发现好电影</h3>
    <div class="main">
      <ul class="top same">
        <li v-for="(obj,index) in findlist.data1" :style="{'color':findcolor[index],'border-color':findcolor[index]}">{{obj}}</li>
      </ul>
      <ul class="bottom same">
        <li v-for="(obj,index) in findlist.data2" :style="{'color':findcolor[index+3],'border-color':findcolor[index+3]}">{{obj}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  let name = 'movie-and-book-find'
  export default Vue.component(name,{
    name: "movie-and-book-find",
    props:['findlist',"findcolor"],
    methods:{
    }
  })
</script>

<style scoped lang="scss">
  .find {
    h3 {
      font-size: 0.16rem;
      color: #111111;
      line-height: 0.6rem;
      padding-left: 0.04rem;
    }
    .main{
      .same{
        display: -webkit-flex;
        overflow-x: scrolL;
        -webkit-flex-shrink:0 ;
        margin-bottom:0.09rem;
        li{
          padding:0.16rem 0.26rem;
          font-size:0.14rem;
          margin-right:0.08rem;
          border:1px solid #ccc;
          border-radius:0.05rem;
          white-space: nowrap;
        }
      }
    }
  }
</style>
