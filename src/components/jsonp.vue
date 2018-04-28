<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
      <p>{{result}}</p>
    </div>
</template>

<script>
  import { getRecommend } from '@/api/recommend'

  export default {
    name: 'hello',
    data () {
      return {
        msg: '这是一个jsonp请求页面',
        result: null
      }
    },
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          console.log(res)
          if (res.code === 0) {
            this.result = res.data
            console.log(this.result)
          }
        })
      }
    }
  }
</script>
<style scoped>

</style>
