<!-- 个人中心页面  引入个人中心头部、个人中心资料界面 -->


<template style="height:2000px">
    <div style="background-color:#ffffff">
      <HomeHeader />
      <UserhomeWall />
      <Footter />
    </div>
  </template>

  <script>
      import Footter from '../components/footter.vue'
      import HomeHeader from '../components/HomeHeader.vue'
      import UserhomeWall from '../components/UserhomeWall.vue'

      export default {
        components: { 
            HomeHeader,
            UserhomeWall,
            Footter,
         },
        name: 'Userhome',
        data(){
        return{
      
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
