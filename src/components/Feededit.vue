<template>
    <div class="wallformal" >   
        <div class="headimage">
            <div class="tablewhole">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" >
                <el-form-item label="反馈标题" prop="title">
                  <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                   
                <el-form-item label="反馈正文" prop="ttext">
                  <el-input type="textarea" v-model="ruleForm.ttext" rows="6"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">反馈</el-button>
                  <el-button @click="inbroser">取消</el-button>
                </el-form-item>
                </el-form>
            </div>

        </div>
        



    </div>
</template>

<style>
.headimage{
  margin: 50px;
  width: 100px;
  height: 100px;
  z-index: 200;
  background-image: url(../assets/css/headimage.png);
  background-size: cover;
  position: relative;
  top: -50px;
}
.wallformal{
width: 950px;
height: 550px;
background-color: #f3f3f3;
margin: 5px auto;
box-shadow: 1px 1px 6px #000000;
z-index: 100;
position: relative;
top: -370px;
}
.tablewhole{
padding: 5px;
width: 750px;
height: 450px;
background-color: #f3f3f3;
margin: 5px auto;
box-shadow: 1px 1px 6px #000000;
z-index: 200;
position: relative;
top: 120px;
left: 50px;
}
</style>


<script>
import {insertFeedback} from '@/api/user'
import { mapGetters } from 'vuex'
import Selector from './Selector.vue'
export default{
  components: { Selector },
    name: "Feededit",
data() {
      return {
        feedBack:{
          feedbackId:1,
          feedbackTitle:'',
          feedbackContent:'',
          feedbackUserid:'',
          feedbackState:'未处理',
        },
        ruleForm: {
          title:'',
          ttext:'',
        },
        rules: {
          title: [
              { required: true, message: '请输入反馈标题', trigger: 'blur' },
              { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
          ttext: [
            { required: true, message: '请填写反馈内容', trigger: 'blur' },
            { min: 3, max: 140, message: '长度在 3 到 140 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    computed: {
    ...mapGetters(['token', 'user'])
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.feedBack.feedbackUserid=this.user.userId
            this.feedBack.feedbackTitle=this.ruleForm.title
            this.feedBack.feedbackContent=this.ruleForm.ttext
            insertFeedback(this.feedBack)
            alert('反馈成功!');
            this.inbroser()
          } else {
            alert('反馈失败!');
            return false;
          }
        });
      },
      inbroser(){
      this.$router.push({path:'/Browser'})
    },
    }
  }
</script>



