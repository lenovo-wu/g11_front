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
          <el-input v-model="search" placeholder="输入用户ID查找用户" style="width: 20%" clearable="">
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
          <el-popconfirm  title="确定删除吗？" @confirm="handleDelete(scope.row.userId)">
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
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <el-form :model="form"  label-width="120px">
            <el-form-item label="用户ID">
              <el-input v-model="form.userId" style="width:80%"></el-input>
            </el-form-item>
            <el-form-item label="用户昵称">
              <el-input v-model="form.userName" style="width:80%"></el-input>
            </el-form-item>
            <el-form-item label="用户状态">
              <el-radio v-model="form.userState" label="正常">正常</el-radio>
              <el-radio v-model="form.userState" label="冷冻">冷冻</el-radio>
              <el-radio v-model="form.userState" label="封禁">封禁</el-radio>              
            </el-form-item>
            <el-form-item label="用户性别">
              <el-radio v-model="form.userSex" label="男">男</el-radio>
              <el-radio v-model="form.userSex" label="女">女</el-radio>
              <el-radio v-model="form.userSex" label="未知">未知</el-radio>  
            </el-form-item>
            <el-form-item label="用户权限">
              <el-radio v-model="form.userJurisdiction" label="用户">用户</el-radio>
              <el-radio v-model="form.userJurisdiction" label="管理员">管理员</el-radio>
            </el-form-item>
            <el-form-item label="个性签名">
              <el-input type="textarea"  v-model="form.userSignature" style="width:80%"></el-input>
            </el-form-item>                        
        </el-form>
        <template #footer>
        <span class="dialog-footer">
          <el-button @click="reset">重置密码</el-button>
          <el-button type="primary" @click="update">确 定</el-button>
        </span>          
        </template>
    </el-dialog>
      </div>   
  </div>
  </template>
  
  
  
  <script>
  import Header from "@/components/Header";
  import Aside from "@/components/Aside";
  import{load} from '@/api/adminUser/load';
  import{update} from '@/api/adminUser/updateuser';
  import{deleteuser} from '@/api/adminUser/deleteuser';
  import{resetuser} from '@/api/adminUser/reset';
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
          form: {},
          dialogVisible: false,
          search:'',
          currentPage:1, //当前页
          pageSize: 10, //每页的个数
          total:0,
          tableData: [

          ]
        }
      },
      methods:{
      update(){
        update(this.form).then(res=>{
          console.log(res)
        })
        this.loader()
        this.dialogVisible=false  //关闭弹窗
      },
      reset(){
        resetuser(this.form).then(res=>{
          console.log(res)
        })
        this.loader()
        this.dialogVisible=false  //关闭弹窗
      },      
      loader(){
        load(this.currentPage,this.pageSize,this.search).then(res=>{
          console.log(res);
          this.tableData=res.data.records
          this.total=res.data.total
        })
      },

       handleEdit(row) {
          this.form = JSON.parse(JSON.stringify(row))
          this.dialogVisible=true;
       },
        handleDelete(userId) {
          deleteuser(userId).then(res=>{
          console.log(res)
          })
          this.loader()
       },       
       handleSizeChange(pageSize){  //改变当前每页的个数
       this.pageSize=pageSize
        this.loader()
       },
       handleCurrentChange(pageNum){  //改变当前页码触发
       this.currentPage=pageNum
       this.loader()
       },
      }    
  }
  </script>