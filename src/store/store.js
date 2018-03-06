import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({})

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false,
    direction: 'forward',
    customer: {
      nick: 'BUI',
      openid: '',
      portrait: 'http://cikeenglish.oss-cn-shenzhen.aliyuncs.com/activity/201803064551',
      mobile: '',
      type: '',
      id: ''
    }
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.loading = payload.loading
      console.log(state.loading)
    },
    getCustomer (state, customer) {
      state.customer.nick = customer
    }
  }
})

export default store
