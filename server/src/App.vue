<template>
  <div id="app">
    <commen></commen>
    <router-view/>
  </div>
</template>

<script>
  import './assets/font/iconfont.css'
  import './assets/style/public.css'
  import commen from './components/public/commen'
export default {
  name: 'App',
  components:{
    "commen":commen
  }
}
</script>

<style lang="scss" scoped>
#app {
  height:100%;
}
</style>
