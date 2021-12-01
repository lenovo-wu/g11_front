<template style="height:2000px">
  <div style="background-color:#ffffff">
    <HomeHeader />

    <Footter />
  </div>
</template>

<script>


import HomeHeader from '../components/HomeHeader.vue'
import Footter from '../components/footter.vue'
export default {
  components: { 
    HomeHeader,
    Footter,
     },
  name: 'Home',
  data(){
    return{
      billboard:{
        userName:'wlx'
      }
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
