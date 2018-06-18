<template>
  <div class="app">
    <top></top>
  <div class="content">
    <movie-unit :objdata="obj" v-for="(obj,index) in alldata" :title="obj.title" :key="index"></movie-unit>
    <movie-and-book-find :findlist="movies" :findcolor="color"></movie-and-book-find>
    <movie-and-book-list :listitem="item"></movie-and-book-list>
  </div>
    <foot></foot>
  </div>
</template>

<script>
  import movieUnit from '../components/movie/movieUnit'
  import '../components/public/movieAndBookFind'
  import '../components/public/movieAndBookList'
  import '../components/public/top'
  import '../components/public/footer'
  var getData = require('../apis/getData');
  var getMock = require('../apis/getMock');
  const StaticUrl = require("../constants/publicUrl");
    export default {
        name: "movie",
      data(){
          return{
            alldata:[],
            dataobj:{},
            future:{},
            free:{},
            color:{},
            movies:{},
            item:[]
          }
      },
      components:{
        'movie-unit':movieUnit
      },
      methods:{
          mockdata(){
            getMock(data =>{
              this.color = JSON.parse(data).color;
              this.movies = JSON.parse(data).movie;
              this.item=JSON.parse(data).movie.item;
            } )
          },
          newmovie(){
            getData(StaticUrl.nowmovie, (data)=> {
              this.dataobj = data;
              this.alldata.push(this.dataobj);
            });
          },
        futuremovie(){
            getData(StaticUrl.futuremovie,data =>{
              this.future = data;
              this.alldata.push(this.future);
            })
        },
        freemovie(){
          getData(StaticUrl.newmovie,data =>{
            this.free = data;
            this.alldata.push(this.free);
          })
        }
      },
      created(){
          this.newmovie();
          this.futuremovie();
          this.freemovie();
          this.mockdata();
      }
    }
</script>

<style scoped lang="scss">
  .app{
    .content{
      padding-left:0.15rem;
      padding-top:0.47rem;
    }
  }
</style>
