//表白墙管理界面
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
          <el-input v-model="search" placeholder="输入表白墙标题查找表白墙" style="width: 20%" clearable="">
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
        prop="wallId"
        label="表白墙ID"
        >
      </el-table-column>
       <el-table-column
        prop="wallContenttitle"
        label="表白墙标题"
        >
      </el-table-column>
  /*用户密码不显示*/      
      <el-table-column
        prop="wallContent"
        label="表白墙正文"
        show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="wallTime"
        label="表白墙发布时间"
        >
      </el-table-column>
      <el-table-column
        prop="wallUserid"
        label="发表白墙人ID">
      </el-table-column>
      <el-table-column
        prop="wallState"
        label="表白墙状态">
      </el-table-column>
      <el-table-column
        prop="wallTo"
        label="被表白对象"
        >
      </el-table-column>
      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" >状态更改</el-button>
          <el-popconfirm  title="确定删除吗？" @confirm="handleDelete(scope.row.wallId)">
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
        title="状态更改"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <el-form :model="form"  label-width="90px">
            <el-form-item label="表白墙状态">
              <el-radio v-model="form.wallState" label="正常">正常</el-radio>
              <el-radio v-model="form.wallState" label="精选">精选</el-radio>
              <el-radio v-model="form.wallState" label="删除">删除</el-radio>
              <el-radio v-model="form.wallState" label="认领">认领</el-radio>                
            </el-form-item>                        
        </el-form>
        <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
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
  import{load} from '@/api/adminWall/wallload';
  import{update} from '@/api/adminWall/updatewall';
  import{deletewall} from '@/api/adminWall/deletewall';
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
      loader(){
        load(this.currentPage,this.pageSize,this.search).then(res=>{
          console.log(res)
          this.tableData=res.data.records
          this.total=res.data.total
        })
      },

       handleEdit(row) {
          this.form = JSON.parse(JSON.stringify(row))
          this.dialogVisible=true;
       },
        handleDelete(wallId) {
          deletewall(wallId).then(res=>{
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