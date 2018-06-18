<template>
    <header>
      <div class="logo">
        <h1 @click="gohome">豆瓣</h1>
      </div>
      <ul class="nav">
        <li class="movie"><router-link to="/movie">电影</router-link></li>
        <li class="book"><router-link to="/book">图书</router-link></li>
        <li class="radio"><router-link to="/radio">广播</router-link></li>
        <li class="team"><router-link to="/steam">小组</router-link></li>
        <li class="search"><router-link to="/search"><span></span></router-link></li>
      </ul>
    </header>
</template>

<script>
  import Vue from 'vue'
  let name = 'top';
  export default Vue.component(name,{
    name: name,
    methods:{
      gohome(){
        this.$router.push({path:'/'});
      }
    }
  })
</script>

<style scoped lang="scss">
  header{
    width:100%;
    display:-webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    height:0.46rem;
    border-bottom:1px solid #f3f3f3;
    position:fixed;
    background: #fff;
    .logo{
      h1{
        padding-left:0.18rem;
        font-size:0.24rem;
        color:#05b512;
      }
    }
    .nav{
      display:-webkit-flex;
      li{
        padding:0 0.11rem;
        a{
          font-size:0.14rem;
        }
      }
      .movie{
        a{
          color:#2384e8;
        }
      }
      .radio{
        a{
          color:#e4a813;
        }
      }
      .book{
        a{
          color:#9f7860;
        }
      }
      .team{
          a{
            color:#2ab8cc;
          }
        }
      .search{
        display:-webkit-flex;
        -webkit-justify-content: center;
        -webkit-align-items: center;
        a{
          span{
            background:url(../../assets/img/search.png);
            background-size:cover;
            width:0.27rem;
            height:0.18rem;
          }
        }
      }
    }
  }
</style>
