<template>
  <div class="shop">
    <div class="title">
      <h3>豆瓣书店</h3>
      <span>更多</span>
    </div>
    <div class="main">
      <a href="javascript:;"><img src="https://img3.doubanio.com/view/freyr_page_photo/raw/public/2824.jpg" alt=""></a>
      <div class="content">
        <h3><p>玛赞·莎塔碧漫画小说套装</p><span>￥89</span></h3>
        <p class="text">“我在伊朗长大”以后，天才女艺术家最新漫画小说套装来袭</p>
      </div>
    </div>
    <div class="shoplist">
      <book-shop-list :key="index" v-for="(obj,index) in shopbook" :title="obj.title" :images="obj.images.small" :price="obj.price"></book-shop-list>
    </div>
  </div>
</template>

<script>
  import bookShopList from './bookShopList'
    export default {
        name: "book-shop",
      components:{
          'book-shop-list':bookShopList
      },
      props:["shopbook"]
    }
</script>

<style scoped lang="scss">
  .shop {
    .title {
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: space-between;
      height: 0.44rem;
      h3 {
        font-size: 0.16rem;
        color: #111111;
      }
      span {
        color: #42bd56;
        font-size: 0.14rem;
        padding-right: 0.11rem;
      }
    }
    .main{
      display: -webkit-flex;
      a{
        img{
            width:1rem;
            height:1.3rem;
        }
      }
      .content{
        padding:0 0.2rem;
        h3{
          display: -webkit-flex;
          -webkit-justify-content: space-between;
          -webkit-align-items: center;
          height:0.3rem;
          font-size:0.16rem;
          color:#e76648;
          p{
            width:1.7rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size:0.16rem;
            color:#494949;
          }
          span{
            font-size:0.16rem;
            color:#e76648;
          }
        }
        .text{
          color:#9b9b9b;
          font-size:0.14rem;
          line-height:0.2rem;
        }
      }
    }
    .shoplist{
      margin-top:0.1rem;
      display: -webkit-flex;
      overflow-x: scrolL;
      -webkit-flex-shrink:0 ;
    }
  }
</style>
