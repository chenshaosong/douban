<template>
  <div class="detail">
    <top></top>
    <div class="content">
      <div class="currentmovie" v-if="loading">
        <div class="moviedetail">
          <h3>{{detailobj.title}}</h3>
          <div class="xxing">
            <span :class="{fail:star1}"></span>
            <span :class="{fail:star2}"></span>
            <span :class="{fail:star3}"></span>
            <span :class="{fail:star4}"></span>
            <span :class="{fail:star5}"></span>
            <b>{{detailobj.rating.average}}</b>
            <p>{{detailobj.comments_count}}人评价</p>
          </div>
          <div class="detailmessage">
            <span>{{detailobj.year}}年，</span><span v-for="genre in detailobj.genres">{{genre}}/</span><span v-for="director in detailobj.directors">{{director.name}}(导演)/</span> <span v-for="cast in detailobj.casts">{{cast.name}}/</span><span v-for="country in detailobj.countries">/{{country}}</span>
          </div>
        </div>
        <div class="detailimg">
          <img :src="detailobj.images.small" alt="">
        </div>
      </div>
      <div class="channel">
        <h3>所属频道</h3>
        <div class="channel_list">
          <a href="javascript:;" v-for="genre in detailobj.genres">{{genre}}</a>
        </div>
      </div>
      <div class="introduce">
        <h3>剧情介绍</h3>
        <p @click="moretext" :class="{active:morelife}">{{detailobj.summary}}</p>
      </div>
      <div class="peopleall">
        <h3>影人</h3>
        <ul class="people">
          <li v-for="director in detailobj.directors">
            <img :src="director.avatars.large" alt="">
            <p>{{director.name}}</p>
            <span>导演</span>
          </li>
          <li v-for="cast in detailobj.casts">
            <img :src="cast.avatars.small" alt="">
            <p>{{cast.name}}</p>
            <span>演员</span>
          </li>
        </ul>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import '../components/public/top'
  import '../components/public/footer'
  const getDetail = require('../apis/getDetail');
  const StaticUrl = require('../constants/publicUrl');
    export default {
        name: "detail",
      data(){
          return {
            cid:0,
            detailobj:{},
            star1:true,
            star2:true,
            star3:true,
            star4:true,
            star5:true,
            num:0,
            averages:0,
            morelife:false,
            loading:false
          }
      },
      methods:{
        moretext(){
          this.morelife = !this.morelife;
        },
        xxchange(){
          console.log(this.averages);
          this.num = this.averages*10;
          if (this.num>=0){
            this.star1 = false;
          }
          if (this.num>=20){
            this.star2 = false;
          }
          if (this.num>=40){
            this.star3 = false;
          }
          if (this.num>=60){
            this.star4 = false;
          }
          if (this.num>=80){
            this.star5 = false;
          }
        },
        getMwssage(){
          this.cid = this.$route.params.mid;
          let that = this;
          this.loading=false;
          getDetail(StaticUrl.detailmovie+this.cid, function (data) {
            console.log(data);
            that.loading=true;
            that.detailobj = data;
            that.averages = data.rating.average;
            that.xxchange();
          });
        }
      },
      mounted(){
        this.getMwssage();
      }
    }
</script>

<style scoped lang="scss">
  .detail{
    .content{
      padding-left:0.15rem;
      padding-top:0.47rem;
      .currentmovie{
        display:-webkit-flex;
        padding-right:0.18rem;
        .moviedetail{
          padding-top:0.26rem;
          padding-right:0.28rem;
          h3{
            font-size:0.22rem;
            color:#111111;
            line-height:0.36rem;
          }
          .xxing{
            display: -webkit-flex;
            -webkit-align-items: center;
            height:0.38rem;
            span{
              width:0.1rem;
              height:0.1rem;
              background:url(../assets/img/movie-hx.png);
              background-size:cover;
            }
            b{
              font-size:0.12rem;
              color:#494949;
              margin-left:0.02rem;
            }
            .fail{
              width:0.1rem;
              height:0.1rem;
              background:url(../assets/img/movie-bx.png);
              background-size:cover;
            }
            p{
              color:#aaaabc;
              font-size:0.12rem;
              margin-left:0.04rem;
            }
          }
          .detailmessage{
            font-size:0.12rem;
            color:#494949;
            line-height:0.22rem;
            display:-webkit-flex;
            -webkit-flex-wrap: wrap;
            span{

            }
          }
        }
        .detailimg{
          padding-top:0.66rem;
          img{
            width:1rem;
            height:1.5rem;
          }
        }
      }
      .channel{
        padding-bottom:0.2rem;
        h3{
          font-size:0.14rem;
          color:#aaaaaa;
          line-height: 0.3rem;
        }
        .channel_list{
          display:-webkit-flex;
          a{
            width:0.62rem;
            line-height:0.28rem;
            text-align:center;
            color:#42bd56;
            font-size:0.12rem;
            border:1px solid #42bd56;
            border-radius:0.28rem;
            margin:0.05rem 0;
            margin-right:0.1rem;
          }
        }
      }
      .introduce{
        padding-bottom:0.2rem;
        h3{
          font-size:0.14rem;
          color:#aaaaaa;
          line-height: 0.5rem;
        }
        p{
          font-size:0.14rem;
          line-height:0.22rem;
          color:#494949;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
          -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
          -webkit-line-clamp: 3; /** 显示的行数 **/
          overflow: hidden;  /** 隐藏超出的内容 **/
        }
        .active{
          -webkit-line-clamp: 100; /** 显示的行数 **/
        }
      }
      .peopleall{
        h3{
          font-size:0.14rem;
          color:#aaaaaa;
          line-height: 0.5rem;
        }
        .people{
          display: -webkit-flex;
          -webkit-flex-shrink: 0;
          overflow-x: auto;
          li{
            width:0.75rem;
            margin-right:0.08rem;
            img{
              width:0.75rem;
              height:1.07rem;
            }
            p{
              padding-top:0.1rem;
              line-height: 0.21rem;
              color:#494949;
              font-size:0.14rem;
              text-align:center;
            }
            span{
              font-size:0.14rem;
              color:#aaaaaa;
              padding-top:0.14rem;
              text-align:center;
            }
          }
        }
      }
    }
  }
</style>
