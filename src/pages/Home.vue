<template>
  <div>
    <div class="vux-demo">
      <img class="logo" :src="user.portrait"/>
      <h1>{{user.nick}}</h1>
      <p>v1.0</p>
      <span @click="changeName">vuex改变状态</span>
    </div>
    <group>
      <cell title="Vue学习路径" value="so cool" link="/hello" is-link></cell>
      <cell title="Demo" value="演示" link="/demoPage" is-link></cell>
      <cell title="checkList组件" link="/demo"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'
  import { mapState } from 'vuex'
  export default {
    components: {
      Group,
      Cell
    },
    computed: {
      ...mapState({
        user: state => state.vux.customer
      })
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      //  vuex测试改变姓名
      changeName () {
        this.$store.commit('getCustomer', 'bob')
      }
    }
  }
</script>

<style scoped>
  .vux-demo {
    text-align: center;
  }
  .logo {
    margin-top: 10px;
    width: 100px;
    height: 100px
  }
</style>
