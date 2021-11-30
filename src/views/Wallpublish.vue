<template style="height:2000px">
  <div style="background-color:#f1f1f1">
    <HomeHeader />
    <Publishedit  />
    <Footterbg />
  </div>
</template>
<script>
import Footterbg from '../components/footterbg.vue'
import HomeHeader from '../components/HomeHeader.vue'
import Publishedit from '../components/Publishedit.vue'
export default {
  components: { 
    HomeHeader,
    Footterbg,
    Publishedit,
     },
  name: 'Wallpublish',
  data(){
    return{
      
    }
  },
  
  methods:{
   
      
    },
  
}
</script>
