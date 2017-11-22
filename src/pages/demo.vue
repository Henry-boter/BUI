<template>
  <div class="cl-div">
    <div class="center">checklist demo</div>
    <div>
      <input type="text" placeholder="请选择考场">
    </div>
    <checklist></checklist>
  </div>
</template>
<script>
  import checklist from '../components/checklist'
  export default {
    components: {
      checklist
    }
  }
</script>
<style scoped>
  .center{
    text-align: center;
    font-size: 18px;
  }
</style>
