<!-- 
      个人中心
      实现查询当前用户的个人资料、收藏、评论、修改密码、个人表白墙、认领等功能
 -->


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
                                    <el-form-item label="个性签名">
                                      <span>{{ user.userSignature}}</span>
                                    </el-form-item>
                              </el-form>
                          </template>
                        </el-table-column>
                      </el-table>
                    </template>
              </el-tab-pane>

              <el-tab-pane label="修改密码">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="密码" prop="userPwd">
                    <el-input type="password" v-model="ruleForm.userPwd" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>

              <el-tab-pane label="个性签名">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="个性签名" prop="userSignature">
                    <el-input v-model="ruleForm2.userSignature"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm2('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>

              <el-tab-pane label="我的表白墙" >
                <template>
                  <el-card class="box-card content" shadow="never">
                    <div slot="header" class="has-text-weight-bold">
                      <span>我的表白墙</span>
                    </div>
                    <div v-if="topics.length===0">
                      暂无表白墙
                    </div>
                    <div v-else class="topicUser-info">
                      <article v-for="(item, index) in topics" :key="index" class="media">
                        <div class="media-content">
                          <nav class="level has-text-grey is-size-9">
                            <div class="level-left" @click="showwall(item.wallId)">
                              <span class="mr-1">
                                表白墙标题：{{item.wallContenttitle}}<br>
                                发布于:{{ dayjs(item.wallTime).format("YYYY/MM/DD HH:mm:ss") }}
                              </span>
                            </div>
                          </nav>
                        </div>
                        <div v-if="token" class="media-right">
                          <div v-if="topicUser.username === user.username" class="level">                       
                            <div class="level-item">
                              <a @click="handleDelete1(item.wallId)">
                                <span class="tag is-danger">删除</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
          
                    <!--分页-->
                    <pagination
                      v-show="page.total > 50"
                      class="mt-5"
                      :total="page.total"
                      :page.sync="page.current"
                      :limit.sync="page.size"
                      @pagination="fetchUserById"
                    />
                  </el-card>     
                </template>
              </el-tab-pane>
              <el-tab-pane label="我的评论">
                <template>
                  <el-card class="box-card content" shadow="never">
                    <div slot="header" class="has-text-weight-bold">
                      <span>我的评论</span>
                    </div>
                    <div v-if="topics2.length===0">
                      暂无评论
                    </div>
                    <div v-else class="topicUser2-info">
                      <article v-for="(item2, index) in topics2" :key="index" class="media">
                        <div class="media-content">
                          <nav class="level has-text-grey is-size-9">
                            <div class="level-left" @click="showwall(item2.wallId)">
                              <span class="mr-1">
                                评论内容：{{item2.replyContent}}<br>
                                评论表白墙：{{item2.wallId}}<br>
                                评论时间:{{ dayjs(item2.replyTime).format("YYYY/MM/DD HH:mm:ss") }}
                              </span>
                            </div>
                          </nav>
                        </div>
                        <div v-if="token" class="media-right">
                          <div v-if="topicUser.username === user.username" class="level">                       
                            <div class="level-item">
                              <a @click="handleDeleteReply(item2.id)">
                                <span class="tag is-danger">删除</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <!--分页-->
                    <pagination
                      v-show="page2.total > 50"
                      class="mt-5"
                      :total="page2.total"
                      :page.sync="page2.current"
                      :limit.sync="page2.size"
                      @pagination="fetchUserById2"
                    />
                  </el-card>
                </template>
              </el-tab-pane>
              <el-tab-pane label="我的认领">
                <template>
                  <el-card class="box-card content" shadow="never">
                    <div slot="header" class="has-text-weight-bold">
                      <span>我的认领</span>
                    </div>
                    <div v-if="topics3.length===0">
                      暂无认领
                    </div>
                    <div v-else class="topicUser3-info">
                      <article v-for="(item3, index) in topics3" :key="index" class="media">
                        <div class="media-content">
                          <nav class="level has-text-grey is-size-9">
                            <div class="level-left" @click="showwall(item3.chooseWallid)">
                              <span class="mr-1">
                                表白墙:{{item3.chooseWallid}}<br>
                                认领对象:{{item3.chooseBeuserid}}<br>
                                认领时间:{{ dayjs(item3.chooseTime).format("YYYY/MM/DD HH:mm:ss") }}
                              </span>
                            </div>
                          </nav>
                        </div>
                        <div v-if="token" class="media-right">
                          <div v-if="topicUser.username === user.username" class="level">                       
                            <div class="level-item">
                              <a @click="handleDeletechoose(item3.chooseId)">
                                <span class="tag is-danger">删除</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <!--分页-->
                    <pagination
                      v-show="page3.total > 50"
                      class="mt-5"
                      :total="page3.total"
                      :page.sync="page3.current"
                      :limit.sync="page3.size"
                      @pagination="fetchUserById3"
                    />
                  </el-card>
                </template>
              </el-tab-pane>

              <el-tab-pane label="认领我的">
                <template>
                  <el-card class="box-card content" shadow="never">
                    <div slot="header" class="has-text-weight-bold">
                      <span>认领我的</span>
                    </div>
                    <div v-if="topics4.length===0">
                      暂无认领
                    </div>
                    <div v-else class="topicUser4-info">
                      <article v-for="(item4, index) in topics4" :key="index" class="media">
                        <div class="media-content">
                          <nav class="level has-text-grey is-size-9">
                            <div class="level-left" @click="showwall(item4.chooseWallid)">
                              <span class="mr-1">
                                表白墙:{{item4.chooseWallid}}<br>
                                对象:{{item4.chooseUserid}}<br>
                                认领时间:{{ dayjs(item4.chooseTime).format("YYYY/MM/DD HH:mm:ss") }}
                              </span>
                            </div>
                          </nav>
                        </div>
                        <div v-if="token" class="media-right">
                          <div v-if="topicUser.username === user.username" class="level">                       
                            <div class="level-item">
                              <a @click="handleDeletechoose(item4.chooseId)">
                                <span class="tag is-danger">删除</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <!--分页-->
                    <pagination
                      v-show="page4.total > 50"
                      class="mt-5"
                      :total="page4.total"
                      :page.sync="page4.current"
                      :limit.sync="page4.size"
                      @pagination="fetchUserById4"
                    />
                  </el-card>
                </template>
              </el-tab-pane>

              <el-tab-pane label="我的收藏">
                <template>
                  <el-card class="box-card content" shadow="never">
                    <div slot="header" class="has-text-weight-bold">
                      <span>我的收藏</span>
                    </div>
                    <div v-if="topics5.length===0">
                      暂无收藏
                    </div>
                    <div v-else class="topicUser5-info">
                      <article v-for="(item5, index) in topics5" :key="index" class="media">
                        <div class="media-content">
                          <nav class="level has-text-grey is-size-9">
                            <div class="level-left" @click="showwall(item5.collectionWallid)">
                              <span class="mr-1">
                                表白墙ID:{{item5.collectionWallid}}<br>
                                收藏于:{{ dayjs(item5.collectionTime).format("YYYY/MM/DD HH:mm:ss") }}
                              </span>
                            </div>
                          </nav>
                        </div>
                        <div v-if="token" class="media-right">
                          <div v-if="topicUser.username === user.username" class="level">                       
                            <div class="level-item">
                              <a @click="handleDeleteColl(item5.id)">
                                <span class="tag is-danger">删除</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <!--分页-->
                    <pagination
                      v-show="page5.total > 50"
                      class="mt-5"
                      :total="page5.total"
                      :page.sync="page5.current"
                      :limit.sync="page5.size"
                      @pagination="fetchUserById5"
                    />
                  </el-card>
                </template>
              </el-tab-pane>
              </el-tabs>
          </div>
      </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { getInfoByName } from '@/api/user'
import { getInfoByNameForReply } from '@/api/user'
import { getInfoByNameForChoose } from '@/api/user'
import { getInfoByNameForBeChoose } from '@/api/user'
import { getInfoByNameForColl } from '@/api/user'
import { updatepass } from '@/api/user'
import { updatesign } from '@/api/user'
import pagination from '@/components/Pagination'
import { deleteTopic } from '@/api/user'
import { deletewall } from '@/api/adminWall/deletewall'
import { deletereply } from '@/api/reply/deletereply'
import { deletecoll } from '@/api/collection/deletecoll'
import { deletechoose } from '@/api/choose/deletechoose'
export default {
components: { pagination },
  name: "whitewall",
  data() {
    //校验两次密码输入是否一致
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
        } else if (value !== this.ruleForm.UserPwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

    return {
      //修改密码返回数据
      ruleForm: {
        userPwd: '',
        userId:this.$route.params.username,
        checkPass:''
        },
      
      //校验密码规则
      rules: {
          UserPwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        },
      //个性签名返回数据
      ruleForm2:{
        userId:this.$route.params.username,
        userSignature:''
      },
      rules2:{
        sign: [
          { required: true, message: '请输入个性签名', trigger: 'blur' },
          {
            min: 2,
            max: 100,
            message: '请输入正确格式的昵称',
            trigger: 'blur'
          }
        ],
      },

      topicUser: {},
      topics: {},
      page: {
        current: 1,
        size: 50,
        total: 0
      },
      topicUser3: {},
      topics3: {},
      page3: {
        current: 1,
        size: 50,
        total: 0
      },
      topicUser2: {},
      topics2: {},
      page2: {
        current: 1,
        size: 50,
        total: 0
      },
      topicUser4: {},
      topics4: {},
      page4: {
        current: 1,
        size: 50,
        total: 0
      },
      topicUser5: {},
      topics5: {},
      page5: {
        current: 1,
        size: 50,
        total: 0
      },


      collectionList:[],
     
      
      tableData1: [{
      }],
      tableData3: [{}],
     
      
    }
  },
  
  computed: {
  ...mapGetters(['token', 'user'])
  },
  
  created(){
    this.fetchUserById()
    this.fetchUserById2()
    this.fetchUserById3()
    this.fetchUserById4()
    this.fetchUserById5()
  },
  methods: {
    //点击收藏的表白墙然后跳转
    showwall(wallId){
      sessionStorage.setItem("wallid",wallId)
      this.$router.push({ path: '/CollectionWall' })
    },
    //修改密码点击提交
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            updatepass(this.ruleForm).then(res => {
              this.$router.go(0)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      

    //修改密码点击重置
    resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    //修改个性签名
    submitForm2(formName2) {
        this.$refs[formName2].validate((valid) => {
          if (valid) {
            alert('submit!');
            updatesign(this.ruleForm2).then(res => {
              this.$router.go(0)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    //修改个性签名点击重置
    resetForm(formName2) {
        this.$refs[formName2].resetFields();
      },



    fetchUserById() {
      getInfoByName(this.$route.params.username, this.page.current, this.page.size).then((res) => {
        const { data } = res
        this.topicUser = data.user
        this.page.current = data.topics.current
        this.page.size = data.topics.size
        this.page.total = data.topics.total
        this.topics = data.topics.records
      })
    },
    fetchUserById2() {
      getInfoByNameForReply(this.$route.params.username, this.page.current, this.page.size).then((res) => {
        const { data } = res
        this.topicUser2 = data.user
        this.page2.current = data.topics.current
        this.page2.size = data.topics.size
        this.page2.total = data.topics.total
        this.topics2 = data.topics.records
      })
    },
    fetchUserById3() {
      getInfoByNameForChoose(this.$route.params.username, this.page.current, this.page.size).then((res) => {
        const { data } = res
        this.topicUser3 = data.user
        this.page3.current = data.topics.current
        this.page3.size = data.topics.size
        this.page3.total = data.topics.total
        this.topics3 = data.topics.records
      })
    },
    fetchUserById4() {
      getInfoByNameForBeChoose(this.$route.params.username, this.page.current, this.page.size).then((res) => {
        const { data } = res
        this.topicUser4 = data.user
        this.page4.current = data.topics.current
        this.page4.size = data.topics.size
        this.page4.total = data.topics.total
        this.topics4 = data.topics.records
      })
    },
    fetchUserById5() {
      getInfoByNameForColl(this.$route.params.username, this.page.current, this.page.size).then((res) => {
        const { data } = res
        this.topicUser5 = data.user
        this.page5.current = data.topics.current
        this.page5.size = data.topics.size
        this.page5.total = data.topics.total
        this.topics5 = data.topics.records
      })
    },

    handleDelete1(id) {
      deletewall(id).then(value => {
        const { code, message } = value
        alert(message)

        if (code === 200) {
          this.$router.go(0)
        }
      })
    },
    handleDeleteReply(id) {
      deletereply(id).then(value => {
        const { code, message } = value
        alert(message)

        if (code === 200) {
          this.$router.go(0)
        }
      })
    },
    handleDeleteColl(id) {
      deletecoll(id).then(value => {
        const { code, message } = value
        alert(message)

        if (code === 200) {
          this.$router.go(0)
        }
      })
    },
    handleDeletechoose(id) {
      deletechoose(id).then(value => {
        const { code, message } = value
        alert(message)

        if (code === 200) {
          this.$router.go(0)
        }
      })
    }



}}
</script>

<style >
.whitewall{
  width: 1100px;
  background-color: #ffffff;
  margin: 5px auto;
  box-shadow: 1px 1px 6px #000000;
  z-index: 100;
  position: relative;
  top: -370px;
}
/*.left{
  width: 100px;
  height: 500px;
  /*border: 2px solid red;*/
  /*margin: 10px;
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
/*/*}*/
.middle{
  width: 100%;
 /* border: 2px solid blue;*/

}
.tabs{
  width: 100%;
  /*border: 2px solid blue;*/
 
}
.tab{
  width: 100%;
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
  .demo-ruleForm{
    width: 500px;
   
  }
</style>




