<template>
<div>
  <full-calendar :events="events" locale="en"></full-calendar>
</div>
</template>

<script>
  import city from 'vue-city'
  var demoEvents = [
    {
      title : 'Sunny Out of Office',
      start : '2016-08-25',
      end : '2017-07-27'
    }
  ]

    export default {
      data () {
        return {
          fcEvents : demoEvents,
        events:[
          {
            title     :  'event1',
            start     : '2018-06-01',
             cssClass  : 'family',
            YOUR_DATA : {cccc:"什么"}
      },
        {
          title     : 'event2',
            start     : '2018-06-01',
          end       : '2018-07-03',
          cssClass  : ['family', 'career'],
          YOUR_DATA : {}
        }
      ]
      }
      },
       methods:{
         changes(){
           this.$dispatch('eventClick');
         }
       },
      components : {
        'full-calendar': require('vue-fullcalendar')
      }
      // computed:{
      //     count(){
      //       return this.$store.state.num;
      //     },
      //   gettere(){
      //       return this.$store.getters.changedd
      //   }
      // }
      // methods:{
      //     add(){
      //       this.$store.dispatch('getData');
      //     }
      // }
    }
</script>

<style scoped>

</style>
