<template>
  <div>
    <div class="box">🔔{{billboard.userName+",你好！"}}</div>
    <el-button type="primary" class="admin" @click="inadmin">进入管理员界面</el-button>
    
  </div>
</template>

<script>
import{getBillboard} from '@/api/billboard'
export default {
  name: 'Home',
  data(){
    return{
      billboard:{
        userName:'wlx'
      }
    }
  },
  created(){
    this.fetchBillboard()
  },
  methods:{
    async fetchBillboard(){
      getBillboard().then((value) => {
        const { data } = value;
        this.billboard = data
      }
      )
    },
    inadmin(){
      this.$router.push({path:'/Admin'})
    }
  }
}
</script>
