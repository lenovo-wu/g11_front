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
      type="datetime"
      format="yyyy-MM-dd"
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
import{getUser} from '@/api/userget'
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
        form: {
          UserId:"",
          UserName:"",
          UserPwd:"",
          UserRegistertime:"",
          UserState:1,
          UserSex:3,
          UserJurisdiction:1,
          UserSignature:"",
        },
        dialogVisible: false,
        search:'',
        currentPage:1,
        total:10,
        tableData: [

        ]
      }
    },
    created(){
    this.fetchUser()
  },
    methods:{
    async fetchUser(){
      getUser().then((value) => {
        const { data } = value;
        this.tableData = data
      }
      )
    },
    add(){
      this.dialogVisible = true
      this.form = {}
    },
    handleEdit() {

     },
    save(){
      dialogVisible = false;
    },
    handleDelete() {

     },
     handleSizeChange(){

     },
     handleCurrentChange(){

     },
    }    
}
</script>
