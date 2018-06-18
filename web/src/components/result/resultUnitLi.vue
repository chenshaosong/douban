<template>
  <li>
    <img :src="images" alt="">
    <div class="message">
      <p class="title">{{title}}</p>
      <p class="score">
        <span :class="{fail:star1}"></span>
        <span :class="{fail:star2}"></span>
        <span :class="{fail:star3}"></span>
        <span :class="{fail:star4}"></span>
        <span :class="{fail:star5}"></span>
        <b class="grade">{{average}}</b>
      </p>
    </div>
  </li>
</template>

<script>
    export default {
        name: "result-unit-li",
      props:["title","images","average"],
      data(){
        return {
          star1:true,
          star2:true,
          star3:true,
          star4:true,
          star5:true,
          changes:true,
          num:0
        }
      },
      methods:{
        xxchange(){
          this.num = this.average*10;
          if (this.num>0){
            this.star1 = false;
          }
          if (this.num>=20){
            this.star2 = false;
          }
          if (this.num>=40){
            this.star3 = false;
          }
          if (this.num>=60){
            this.star4 = false;
          }
          if (this.num>=80){
            this.star5 = false;
          }
          if (this.num == 0){
            this.changes = false;
          }
        }
      },
      mounted(){
        this.xxchange();
      }
    }
</script>

<style scoped lang="scss">
  li{
    display:-webkit-flex;
    border-bottom:1px solid #f2f2f2;
    padding-bottom:0.1rem;
    padding-top:0.1rem;
  img{
    width:0.4rem;
    height:0.58rem;
    margin-right:0.1rem;
  }
  .message{
  .title{
    font-size:0.12rem;
    line-height:0.18rem;
    color:#494949;
  }
  .score{
    display: -webkit-flex;
    -webkit-align-items: center;
    height:0.24rem;
  span{
    width:0.1rem;
    height:0.1rem;
    background:url(../../assets/img/movie-hx.png);
    background-size:cover;
  }
  .fail{
    width:0.1rem;
    height:0.1rem;
    background:url(../../assets/img/movie-bx.png);
    background-size:cover;
  }
  b{
    font-size:0.1rem;
    color:#aaaaaa;
    margin-left:0.08rem;
  }
  }
  }
  }
</style>
