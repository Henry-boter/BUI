<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
  import { getRecommend } from '@/api/recommend'

  export default {
    name: 'hello',
    data () {
      return {
        msg: '这是一个jsonp请求页面'
      }
    },
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
<style scoped>

</style>
