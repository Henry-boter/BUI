<template>
  <div>
  <vue-event-calendar :events="demoEvents" :title="title" @monthChanged="" @dayChanged=""></vue-event-calendar>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: '学习记录',
        demoEvents: [{
          date: '2017/11/21',
          title: 'Foo'
        }, {
          date: '2017/12/21', // 必填
          title: 'Foo' // 必填
        }, {
          date: '2017/12/27',
          title: 'Bar',
          desc: 'description', //  一些描素
          customClass: 'disabled highlight' // 自定义日历单元格的Class，会加到对应的日历单元格上
        }, {
          date: '2017/12/14',
          title: 'Foo'
        }, {
          date: '2017/12/8',
          title: 'Bar',
          desc: 'description',
          customClass: 'disabled highlight'
        }, {
          date: '2018/1/1',
          title: 'Bar',
          desc: 'description',
          customClass: 'disabled highlight'
        }, {
          date: '2018/1/9',
          title: 'Bar',
          desc: 'description',
          customClass: 'disabled highlight'
        }]
      }
    },
    methods: {
      monthChange (month) {
        console.log(month)
      },
      dayChange (day) {
        console.log(day)
      }
    }
  }
</script>
<style>
.events-wrapper{
  display: none;
}
  .disabled{
   color: red;
  }
</style>
