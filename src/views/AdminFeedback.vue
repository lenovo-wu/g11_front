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
          <el-input v-model="search" placeholder="输入反馈人ID查找反馈" style="width: 20%" clearable="">
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
        prop="feedbackId"
        label="反馈ID"
        >
      </el-table-column>
       <el-table-column
        prop="feedbackTitle"
        label="反馈标题"
        >
      </el-table-column>
  /*用户密码不显示*/      
      <el-table-column
        prop="feedbackContent"
        label="反馈正文"
        show-overflow-tooltip="true"
        >
      </el-table-column>
      <el-table-column
        prop="feedbackUserid"
        label="反馈人ID"
        >
      </el-table-column>
      <el-table-column
        prop="feedbackTime"
        label="反馈日期"
        sortable="">
      </el-table-column>
      <el-table-column
        prop="feedbackState"
        label="反馈状态">
      </el-table-column>
      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" >受理完成</el-button>
          <el-popconfirm  title="确定删除吗？" @confirm="handleDelete(scope.row.feedbackId)">
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
  import{load} from '@/api/adminFeedback/feedload';
  import{update} from '@/api/adminFeedback/updatefeedback';
  import{deletefeedback} from '@/api/adminFeedback/deletefeedback';
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
          this.update()
       },
        handleDelete(feedbackId) {
          deletefeedback(feedbackId).then(res=>{
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