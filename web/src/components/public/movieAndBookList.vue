<template>
  <div class="list">
    <h3>分类浏览</h3>
    <ul class="main">
      <li v-for="list in listitem">
        <p class="leftp"><a href="">{{list[0]}}</a><span></span></p>
        <p class="rightp"><a href="">{{list[1]}}</a><span></span></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue';
  let name = 'movie-and-book-list'
    export default Vue.component(name,{
      name: "movie-and-book-list",
      props:['listitem']
    })
</script>

<style scoped lang="scss">
  .list{
    h3{
      font-size:0.16rem;
      color:#111111;
      line-height:0.6rem;
      padding-left:0.04rem;
      border-bottom:1px solid #eeeeee;
    }
    .main{
      li{
        display:-webkit-flex;
        border-bottom:1px solid #eeeeee;
        p{
          -webkit-flex:1;
          display:-webkit-flex;
          -webkit-align-items: center;
          -webkit-justify-content: space-between;
          height:0.42rem;
          padding-right: 0.16rem;
          a{
            font-size:0.14rem;
            color:#42bd56;
          }
          span{
            border-right: solid 1px #ccc;
            border-bottom: solid 1px #ccc;
            width: .1rem;
            height: .1rem;
            transform: rotate(-45deg);
            color: #ccc;
          }
        }
        .leftp{
          border-right:1px solid #eeeeee;
        }
        .rightp{
          padding-left:0.18rem;
        }
      }
    }
  }
</style>
