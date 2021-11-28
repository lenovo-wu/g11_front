<template>
    <div class="wallexample" >
        

    </div>
</template>

<style>
.wallexample{
width: 950px;
height: 480px;
background-color: #FFFFFF;
position: relative;
margin: auto;
}
</style>



<script>

export default{
    name: "WallExample",
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



