<template>
    <div class="wallformal" >   
    <div class="title"> 帮助 </div>  
    <div class="content"> 1.遇到多次输入密码错误的问题？请进入反馈入口，输入你的重置密码请求，您的密码会重置为123456，重置后请及时修改！<br>2.遇到账号被冻结？请进入反馈入口，输入你的学号，说明你的理由，我们会进行核实解冻！<br>3.自己的帖子总是显示违规异常，无法发布？请仔细检查自己发布帖子的内容是否存在不当信息，我们的每一条帖子都会进行违规内容自动筛查，若存在违规内容则无法发布！ </div>  
    </div>

</template>

<style>
.wallformal{
width: 950px;
height: 550px;
background-color: #f3f3f3;
margin: 5px auto;
box-shadow: 1px 1px 6px #000000;
z-index: 100;
position: relative;
top: -370px;
}
.title{
    margin: 10px;
    font-size: 25px;
    font-style: 楷体;
}
.content{
    width: 700px;
    height: 300px;
    text-indent:20px;
    margin: 10px;
    font-size: 20px;
    font-style: 仿宋;
    position: relative;
    left: 100px;
}
</style>


<script>
export default{
  components: {  },
    name: "helpcontent", data() {
      return {
        
      }
    },
    methods: {
      inbroser(){
      this.$router.push({path:'/Browser'})
      },
    
    }
  }
</script>



