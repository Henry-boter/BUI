<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/images/BUI_logo.jpg"/>
      <h1> BUI </h1>
    </div>
    <group>
      <cell title="欢迎进入BUI" value="so cool" link="/hello" is-link></cell>
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

<style>
  .vux-demo {
    text-align: center;
  }
  .logo {
    margin-top: 100px;
    width: 100px;
    height: 100px
  }
</style>
