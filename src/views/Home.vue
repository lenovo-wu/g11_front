<template>
  <div>
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="box">🔔{{billboard.userName+",你好！"}}</div>
    <el-button type="primary" class="admin" @click="inadmin">进入管理员界面</el-button>
    
=======
    <HomeHeader />
>>>>>>> 50a64eb777c2d01f332d407c994274ae6a0a4294
=======
    <HomeHeader />
>>>>>>> 50a64eb777c2d01f332d407c994274ae6a0a4294
  </div>
</template>

<script>

import{getBillboard} from '@/api/billboard'
import HomeHeader from '../components/HomeHeader.vue'
export default {
  components: { HomeHeader },
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
