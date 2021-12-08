<!-- 实现注册功能 -->


<template>
    <div class="columns py-6">
      <div class="column is-half is-offset-one-quarter">
        <el-card shadow="never">
          <div slot="header" class="has-text-centered has-text-weight-bold">
            注册
          </div>
          <div>
            <el-form
              ref="ruleForm"
              v-loading="loading"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="100px"
              class="demo-ruleForm"
            >

              <el-form-item label="学号" prop="stunum">
                <el-input v-model="ruleForm.stunum"></el-input>
              </el-form-item>

              
  
              <el-form-item label="密码" prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>
  
              <el-form-item label="确认密码" prop="checkPass">
                <el-input
                  v-model="ruleForm.checkPass"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>

              <el-form-item label="昵称" prop="othername">
                <el-input v-model="ruleForm.othername"></el-input>
              </el-form-item>

              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="验证码" prop="name">
                <el-input
                  v-model="ruleForm.name"
                />
              </el-form-item>
              
  
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                >立即注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </div>
  </template>
  
  <script>
  import { userRegister } from '@/api/auth/auth'
  
  export default {
    name: 'Register',
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        loading: false,
        ruleForm: {
          stunum: '',
          pass: '',
          checkPass: '',
          othername: '',
          sex: '',
          name: ''
        },
        rules: {
            stunum:[
              { required: true, message: '请输入您的学号', trigger: 'blur' },
              {
                min: 8,
                max: 8,
                message:'您的城院学号',
                trigger:'blur',
              }
            ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            {
              min: 6,
              max: 20,
              message: '长度在 6 到 20 个字符',
              trigger: 'blur'
            }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          
          othername: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '请输入正确格式的昵称',
            trigger: 'blur'
          }
        ],

          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          name: [
          { required: true, message: '请输入邮箱验证码', trigger: 'blur' },
          {
            min: 4,
            max: 4,
            message: '请输入正确的邮箱验证码',
            trigger: 'blur'
          }
        ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            userRegister(this.ruleForm)
              .then((value) => {
                const { code, message } = value
                if (code === 200) {
                  this.$message({
                    message: '账号注册成功',
                    type: 'success'
                  })
                  setTimeout(() => {
                    this.loading = false
                    this.$router.push({ path: this.redirect || '/login' })
                  }, 0.1 * 1000)
                } else {
                  this.$message.error('注册失败，' + message)
                }
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
  </script>
  
  <style scoped>
  </style>