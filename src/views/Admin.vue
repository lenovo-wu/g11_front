<template>
<div>
<!-- 头部 -->
    <Header />

<!-- 主体 -->
    <div style="display:flex">

<!-- 侧边栏 -->
        <Aside />

<!-- 内容区域 -->
        <router-view style="flex: 1"/>
        <el-table
    :data="tableData"
    border="true"
    style="width: 100%; padding: 10px">
     <el-table-column
      prop="id"
      label="用户ID"
      >
    </el-table-column>   
     <el-table-column
      prop="name"
      label="用户昵称"
      >
    </el-table-column>
/*用户密码不显示*/      
    <el-table-column
      prop="date"
      label="注册日期"
      sortable="">
    </el-table-column>
    <el-table-column
      prop="state"
      label="用户状态"
      >
    </el-table-column>
    <el-table-column
      prop="sex"
      label="用户性别">
    </el-table-column>
    <el-table-column
      prop="jurisdiction"
      label="用户权限">
    </el-table-column>
    <el-table-column
      prop="signature"
      label="个性签名"
      show-overflow-tooltip="true">
    </el-table-column>         
  </el-table>
    </div>   
</div>
</template>



<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
export default{
    name: "Layout",
    components: {
        Header,
        Aside
    },
    data() {
      return {
        tableData: [{
          id: "31901209",
          name: "Lenovo",
          date: '2021-11-09',
          state: '正常',
          sex: "男",
          jurisdiction: "管理员",
          signature: "",
        },{
          id: "31901210",
          name: "Lenovo",
          date: '2021-11-10',
          state: '正常',
          sex: "男",
          jurisdiction: "管理员",
          signature: "",
        },{
          id: "31901211",
          name: "Lenovo",
          date: '2021-11-11',
          state: '正常',
          sex: "男",
          jurisdiction: "管理员",
          signature: "",
        },{
          id: "31901212",
          name: "Lenovo",
          date: '2021-11-12',
          state: '正常',
          sex: "男",
          jurisdiction: "管理员",
          signature: "",
        },{
          id: "31901213",
          name: "Lenovo",
          date: '2021-11-13',
          state: '正常',
          sex: "男",
          jurisdiction: "管理员",
          signature: "",
        }]
      }
    }    
}
</script>
