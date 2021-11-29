<template>
    <div class="wallformal" >   
        <div class="headimage">
            <div class="tablewhole">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="对方昵称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="是否隐藏昵称">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option label="是" value="yes"></el-option>
                            <el-option label="否" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="表白标题">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="表白正文">
                        <el-input type="textarea" v-model="form.text"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表白</el-button>
                        <el-button>取消</el-button>
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
import Selector from './Selector.vue'
export default{
  components: { Selector },
    name: "Publishedit",
data() {
      return {
        form: {
          name: '',
          region: '',
          title: '',
          text: '',
        }
      }
    },
    methods: {
      onSubmit() {
       this.$alert('表白成功！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })
        this.$router.push({path:'/Browser'})
      }
    }
  }
</script>



