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
                          :data="tableData"
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
                                </el-form>
                            </template>
                          </el-table-column>
                        </el-table>
                      </template>
                </el-tab-pane>
                <el-tab-pane label="修改密码">修改密码user.userState</el-tab-pane>
                <el-tab-pane label="我的收藏">我的收藏</el-tab-pane>
                <el-tab-pane label="我的点赞">我的点赞</el-tab-pane>
                <el-tab-pane label="我的评论">
                    我的评论
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
      return {
        tableData: [{
        }],

        tableData1: [{
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987126',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }]

      }
    },
    computed: {
    ...mapGetters(['token', 'user'])
    },

  
}
</script>

<style >
.whitewall{
    width: 1100px;
    height: 550px;
    background-color: #f3f3f3;
    margin: 5px auto;
    box-shadow: 1px 1px 6px #000000;
    z-index: 100;
    position: relative;
    top: -370px;
}
.left{
    width: 100px;
    height: 500px;
    border: 2px solid red;
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
    border: 2px solid red;
}
.middle{
    width: 960px;
    height: 500px;
    border: 2px solid blue;
    float: right;
    margin: 10px;

}
.tabs{
    width: 900px;
    padding: 20px;
    border: 2px solid blue;
    margin: 20px;
}
.tab{
    width: 900px;
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



  
  