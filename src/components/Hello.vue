<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
      <a href="https://cn.vuejs.org/" target="_blank">Vue中文官网</a>
      <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
    <h2>Vue 全家桶</h2>
    <ul>
      <li><a href="https://router.vuejs.org/zh-cn/" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org/zh-cn/" target="_blank">vuex</a></li>
      <li><a href="https://vue-loader.vuejs.org/zh-cn/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'vue开发你必须知道'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 18px;
  text-align: center;
}
a {
  color: #42b983;
  display: block;
  text-align: center;
}
</style>
