<template>
  <div class="app">
    <top></top>
    <div class="content">
      <div class="search">
        <input type="text" @focus="wfocus" @blur="wblur" :class="{active:life}" ref="result">
        <span @click="getmessage">搜索</span>
      </div>
      <result-unit :listobj="movie"></result-unit>
      <result-unit :listobj="book"></result-unit>
      <result-unit :listobj="music"></result-unit>
    </div>
  </div>
</template>

<script>
  import '../components/public/top'
  import resultUnit from  '../components/result/resultUnit'
  const getSearch = require('../apis/getSearch')
  const publicUrl = require('../constants/publicUrl')
  export default {
    name: "result",
    components:{
      "result-unit":resultUnit
    },
    data(){
      return {
        life:false,
        val:'',
        music:{},
        book:{},
        movie:{}
      }
    },
    methods:{
      getmessage(){
        getSearch((publicUrl.book+this.$refs.result.value), (data)=> {
          this.book = data;
          this.book.htitle="图书";
        });
        getSearch((publicUrl.music+this.$refs.result.value), (data)=> {
          this.music = data;
          this.music.htitle="音乐";

        });
        getSearch((publicUrl.movie+this.$refs.result.value), (data)=> {
          this.movie = data;
          this.movie.htitle="电影";
          console.log(this.movie,this.book, this.music);
        });
      },
      wfocus(){
        this.life = true;
        var that = this;
        document.onkeydown =  (ev) => {
          if (ev.keyCode === 13) {
            this.getmessage();
          }
        }
      },
      wblur(){
        if (!this.$refs.result.value){
          this.life = false;
        }
      },
      initData(){
        this.val = this.$route.params.val;
        this.$refs.result.value = this.val;
        if (this.$refs.result.value){
          this.life = true;
        }
        this.getmessage();
      }
    },
    mounted(){
      this.initData();
    }
  }
</script>

<style scoped lang="scss">
  .app{
    .content{
      padding-top:0.47rem;
      .search{
        display:-webkit-flex;
        -webkit-justify-content: center;
        -webkit-align-items: center;
        height:0.6rem;
        border-bottom:2px solid #f2f2f2;
        span{
          color:#42bd56;
          font-size:0.16rem;
          margin-left:0.12rem;
        }
        input{
          display:block;
          width:2.97rem;
          height:0.31rem;
          border:none;
          background:#f3f3f3 url(../assets/img/search_logo.png) center center no-repeat;
          background-size: 0.18rem;
          border-radius: 0.05rem;
        }
        .active{
          background:#f3f3f3;
        }
      }
      .searchcontent{
        padding:0.18rem 0.18rem 0;
        h3{
          line-height:0.38rem;
          font-size:0.14rem;
          color:#aaaaaa;
        }
        .searchcontentlist{
          ul{
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
                    background:url(../assets/img/movie-hx.png);
                    background-size:cover;
                  }
                  .fail{
                    width:0.1rem;
                    height:0.1rem;
                     background:url(../assets/img/movie-bx.png);
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
          }
        }
        .more{
          color:#42bd56;
          line-height:0.37rem;
          font-size:0.13rem;
          text-align:center;
          border-bottom:1px solid #f2f2f2;
        }
      }
    }
  }
</style>
