<template>
  <div class="unit">
    <div class="title">
      <h3>最受关注的图书 | {{title}}类</h3>
      <span>更多</span>
    </div>
    <div class="main">
      <book-unit-list v-for="(obj,index) in bookobj" :title="obj.title" :images="obj.images.small" :average="obj.rating.average" :key="index" ></book-unit-list>
    </div>
  </div>
</template>

<script>
  import bookUnitList from './bookUnitList'
  export default {
    name: "book-unit",
    components:{
      'book-unit-list':bookUnitList
    },
    props:['title',"bookobj"]
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
