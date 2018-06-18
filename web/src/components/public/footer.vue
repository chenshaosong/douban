<template>
  <footer>
    <div class="logo">
      <img src="../../assets/img/logo.png" alt="">
      <span>豆瓣</span>
    </div>
  </footer>
</template>

<script>
  import Vue from 'vue'
  let name = 'foot';
    export default Vue.component(name,{
      name: name
    })
</script>

<style scoped lang="scss">
footer{
  padding-top:0.8rem;
  padding-bottom:0.5rem;
  .logo{
    display:-webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    img{
      width:0.48rem;
      height:0.48rem;
    }
    span{
      font-size:0.2rem;
      color:#111;
      padding-left:0.14rem;
    }
  }
}
</style>
