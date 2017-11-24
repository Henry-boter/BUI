<template>
  <div class="cl-div">
    <div class="center">checklist demo</div>
    <div>
      <input type="text" @focus="openChecklist" placeholder="请选择考场">
    </div>
    <checklist :max="2" ref="checklist"></checklist>
  </div>
</template>
<script>
  import checklist from '../components/checklist'
  export default {
    components: {
      checklist
    },
    methods: {
      openChecklist () {
        this.$refs['checklist'].show()
      }
    }
  }
</script>
<style scoped>
  .center{
    text-align: center;
    font-size: 18px;
  }
</style>
