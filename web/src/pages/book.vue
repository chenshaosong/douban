<template>
  <div class="app">
    <top></top>
    <div class="content">
      <book-unit :key="index" v-for="(obj,index) in alldata" :title="obj.title" :bookobj="obj.books"></book-unit>
      <book-shop :shopbook="free.books"></book-shop>
      <movie-and-book-find :findlist="book" :findcolor="color"></movie-and-book-find>
      <movie-and-book-list :listitem="item"></movie-and-book-list>
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import bookUnit from '../components/book/bookUnit'
  import bookShop from '../components/book/bookShop'
  import '../components/public/movieAndBookFind'
  import '../components/public/movieAndBookList'
  import '../components/public/top'
  import '../components/public/footer'
  var getMock = require('../apis/getMock');
  var getData = require('../apis/getData');
  const StaticUrl = require("../constants/publicUrl");
    export default {
        name: "book",
      components: {
        'book-unit': bookUnit,
        'book-shop':bookShop
      },
      data(){
        return{
          alldata:[],
          dataobj:{},
          future:{},
          free:{},
          color:{},
          book:{},
          item:[]
        }
      },
    methods:{
      mockdata(){
        getMock(data =>{
          this.color = JSON.parse(data).color;
          this.book = JSON.parse(data).book;
          console.log(this.findandlist );
          this.item=JSON.parse(data).book.item;
        } )
      },
    xuhuanbook(){
      getData(StaticUrl.xugoubook, (data)=> {
        this.dataobj = data;
        this.dataobj.title = "小说";
        console.log("xu",data);
        this.alldata.push(this.dataobj);
      });
    },
    buxubook(){
      getData(StaticUrl.noxubook,data =>{
        this.future = data;
        this.future.title = "历史";
        console.log("no",data);
        this.alldata.push(this.future);
      })
    },
    shopbook(){
      getData(StaticUrl.shopbook,data =>{
        this.free = data;
        console.log("shop",data);
      })
    }
  },
      mounted(){
          this.buxubook();
          this.shopbook();
          this.xuhuanbook();
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
