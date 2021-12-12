// 十大表白，暂未制作
<template style="height:2000px">
  <div style="background-color:#f5f5f5">
    <HomeHeader />
    <WallRank />
    <Footterbg />
  </div>
</template>
<script>
import Footterbg from '../components/footterbg.vue'
import HomeHeader from '../components/HomeHeader.vue'
import WallRank from '../components/WallRank.vue'
export default {
  components: { 
    HomeHeader,
    Footterbg,
    WallRank,
     },
  name: 'Rank',
  data(){
    return{
      
    }
  },
  
  methods:{
   
      
    },
  
}
</script>
