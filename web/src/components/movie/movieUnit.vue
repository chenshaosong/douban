<template>
    <div class="unit">
      <div class="title">
        <h3>{{title}}</h3>
        <span>更多</span>
      </div>
      <div class="main">
        <movie-unit-list :key="index" v-for="(obj,index) in objdata.subjects" :aid="obj.id" :title="obj.title" :average="obj.rating.average" :images="obj.images.small"></movie-unit-list>
      </div>
    </div>
</template>

<script>
  import movieUnitList from './movieUnitList'
    export default {
    props:['objdata','title'],
      name: "movie-unit",
      components:{
        'movie-unit-list':movieUnitList
      }
    }
</script>

<style scoped lang="scss">
  .unit{
    .title{
      display:-webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: space-between;
      height:0.44rem;
      h3{
        font-size:0.16rem;
        color:#111111;
      }
      span{
        color:#42bd56;
        font-size:0.14rem;
        padding-right:0.11rem;
      }
    }
    .main{
      display: -webkit-flex;
      overflow-x: scrolL;
      -webkit-flex-shrink:0 ;
    }
  }
</style>
