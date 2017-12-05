<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/images/BUI_logo.jpg"/>
      <h1> BUI </h1>
    </div>
    <group>
      <cell title="Vue学习路径" value="so cool" link="/hello" is-link></cell>
      <cell title="Demo" value="演示" link="/demoPage" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'

  export default {
    components: {
      Group,
      Cell
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style scoped>
  .vux-demo {
    text-align: center;
  }
  .logo {
    margin-top: 100px;
    width: 100px;
    height: 100px
  }
</style>
