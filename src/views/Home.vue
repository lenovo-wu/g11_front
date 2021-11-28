<template style="height:2000px">
  <div style="background-color:#ffffff">
    <HomeHeader />

    <Footter />
  </div>
</template>

<script>

import{getBillboard} from '@/api/billboard'
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
