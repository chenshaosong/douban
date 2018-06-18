<template>
  <div class="list">
    <p class="sometop">豆瓣转播 <i class="iconfont icon-shuaxin-"></i></p>
    <div class="pinformation">
      <div class="portrait">
        <img :src="objdata.header" alt="">
      </div>
      <div class="pnote">
        <h3>{{objdata.username}} <span>说：</span></h3>
        <div class="date">
          {{objdata.passtime}}
        </div>
        <div class="detail">
          <h4>{{objdata.text}}</span></h4>
          <div class="detailtextdetail">
            <img :src="objdata.thumbnail" alt="">
          </div>
        </div>
        <div class="iconmess">
          <ul>
            <li><i class="iconfont icon-zan">{{objdata.down}}</i></li>
            <li><i class="iconfont icon-xinxi">{{objdata.comment}}</i></li>
            <li><i class="iconfont icon-shuaxin-">{{objdata.forward}}</i></li>
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
    name: "radio-content-list1",
    props:['objdata']
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
            max-height: 3rem;
            overflow: hidden;
            img{
              width:100%;
            }
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
