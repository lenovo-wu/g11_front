<!-- 个人中心页面  引入个人中心头部、个人中心资料界面 -->


<template style="height:2000px">
    <div style="background-color:#ffffff">
      <HomeHeader />
      <UserhomeWall />
      <Footter2 />
    </div>
  </template>

  <script>
      import Footter2 from '../components/footter2.vue'
      import HomeHeader from '../components/HomeHeader.vue'
      import UserhomeWall from '../components/UserhomeWall.vue'

      export default {
        components: { 
            HomeHeader,
            UserhomeWall,
            Footter2,
         },
        name: 'Userhome',
        data(){
        return{
      
        }
      },
     created(){
  
     },
     methods:{
         
    inadmin(){
      this.$router.push({path:'/Admin'})
    }
  }
}

  </script>
