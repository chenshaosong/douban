<template>
    <div class="list">
      <img :src="images" alt="">
      <p class="title">{{title}}</p>
      <div class="score" v-if="changes">
        <p class="xingxing">
          <span :class="{fail:star1}"></span>
          <span :class="{fail:star2}"></span>
          <span :class="{fail:star3}"></span>
          <span :class="{fail:star4}"></span>
          <span :class="{fail:star5}"></span>
          <span class="fail"></span>
        </p>
        <span class="grade">{{average}}</span>
      </div>
      <div class="scoreh" v-else>
        暂无评分
      </div>
    </div>
</template>

<script>
    export default {
        name: "book-unit-list",
      props:['title','images','average'],
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
          if (this.num>=0){
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
.list{
  width:1rem;
  padding:0.06rem 0 0.12rem;
  margin-right:0.08rem;
  img{
    width:1rem;
    height:1.43rem;
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
    /*display: none;*/
  }
}
</style>
