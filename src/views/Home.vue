<template>
  <div>
    <HomeHeader />
  </div>
</template>

<script>

import{getBillboard} from '@/api/billboard'
import HomeHeader from '../components/HomeHeader.vue'
export default {
  components: { HomeHeader },
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
