<template>
    <div class="whitewall">
        <div class="left">
            <div class="img"></div>
        </div>
        <div class="middle">
            <div class="tabs">
                <el-tabs type="border-card" class="tab">
                <el-tab-pane label="个人资料">
                    <template>
                        <el-table
                          :data="tableData1"
                          stripe
                          style="width: 100%">
                          <el-table-column>
                            <template>
                                <el-form label-position="left" inline class="demo-table-expand">
                                    <el-form-item label="姓名">
                                        <span>{{ user.userName}}</span>
                                      </el-form-item>
                                      <el-form-item label="性别">
                                        <span>{{ user.userSex}}</span>
                                      </el-form-item>
                                      <el-form-item label="状态">
                                        <span>{{ user.userState}}</span>
                                      </el-form-item>
                                      <el-form-item label="注册日期">
                                        <span>{{ user.userRegistertime}}</span>
                                      </el-form-item>
                                      <el-form-item label="邮箱">
                                        <span>{{ user.userId}}@stu.zucc.edu.cn</span>
                                      </el-form-item>
                                </el-form>
                            </template>
                          </el-table-column>
                        </el-table>
                      </template>
                </el-tab-pane>
                <el-tab-pane label="修改密码">
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="密码" prop="pass">
                      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                      <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="我的收藏">
                  <template>
                    <el-table
                      :data="tableData2"
                      stripe
                      style="width: 100%">
                      <el-table-column
                        prop="wall"
                        label="收藏表白墙"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="time"
                        label="收藏时间"
                        width="180">
                      </el-table-column>
                    </el-table>
                    <el-pagination
                      small
                      layout="prev, pager, next"
                      :total="50">
                    </el-pagination>
                  </template>
                </el-tab-pane>
                <el-tab-pane label="我的评论">
                  <template>
                    <el-table
                      :data="tableData3"
                      stripe
                      style="width: 100%">
                      <el-table-column
                        prop="date"
                        label="评论内容"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="评论对象"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="评论时间">
                      </el-table-column>
                      
                    </el-table>
                    <el-pagination
                      small
                      layout="prev, pager, next"
                      :total="50">
                    </el-pagination>
                  </template>
                </el-tab-pane>
                <el-tab-pane label="我的认领">我的认领</el-tab-pane>
                </el-tabs>
            </div>
        </div>
        

    </div>

    
</template>

<script>

import { mapGetters } from 'vuex'


export default {
  components: {  },
    name: "whitewall",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        ruleForm:[{
          password:'',
          checkpass:''
        }],
        tableData1: [{
        }],
        tableData2: [{
          wall: '2016-05-02',
          time: '王小虎',
          
        }, {
          wall: '2016-05-04',
          time: '王小虎',
          
        }, {
          wall: '2016-05-01',
          time: '王小虎',
          
        }, {
          wall: '2016-05-03',
          time: '王小虎',
          
        }],
        tableData3: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    computed: {
    ...mapGetters(['token', 'user'])
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  

  
}
</script>

<style >
.whitewall{
    width: 1100px;
    height: 550px;
    background-color: #ffffff;
    margin: 5px auto;
    box-shadow: 1px 1px 6px #000000;
    z-index: 100;
    position: relative;
    top: -370px;
}
.left{
    width: 100px;
    height: 500px;
    /*border: 2px solid red;*/
    margin: 10px;
    float: left;
    padding-left: 10px;
}
.img{
    background-image: none;
    background-color: burlywood;
    border-radius:80px;
    width: 80px;
    height: 80px;
    /*border: 2px solid red;*/
}
.middle{
    width: 960px;
    height: 600px;
   /* border: 2px solid blue;*/
    float: right;
    margin: 10px;

}
.tabs{
    width: 900px;
    padding: 20px;
    /*border: 2px solid blue;*/
    margin: 20px;
}
.tab{
    width: 900px;
    height: 400px;
}

    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }

</style>



  
  