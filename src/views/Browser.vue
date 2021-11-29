<template style="height:2000px">
  <div style="background-color:#f1f1f1">
    <HomeHeader />
    <WallFormal />
    <Footterbg />
  </div>
</template>
<script>
import Footterbg from '../components/footterbg.vue'
import HomeHeader from '../components/HomeHeader.vue'
import WallFormal from '../components/WallFormal.vue'
export default {
  components: { 
    HomeHeader,
    WallFormal,
    Footterbg,
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
