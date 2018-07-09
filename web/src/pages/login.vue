<template>
<div class="login">
  <div class="top">
    <p>登录豆瓣</p>
  </div>
  <div class="content">
    <el-input
      class="inputsame"
      placeholder="邮箱/手机号/用户名"
      v-model="username"
      clearable>
    </el-input>
    <el-input
      class="inputsame"
      placeholder="密码"
      suffix-icon="el-icon-view"
      v-model="password">
    </el-input>
    <el-button type="success" class="inputsame logbutton" @click="loginnow">登录</el-button>
  </div>
  <div class="aside">
    <p><a href="javascript:;">使用其他方式登录</a>&<a href="javascript:;">找回密码</a></p>
  </div>
  <div class="foot">
    <a href="javascript:;">注册豆瓣账号</a>
  </div>
</div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return {
            username:'',
            password:''
          }
      },
      methods:{
        loginnow(){
          let nowname =  localStorage.getItem('username');
          let nowpassword = localStorage.getItem('password');
          localStorage.clear();
          if (!nowname || !nowpassword){
            if (!this.username || !this.password){
              alert('用户名或者密码为空！');
              return
            }
            localStorage.setItem('username',true);
            this.$router.push({name:"Movie"})
          }
        },
        __initnow(){
          if (localStorage.getItem('username')){
            this.$router.push({name:"Movie"})
          }
        }
      },
      mounted(){
          this.__initnow();
      }
    }
</script>

<style scoped lang="scss">
.login{
  width:100%;
  .top{
    width:100%;
    position:relative;
    border-bottom:1px solid #f5f5f5;
    span{
      position:absolute;
      left:0.19rem;
      top:0.15rem;
      font-size:0.14rem;
      color:#42bd56;
    }
    p{
      line-height:0.45rem;
      text-align:center;
      font-size:0.16rem;
      color:#000;
    }
  }
  .content{
    padding:0.25rem 0.15rem 0;
    .inputsame{
      display:block;
      margin-bottom:0.05rem;
    }
    .logbutton{
      margin-top:0.1rem;
      width:100%;
    }
  }
  .aside{
    p{
      font-size:0.14rem;
      color:#aaaaaa;
      display:-webkit-flex;
      -webkit-justify-content: center;
      -webkit-align-items: center;
      height:0.3rem;
      a{
        font-size:0.14rem;
        color:#aaaaaa;
      }
    }
  }
  .foot{
    display:-webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    height:1.0rem;
    a{
      font-size:0.14rem;
      color:#42bd56;
    }
  }
}
</style>
