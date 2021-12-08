// 发布表白墙组件，用于发布表白墙
<template>
    <div class="wallformal" >   
        <div class="headimage">
            <div class="tablewhole">
                <!-- ref属性绑定控件 -->
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" >
                <el-form-item label="对方昵称" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="隐藏昵称" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="是否隐藏昵称">
                    <el-option label="是" value="yes"></el-option>
                    <el-option label="否" value="no"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="表白标题" prop="title">
                  <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="表白正文" prop="ttext">
                  <el-input type="textarea" v-model="ruleForm.ttext" rows="6"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">表白</el-button>
                  <el-button @click="inbroser">取消</el-button>
                </el-form-item>
                </el-form>
              </div>
        
        </div>
        <div> {{user.userId}}</div>
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
padding: 8px;
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
import {insertWall} from '@/api/wall/wall'
import { mapGetters } from 'vuex'
import Selector from './Selector.vue'
export default{
  components: { Selector },
    name: "Publishedit", data() {
      return {
        wall:{
          wallId:1,
          wallContent:'',
          wallContenttitle:'',
          wallTo:'',
          wallUserid:'',
          wallGood:0,
          wallCollection:0,
          wallTalk:0,
          wallReport:0,
          wallState:'正常'
        },
        ruleForm: {
          name: '',
          region: '',
          title: '',
          ttext:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入对方昵称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择是否隐藏自己的昵称', trigger: 'change' }
          ],
          title: [
              { required: true, message: '请输入表白标题', trigger: 'blur' },
              { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
          ttext: [
            { required: true, message: '请填写表白内容', trigger: 'blur' },
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
            this.wall.wallTo=this.ruleForm.name
            this.wall.wallContent=this.ruleForm.ttext
            this.wall.wallContenttitle=this.ruleForm.title
            this.wall.wallUserid=this.user.userId
            console.log(this.wall)
            insertWall(this.wall)
            alert('表白成功!');
            this.inbroser()
          } else {
            console.log('error submit!!');
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



