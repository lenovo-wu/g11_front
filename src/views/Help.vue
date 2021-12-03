<template style="height:2000px">
  <div style="background-color:#f5f5f5">
    <HomeHeader />
    <Helpcontent />
    <Footterbg />
  </div>
</template>
<script>
import Footterbg from '../components/footterbg.vue'
import Helpcontent from '../components/helpcontent.vue'
import HomeHeader from '../components/HomeHeader.vue'
export default {
  components: { 
    HomeHeader,
    Helpcontent,
    Footterbg,
   
     },
  name: 'Help',
  data(){
    return{
      
    }
  },
  
  methods:{
   
      
    },
  
}
</script>
