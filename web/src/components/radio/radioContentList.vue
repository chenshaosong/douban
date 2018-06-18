<template>
<div class="list">
  <p class="sometop">豆瓣转播 <i class="iconfont icon-shuaxin-"></i></p>
  <div class="pinformation">
    <div class="portrait">
      <img src="https://img3.doubanio.com/icon/up95805238-16.jpg" alt="">
    </div>
    <div class="pnote">
      <h3>豆瓣 <span>写了日记</span></h3>
      <div class="date">
        2018-02-11 12:10:11
      </div>
      <div class="detail">
        <h4>5月24日凌晨3:00～6:00豆瓣停机维护</h4>
        <p class="detailtextdetail">因业务发展需要，豆瓣计划于5月24日(星期四)凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关...</p>
      </div>
      <div class="iconmess">
        <ul>
          <li><i class="iconfont icon-zan">30</i></li>
          <li><i class="iconfont icon-xinxi">15</i></li>
          <li><i class="iconfont icon-shuaxin-">26</i></li>
        </ul>
        <ul class="right">
          <li><i class="iconfont icon-shixincaidan"></i></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "radio-content-list"
    }
</script>

<style scoped lang="scss">
.list{
  .sometop{
    font-size:0.12rem;
    color:#cccccc;
    line-height:0.32rem;
    .iconfont{
      font-size:0.18rem;
      color:#cccccc;
      vertical-align: middle;
    }
  }
  .pinformation{
    display: -webkit-flex;
    .portrait{
      margin-right:0.1rem;
      width:0.4rem;
      img{
        width:0.4rem;
        height:0.4rem;
        border-radius:50%;
      }
    }
    .pnote{
      -webkit-flex: 1;
      border-bottom:1px solid #f4f4f4;
      h3{
        color:#494949;
        font-size:0.16rem;
        letter-spacing: 0.03rem;
        display:-webkit-flex;
        span{
          color:#aaaaaa;
        }
      }
      .date{
        font-size:0.1rem;
        color:#aaaaaa;
        line-height:0.32rem;
      }
      .detail{
        padding:0.14rem;
        background:#f9f9f9;
        margin-top:0.05rem;
        h4{
          font-size:0.16rem;
          color:#494949;
          line-height:0.22rem;
          span{
            color:#42bd56;
          }
        }
        .detailtextdetail{
          margin-top:0.05rem;
          line-height:0.16rem;
          color:#aaaaaa;
          font-size:0.12rem;
        }
      }
      .iconmess{
        display:-webkit-flex;
        -webkit-justify-content: space-between;
        -webkit-align-items: center;
        height:0.6rem;
        ul{
          display:-webkit-flex;
          -webkit-justify-content: space-around;
          li{
            width:0.6rem;
            font-size:0.14rem;
            color:#cccccc;
            .iconfont{
              display: block;
              font-size:0.14rem;
              color:#cccccc;
            }
          }
        }
        .right{
          li{
            text-align:right;
          }
        }
      }
    }
  }
}
</style>
