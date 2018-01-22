<template>
    <div class="demoPage">
      <!--<b-header></b-header>-->
      <div class="pageBox">
        <div class="pageItem">BHeader</div>
        <div class="pageItem"></div>
        <div class="pageItem"></div>
      </div>
      <div>{{list}}</div>
      <div v-for="item in list">
        <p :class="item.indexOf('A:')?'red':''">{{item}}</p>
      </div>
      <div @click="doSome">button</div>
    </div>
</template>

<script>
//  import BHeader from '../components/BHeader.vue'
  export default {
    name: 'hello',
//    component: {
//      BHeader
//    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        str: '@A:good morning,teacher!@B:good morning,gays!@B:good morning,gays!@A:set down.@B:thanks!',
        list: []
      }
    },
    methods: {
      doSome () {
        this.list = this.str.split('@')
        this.list.shift()
        console.log(this.list)
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
  .red{
    background-color: red;
  }
</style>
