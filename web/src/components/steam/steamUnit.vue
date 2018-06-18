<template>
  <div class="steamlist">
    <h3>{{resultobj.steam}}</h3>
    <ul class="itemlist">
      <li v-for="obj in resultobj.child">
        <div class="message">
          <img :src="obj.image" alt="">
          <p class="title">{{obj.title}}</p>
          <span class="num">{{obj.num}}人</span>
        </div>
        <div class="introduce">
          {{obj.detail}}
        </div>
      </li>
    </ul>
    <div class="moresteam">
      更多相关小组
    </div>
  </div>
</template>

<script>
    export default {
        name: "steam-unit",
      props:[
        "resultobj"
      ]
    }
</script>

<style scoped lang="scss">
.steamlist{
  h3{
    line-height:0.5rem;
    color:#111111;
    font-size:0.18rem;
  }
  .itemlist{
    li{
      border-bottom:1px solid #f4f4f4;
      margin-top:0.14rem;
      .message{
        display:-webkit-flex;
        -webkit-align-items: center;
        img{
          width:0.4rem;
          height:0.4rem;
          border:1px solid #f3f3f3;
        }
        .title{
          margin-left:0.1rem;
          -webkit-flex: 1;
          font-size:0.18rem;
          color:#111111;
        }
        .num{
          font-size:0.14rem;
          color:#cccccc;
          padding-right:0.18rem;
        }
      }
      .introduce{
        font-size:0.13rem;
        color:#aaaaaa;
        line-height:0.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width:100%;
      }
    }
  }
  .moresteam{
    font-size:0.14rem;
    color:#42bd56;
    line-height:0.4rem;
    text-align:center;
    border-bottom:1px solid #f4f4f4;
  }
}
</style>
