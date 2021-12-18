// 评论组件
<template>
    <div v-show="visible">
        <div class="reply">
            <el-table
                :data="tableData"
                :border="true" 
                >
                <el-table-column
                    prop="replyTime"
                    label="发布时间">
                </el-table-column>
                <el-table-column
                    prop="replyContent"
                    label="评论内容">
                </el-table-column>
                <el-table-column
                    prop="replyUsername"
                    label="评论作者">
                </el-table-column>       
            </el-table>
            <div style="margin:10px 0" class="pagetransform2">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="this.page.currentpage"
                    :page-sizes="[3]"
                    :page-size="this.page.pagesize"
                    :total="this.page.total"
                    layout="prev, pager, next, total,  jumper"
                    >
                </el-pagination>
            </div>
             <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" >
                <div class="replyedit">
                    <el-form-item label="评论正文" prop="ttext">
                    <el-input type="textarea" v-model="ruleForm.ttext" rows="6"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">评论</el-button>
                    <el-button @click="cancle"> 取消</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </div>
</template>

<style>
.reply{
    width: 800px;
    height: 490px;
    background-color: #f3f3f3;
    margin: 5px auto;
    box-shadow: 1px 1px 6px #000000;
    z-index: 100;
    position: relative;
    top: -570px;
}
.pagetransform2{
    position: relative;
    top:5px;
    
}
.replyedit{
    width: 450px;
    height: 200px;
}
</style>


<script>
import{getuser} from '@/api/user'
import { mapGetters } from 'vuex'
import{ insertReply } from '@/api/reply/reply'
import{ loadReplyByWallid } from '@/api/reply/reply'
export default{
  components: { },
    name: "Reply",
    props:{
        visible:{
            type:Boolean,
            default:false
        },
        wallIdd:{
            type:Number,
            required:true
        }
    },
    data(){
        return{
        auserId:'31901211',
        page:{
            total:0,
            pagesize:3,
            currentpage:1,
            search:''
        },
        tableData: [

        ],
        ruleForm: {
          ttext:'',
        },
        reply:{
            wallId:1,
            replyContent:'',
            replyUserid:'12121212',
            replyState:'正常',
            replyId:1,
            replyUsername:'sd好'
        },
        rules: {
          ttext: [
            { required: true, message: '请填写评论内容', trigger: 'blur' },
            { min: 3, max: 140, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ]
        }
        }
    },
  created(){
    this.loadAllreply()
  },
  watch:{
      wallIdd(val,oldval){
          console.log("wallid: "+val,oldval)
          this.reply.wallId=this.wallIdd
          this.loadAllreply()
      }
  },
  computed: {
    ...mapGetters(['token', 'user'])
  },
  methods:{
    loadAllreply(){
        this.reply.wallId=this.wallIdd
      loadReplyByWallid(this.currentpage,this.pagesize,this.search,this.wallIdd).then(res=>{
        console.log('你好');
        this.tableData =res.data.records
        this.page.total=res.data.total

      })
      
    },
    handleCurrentChange(pageNum){  //改变当前页码触发
      this.currentpage=pageNum
      this.loadAllreply()
    },
    cancle(){
        this.$emit('handleCancle')
    }, 
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.reply.replyContent=this.ruleForm.ttext
            this.reply.replyUserid=this.user.userId
            this.reply.replyUsername=this.user.userName
            insertReply(this.reply)
            alert('评论成功!');       
            this.loadAllreply()

          } else {
            console.log('error submit!!');
            return false;
          }
        });    
    },
}
}
</script>



