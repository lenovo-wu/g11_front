<template>
  <div>
  <!-- 头部 -->
      <Header />
  
  <!-- 主体 -->
      <div style="display:flex">
  
  <!-- 侧边栏 -->
          <Aside />
  <!-- 内容区域 -->
      <template>
        <div style="padding: 10px; width:100%">
  <!-- 按钮功能区域 -->

  <!-- 按钮搜索区域 -->
        <div style="margin: 10px 0">
          <el-input v-model="search" placeholder="输入用户昵称查找用户" style="width: 20%">
          </el-input>
          <el-button type="primary" style="margin-left:5px">查询</el-button>
        </div>
  <!-- 数据查看表单主体 -->
          
          <el-table
      v-loading="loading"
      :data="tableData"
      :border="true"
      style="width=100%;"
      >
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
      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" >编辑</el-button>
          <el-popconfirm  title="确定删除吗？">
          <el-button slot="reference" type="text"  style="margin-left: 10px">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>         
    </el-table>        
    
    <div style="margin:10px 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  
  </div>
      </template>
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
          search:'',
          currentPage:1,
          total:10,
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
      },
      methods:{
        handleEdit(row) {
       },
       handleSizeChange(){
  
       },
       handleCurrentChange(){
  
       },
      }    
  }
  </script>