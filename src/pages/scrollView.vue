<template>
  <div>
    <x-header></x-header>
    <p @click="toEle">局部滚动</p>
    <scroll>
      <p v-for="item in 30">{{item}}</p>
    </scroll>
    <p ref="pd">sdfhskfjshf</p>
    <p v-for="item in 30">{{item}}</p>
  </div>
</template>

<script>
  import scroll from '@/components/scroll'
  import {XHeader} from 'vux'
  export default {
    name: 'hello',
    components: {
      scroll,
      XHeader
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      toEle () {
        this.$refs.pd.scrollIntoView()
      }
    }
  }
</script>
<style scoped>

</style>
