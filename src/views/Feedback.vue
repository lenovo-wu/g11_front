<template style="height:2000px">
  <div style="background-color:#f1f1f1">
    <HomeHeader />
    <Feededit />
    <Footterbg />
  </div>
</template>
<script>
import Footterbg from '../components/footterbg.vue'
import HomeHeader from '../components/HomeHeader.vue'
import Feededit from '../components/Feededit.vue'
export default {
  components: { 
    HomeHeader,
    Footterbg,
    Feededit,
     },
  name: 'Feedback',
  data(){
    return{
      
    }
  },
  
  methods:{
   
      
    },
  
}
</script>
