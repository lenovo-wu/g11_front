<!-- 实现注册功能 -->


<template>
    <div class="columns py-6">
      <div class="column is-half is-offset-one-quarter">
        <el-card shadow="never">
          <div slot="header" class="has-text-centered has-text-weight-bold">
            注册
          </div>
          <div>
            <el-form ref="ruleForm" v-loading="loading" :model="ruleForm" status-icon :rules="rules"  label-width="100px"  class="demo-ruleForm" >
              <el-form-item label="学号" prop="stunum">
                <el-input v-model="ruleForm.stunum"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
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
              <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="邮箱" prop="email">
                      <el-input v-model="ruleForm2.email" class="email" placeholder="邮箱"></el-input>
                    </el-form-item>
                <el-form-item label="验证码" prop="code" class="pr">
                      <el-input prop="code" v-model="ruleForm2.code" placeholder="验证码"></el-input>
                      <button @click="getCode()" class="code-btn" :disabled="!show">
                        <span v-show="show">发送验证码</span>
                        <span v-show="!show" class="count">{{count}} s</span>
                      </button>
                      </el-form-item>
               </el-form>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" >立即注册</el-button>
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
  import request from '@/utils/request'
  import { getCheckcode } from '@/api/email'
  import { checkCode } from '@/api/email'
  import axios from 'axios'
  const TIME_COUNT = 10 // 设置一个全局的倒计时的时间
  export default {
    name: 'Register',
    data() {
      // 邮箱校验
    let validateMobile = (rule, value, callback) => {
      if (!value) {
        callback(new Error('邮箱不可为空'))
      } else {
        if (value !== '') {
          let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
          if (!reg.test(value)) {
            callback(new Error('请输入格式正确有效的邮箱号'))
          }
        }
        callback()
      }
    }
    // 验证码校验
    let validateCheckCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('验证码不可为空'))
      } else {
        if (value !== '') {
          let reg = /^[0-9]{6}$/
          if (!reg.test(value)) {
            callback(new Error('请输入收到的6位随机验证码'))
          }
        }
        callback()
      }
    }
    //密码校验
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

        ruleForm2: {
        email: '',
        code: ''
      },
      show: true,
      count: '',
      timer: null,
      rules2: {
        email: [
          { validator: validateMobile, trigger: 'blur' }
        ],
        code: [
          { validator: validateCheckCode, trigger: 'blur' }
        ]
      },
        //
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
      getCode () {
      let _this = this
      if (this.ruleForm2.email === '') {
        _this.$message.error('请先输入邮箱再点击获取验证码')
      } else {
        sessionStorage.setItem('testKey','这是一个测试的value值');
        getCheckcode(this.ruleForm2).then(function (res) {
          sessionStorage.setItem('checkCode', res.data)  // 这里我没用redis做缓存，用的浏览器sessionStorage+md5加密存下来的
        })
        // 验证码倒计时
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      }
    },
      //
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            console.log(this.ruleForm2.code);
            console.log(sessionStorage.getItem("checkCode"));
            if(this.ruleForm2.code!=sessionStorage.getItem("checkCode")){
              alert("验证码错误");
              setTimeout(() => {
                    this.loading = false
                    this.$router.push({ path: this.redirect || '/login' })
                  }, 3 * 1000)
            }
            else{
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
              })}
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