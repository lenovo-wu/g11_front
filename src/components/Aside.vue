//管理员页面侧边栏
<template>
    <div>
  <el-menu
      style="width: 200px; min-height:93vh"
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo">
      <el-menu-item index="Admin">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="AdminWall">
        <i class="el-icon-chat-round"></i>
        <span slot="title">表白墙管理</span>
      </el-menu-item>
      <el-menu-item index="AdminFeedback">
        <i class="el-icon-chat-square"></i>
        <span slot="title">反馈管理</span>
      </el-menu-item>
    </el-menu>       
    </div>
</template>

<script>
export default {
    name: "Aside"
}
</script>

<style scoped>

</style>
