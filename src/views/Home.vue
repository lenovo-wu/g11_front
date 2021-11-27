<template>
  <div style="background-color:#fcf1f1">
    <HomeHeader />
    <WallExample />
  </div>
</template>

<script>

import{getBillboard} from '@/api/billboard'
import HomeHeader from '../components/HomeHeader.vue'
import WallExample from '../components/WallExample.vue'
export default {
  components: { 
    HomeHeader,
    WallExample,
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
