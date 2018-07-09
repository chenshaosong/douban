<template>
  <div class="commen">
    <div class="header">
      <div class="header_body">
        <div class="people"><i class="iconfont icon-yonghu-tianchong"></i> <span>用户</span></div>
        <h1>豆瓣APP&nbsp;后台管理</h1>
      </div>
    </div>
    <div class="nav">
      <ul class="nav_bd">
        <li :class="{active:num == 0}" @click="change(0)">
          <router-link to="/index"><i class="iconfont icon-panel"></i> <p>第一个</p></router-link>
          <span></span>
        </li>
        <li :class="{active:num == 1}" @click="change(1)">
          <router-link to="/tables"><i class="iconfont icon-caidan"></i> <p>tables</p></router-link>
          <span></span>
        </li>
        <li :class="{active:num == 2}" @click="change(2)">
          <router-link to="/charts"><i class="iconfont icon-tubiaoqiehuan"></i> <p>charts</p></router-link>
          <span></span>
        </li>
        <li :class="{active:num == 3}" @click="change(3)">
          <router-link to="/icons"><i class="iconfont icon-icon8"></i> <p>icons</p></router-link>
          <span></span>
        </li>
        <li :class="{active:num == 4 }" @click="change(4)">
          <router-link to=""><i class="iconfont icon-7"></i> <p>第一个</p></router-link>
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "commen",
      computed:{
          num(){
            //数据从sessionStorage中拿到
            return this.$store.getters.changeComNum
          }
      },
      methods:{
        change(index){
          console.log(index);
          this.$store.commit('comChange',index);
        }
      }
    }
</script>

<style scoped lang="scss">
.commen{
  width:100%;
  .header{
    width:100%;
    background:#00ba8b;
    border-bottom:1px solid #00a87d;
    .header_body{
      max-width:1170px;
      margin:0 auto;
      line-height:54px;
      h1{
        font-size:19px;
        color:#fff;
      }
      .people{
        float:right;
        color:#fff;
        font-size:12px;
        margin-right:30px;
        .iconfont{
          font-size:12px;
        }
      }
    }
  }
  .nav{
    width:100%;
    background:#fff;
    border-bottom:1px solid #d6d6d6;
    .nav_bd{
      max-width:1170px;
      margin:0 auto;
      height: 63px;
      li{
        float:left;
        text-align:center;
        border-left:1px solid #d6d6d6;
        position:relative;
        a{
          display:inline-block;
          padding:10px 0px;
          width:94px;
          font-size:12px;
          color:#b2afaa;
          .iconfont{
            font-size:20px;
            color:#b2afaa;
          }
          p{
            margin-top:4px;
          }
        }
        span{
          position:absolute;
          left:0px;
          bottom:-3px;
          height:3px;
          width:100%;
          background:#ff7f74;
          display:none;
        }
      }
      .active{
        color:#383838;
        a{
          color:#383838;
          .iconfont{
            color:#383838;
          }
        }
        span{
          background:#ff7f74;
          display:block;
        }
      }
    }
  }
}
</style>
