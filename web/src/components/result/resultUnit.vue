<template>
  <div class="searchcontent">
    <h3>{{listobj.htitle}}</h3>
    <div class="searchcontentlist">
      <ul>
        <result-unit-li v-for="(obj,index) in content" :key="index" :title="obj.title" :images="obj.image"  :average="obj.rating.average"></result-unit-li>
      </ul>
    </div>
    <div class="more">更多结果,共{{listobj.total}}</div>
  </div>
</template>

<script>
  import resultUnitLi from  './resultUnitLi'
    export default {
        name: "result-unit",
      components:{
          "result-unit-li":resultUnitLi
      },
      props:[
        "listobj"
      ],
      data(){
          return {
            content:[]
          }
      },
      methods:{
          check(){
            if (this.listobj.htitle === '图书'){
              this.content = this.listobj.books
            }
            if (this.listobj.htitle === '音乐'){
              this.content = this.listobj.musics

            }
            if (this.listobj.htitle === '电影'){
              this.content = this.listobj.subjects

            }
            console.log(this.content)
          }
      },
      created(){
          this.check();
      },
      beforeUpdate(){
          this.check();
      }
    }
</script>

<style scoped lang="scss">
  .searchcontent{
    padding:0.18rem 0.18rem 0;
  h3{
    line-height:0.38rem;
    font-size:0.14rem;
    color:#aaaaaa;
  }
  .searchcontentlist{
  ul{
  }
  }
  .more{
    color:#42bd56;
    line-height:0.37rem;
    font-size:0.13rem;
    text-align:center;
    border-bottom:1px solid #f2f2f2;
  }
  }
</style>
