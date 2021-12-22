// 浏览界面，用于展示浏览
<template style="height:2000px">
  <div style="background-color:#f5f5f5">
    <HomeHeader />
    <WallFormal />
    <Footter />

    
  </div>
</template>
<script>
import Footter from '../components/footter.vue'
import HomeHeader from '../components/HomeHeader.vue'
import WallFormal from '../components/WallFormal.vue'
export default {
  components: { 
    HomeHeader,
    WallFormal,
    Footter,
     },
  name: 'Browser',
  data(){
    return{
      
    }
  },
  
  methods:{
   
      
    },
  
}
</script>
