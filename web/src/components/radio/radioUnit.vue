<template>
<div class="main">
  <div class="people">
    <div class="peome">
      <img src="../../assets/img/people.jpg" alt="">
      <p>登录发送广播</p>
    </div>
    <div class="iconme">
      <a href="javascript:;"><i class="iconfont icon-bianji"></i></a>
      <a href="javascript:;"><i class="iconfont icon-camera1"></i></a>
    </div>
  </div>
  <div class="content">
    <radio-content-list></radio-content-list>
    <radio-content-list1 :objdata="obj" v-for="(obj,index) in radioobj.data" :key="index"></radio-content-list1>
  </div>
</div>
</template>

<script>
  import radioContentList from './radioContentList'
  import radioContentList1 from './radioContentList1'
    export default {
        name: "radio-unit",
      props:['radioobj'],
      components:{
        "radio-content-list1":radioContentList1,
        "radio-content-list":radioContentList
      }

    }
</script>

<style scoped lang="scss">
  .main{
    padding:0 0.18rem 0 0;
    .people{
      display: -webkit-flex;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      height:0.6rem;
      border-bottom: 1px solid #f4f4f4;
      .peome{
        display: -webkit-flex;
        -webkit-align-items: center;
        img{
          width:0.4rem;
          height:0.4rem;
          border-radius:50%;
          margin-right:0.2rem;
        }
        p{
          font-size:0.14rem;
          color:#aaaaaa;
        }
      }
      .iconme{
        display: -webkit-flex;
        -webkit-align-items: center;
        a{
          padding:0 0.13rem;
          .iconfont{
            display:block;
            color:#cbcbcb;
            font-size:0.2rem;
          }
        }
      }
    }
  }
</style>
