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
          <el-button type="primary" style="margin-left:5px" @click="loader">查询</el-button>
        </div>
  <!-- 数据查看表单主体 -->
          
          <el-table
      v-loading="loading"
      :data="tableData"
      :border="true"
      style="width:100%;"
      >
       <el-table-column
        prop="userId"
        label="用户ID"
        >
      </el-table-column>
       <el-table-column
        prop="userName"
        label="用户昵称"
        >
      </el-table-column>
  /*用户密码不显示*/      
      <el-table-column
        prop="userRegistertime"
        label="注册日期"
        sortable="">
      </el-table-column>
      <el-table-column
        prop="userState"
        label="用户状态"
        >
      </el-table-column>
      <el-table-column
        prop="userSex"
        label="用户性别">
      </el-table-column>
      <el-table-column
        prop="userJurisdiction"
        label="用户权限">
      </el-table-column>
      <el-table-column
        prop="userSignature"
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
        :page-size="pageSize"
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
  import{getUser} from '@/api/userget';
  import{load} from '@/api/load';

  export default{
      name: "Layout",
      components: {
          Header,
          Aside
      },
      created(){
        this.loader()
      },
      data() {
        return {
          search:'',
          currentPage:1,
          pageSize: 10,
          total:0,
          tableData: [

          ]
        }
      },
      methods:{
      loader(){
        load(this.currentPage,this.pageSize,this.search).then(res=>{
          console.log(res);
          this.tableData=res.data.records
          this.total=res.data.total
        })
      },

        handleEdit(row) {
       },
       handleSizeChange(){
  
       },
       handleCurrentChange(){
  
       },
      }    
  }
  </script>