// 选择器组件，用于选择排序方式
<template>
  <el-radio-group v-model="radio" class="selector" @change="agreeChange">
    <el-radio :label="3" >按时间</el-radio>
    <el-radio :label="6" >点赞数</el-radio>
    <el-radio :label="9" >收藏数</el-radio>
  </el-radio-group>
</template>
<style >
  .selector{
    position: relative;
    bottom: 540px;
    left: 350px;
  }
</style>
<script>
  export default {
    data () {
      return {
        radio: 3
      };
    },
    created(){

    },
    methods:{
      agreeChange:function(val){
        this.$emit('child-event',val)
        console.log(val)
      }
    }
  }
</script>