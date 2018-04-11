<template>
  <div ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'wrapper',
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style scoped>

</style>
