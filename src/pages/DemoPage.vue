<template>
    <div class="demoPage">
      <b-header></b-header>
      <div class="pageBox">
        <div class="pageItem">BHeader</div>
        <div class="pageItem"></div>
        <div class="pageItem"></div>
      </div>
      <vue-event-calendar :events="demoEvents" @monthChanged="" @dayChanged=""></vue-event-calendar>
    </div>
</template>

<script>
  import BHeader from '../components/BHeader.vue'
  export default {
    name: 'hello',
    component: {
      BHeader
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style scoped>
  .demoPage{

  }
  .pageBox{
    display: flex;
  }
  .pageItem{
    flex: 1;
    height: 50px;
    border: 1px solid #999;
    text-align: center;
    line-height: 50px;
    color: aqua;
  }
</style>
