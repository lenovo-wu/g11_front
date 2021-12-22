// 页脚背景，设置颜色，防止与大背景颜色重合
<template>
    <div class="footterbg">
        

    </div>

    
</template>

<script>


export default {
  components: {  },
    name: "Footterbg",
    data(){
    return{
      
    }
  },

  methods:{
}
}
</script>

<style >
.footterbg{
  width: 1200px;
  height: 840px;
  background-image: url(../assets/css/rainylove.png);
  /* background-repeat:repeat-x; */
  background-position: 50%;
  margin:0 auto;
  position: relative;
  top: -560px;
  z-index: 10;

}

</style>
