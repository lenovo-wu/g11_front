// 浏览界面，用于展示浏览
<template style="height:2000px">
  <div style="background-color:#f5f5f5">
    <HomeHeader />
    <collwall />
    <Footterbg />

    
  </div>
</template>
<script>
import Footterbg from '../components/footterbg.vue'
import HomeHeader from '../components/HomeHeader.vue'
import collwall from '../components/collwall.vue'
export default {
  components: { 
    HomeHeader,
    collwall,
    Footterbg,
     },
  name: 'CollectionWall',
  data(){
    return{
      
    }
  },
  
  methods:{
   
      
    },
  
}
</script>
