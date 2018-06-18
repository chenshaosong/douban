<template>
<div>

</div>
</template>

<script>
    export default {
        name: "index",
      computed:{
          count(){
            return this.$store.state.num;
          },
        gettere(){
            return this.$store.getters.changedd
        }
      },
      methods:{
          add(){
            this.$store.dispatch('getData');
          }
      }
    }
</script>

<style scoped>

</style>
