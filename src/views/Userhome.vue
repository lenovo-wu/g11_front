<template style="height:2000px">
    <div style="background-color:#ffffff">
      <UserhomeHeader />
      <UserhomeWall />
    </div>
  </template>

  <script>
      import UserhomeHeader from '../components/UserhomeHeader.vue'
      import UserhomeWall from '../components/UserhomeWall.vue'

      export default {
        components: { 
            UserhomeHeader,
            UserhomeWall,
         },
        name: 'Userhome',
        data(){
        return{
      
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
