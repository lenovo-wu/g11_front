//管理员头部页面
<template>
    <div style="height:50px;line-height:50px; border-bottom: 1px solid #ccc; display:flex">
        <div style="width: 200px; padding-left:30px; font-weight: bold; color:#409EFF">校园表白墙管理</div>
        <div style="flex: 1"></div>
        <div style="width: 100px">
        <el-dropdown>
            <span class="el-dropdown-link">
            {{user.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="inhome">退出系统</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        </div>
    </div>
</template>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>



<script>
import { mapGetters } from 'vuex'
export default{
    name: "Header",
    computed: {
    ...mapGetters(['token', 'user'])
    },
    methods:{
    inhome(){
      this.$router.push({path:'/'})
    },
    }
}
</script>

<style scoped>

</style>


