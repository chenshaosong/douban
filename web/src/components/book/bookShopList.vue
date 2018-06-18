<template>
  <div class="list">
    <img :src="images" alt="">
    <p class="title">{{title}}</p>
    <div class="scoreh">
      ￥{{price}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "book-shop-list",
      props:['price',"title","images"]
    }
</script>

<style scoped lang="scss">
  .list{
    width:1rem;
    padding:0.06rem 0 0.12rem;
    margin-right:0.08rem;
  img{
    width:1rem;
    height:1.3rem;
  }
  .title{
    font-size:0.14rem;
    color:#111111;
    line-height:0.32rem;
    text-align:center;
  }
  .score{
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
  .xingxing{
    display: -webkit-flex;
  span{
    width:0.1rem;
    height:0.1rem;
    background:url(../../assets/img/movie-hx.png);
    background-size:cover;
  }
  .fail{
    background:url(../../assets/img/movie-bx.png);
  }
  }
  .grade{
    color:#bcaab1;
    font-size:0.09rem;
  }
  }
  .scoreh{
    font-size:0.14rem;
    text-align:center;
    color:#aaaaaa;
  }
  }
</style>
