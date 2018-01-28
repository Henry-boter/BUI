<template>
  <div class="cl-div">
    <div class="center">checklist demo</div>
    <div>
      <input type="text" @focus="openChecklist" placeholder="请选择考场">
    </div>
    <p v-for="(item, index) in kaochangVal">{{item.label}}</p>
    <checklist
      :max="2" ref="checklist"
      :data-list="address"
      :checkbox-left="false"
      @on-change="changeKaochangValue">
    </checklist>
  </div>
</template>
<script>
  import checklist from '../components/checklist'
  import axios from 'axios'
  export default {
    components: {
      checklist
    },
    data () {
      return {
        kaochangVal: null,
        address: []
      }
    },
    mounted () {
      this.getAddress()
    },
    methods: {
      openChecklist () {
        this.$refs['checklist'].show()
      },
      changeKaochangValue (val) {
        this.kaochangVal = val
      },
      getAddress () {
        axios.get('/address').then((res) => {
          var address = res.data.result
          this.address = address
          console.log(address)
        })
      }
    }
  }
</script>
<style scoped>
  .cl-div{
    text-align: center;
  }
  .center{
    text-align: center;
    font-size: 18px;
  }
</style>
