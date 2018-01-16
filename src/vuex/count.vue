<template>
    <div class="hello">
      <p>dfsgdfgdfsgdsg</p>
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
</template>
<script>
  import store from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      count () {
        return store.state.count
      }
    },
    methods: {
      increment () {
        store.commit('increment')
      },
      decrement () {
        store.commit('decrement')
      }
    }
  }
</script>

<style scoped="scoped">

</style>
