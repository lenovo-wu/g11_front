<template>
  <el-radio-group v-model="radio" class="selector">
    <el-radio :label="3">按时间</el-radio>
    <el-radio :label="6">点赞数</el-radio>
    <el-radio :label="9">收藏数</el-radio>
  </el-radio-group>
</template>
<style >
  .selector{
    position: relative;
    bottom: 540px;
    left: 150px;
  }
</style>
<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>