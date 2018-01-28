<template>
  <div class="demoPage">
    <div>{{list}}</div>
    <div v-for="item in list">
      <p :class="item.indexOf('A:')?'red':''">{{item}}</p>
    </div>
    <div @click="doSome">button</div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    component: {
    },
    data () {
      return {
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
  .red{
    background-color: red;
  }
</style>
