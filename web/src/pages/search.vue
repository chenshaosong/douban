<template>
<div class="app">
  <div class="search">
    <span @click="back">关闭</span>
    <input type="text" @focus="wfocus" @blur="wblur" :class="{active:life}" ref="search">
  </div>
  <ul class="item">
    <li>
    <a href="javascript:;">
      <p>电影</p>
      <span>影院热映</span>
    </a>
    <a href="javascript:;">
      <p style="color:#7a6adb">电视</p>
      <span>正在热播</span>
    </a>
    <a href="javascript:;">
      <p style="color:#b77860">图书</p>
      <span>畅销排行</span>
    </a>
  </li>
    <li>
      <a href="javascript:;">
        <p style="color:#e74692">同城</p>
        <span>周末活动</span>
      </a>
      <a href="javascript:;">
        <p style="color:#2ab8cc">小组</p>
        <span>志趣相投</span>
      </a>
      <a href="javascript:;">
        <p style="color:#f48f2e">音乐</p>
        <span>新碟榜</span>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <p style="color:#9f7860">阅读</p>
        <span>电子书</span>
      </a>
      <a href="javascript:;">
        <p style="color:#5774c5">游戏</p>
        <span>虚拟世界</span>
      </a>
      <a href="javascript:;">
        <p style="color:#596cdd">应用</p>
        <span>玩手机</span>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <p style="color:#e87c4d">广播</p>
        <span>友邻动态</span>
      </a>
      <a href="javascript:;">
        <p style="color:#40cfa9">FM</p>
        <span>红心歌单</span>
      </a>
      <a href="javascript:;">
        <p style="color:#42bd56">市集</p>
        <span>购买原创</span>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "search",
      data(){
          return {
            life:false,
            val:''
          }
      },
      methods:{

          back(){
            this.$router.go(-1);
          },
          wfocus(){
            this.life = true;
            var that = this;
            document.onkeydown = function (ev) {
              if (ev.keyCode === 13){
                that.$router.push({ name: 'Result', params: { val: that.$refs.search.value }})
              }
            }
          },
        wblur(){
            if (!this.$refs.search.value){
              this.life = false;
            }
        }
      }
    }
</script>

<style scoped lang="scss">
.app{
  .search{
    display:-webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    height:0.6rem;
    border-bottom:1px solid #f3f3f3;
    span{
      color:#42bd56;
      font-size:0.16rem;
      margin-right:0.12rem;
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
  .item{
    padding:0.15rem 0;
    li{
      display:-webkit-flex;
      padding:0.15rem 0;
      a{
        -webkit-flex: 1;
        text-align: center;
        p{
          font-size:0.22rem;
          color:#2384e8;
          line-height:0.24rem;
        }
        span{
          font-size:0.12rem;
          color:#999999;
          line-height:0.14rem;
        }
      }
    }
  }
}
</style>
