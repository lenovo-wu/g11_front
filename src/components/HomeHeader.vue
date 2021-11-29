<template>
    <div class="container">
        <div style="width: 300px; padding-left:80px; font-size:10px; color:#FFFFFF; cursor: pointer;" class="item1" @click="inhome">欢迎来到城院表白墙</div>
        <span class="spancss spancss1" @click="inadmin">管理员入口<i class="item"></i></span>
        <span class="spancss spancss2" @click="inpublish">发布表白墙<i class="item"></i></span>
        <span class="spancss spancss3" @click="infeedback">反馈入口<i class="item"></i></span>
        <span class="spancss spancss4">💖十大表白<i class="item"></i></span>
        
        <div v-if="token != null && token !== ''" class="spancss spancss">
          <span class="spancss spancss5" @click="touserhome">个人中心<i class="item"></i></span>
        </div>
        
        <div v-else class="spancss spancss"><span class="spancss spancss5" @click="tologin">🔔{{billboard.userName+",请登录！"}}<i class="item"></i></span></div>
        
        
        <span class="spancss spancss6">❔帮助<i class="item"></i></span>
        <div class="item2">ZUCC城院表白墙</div>
         <el-button type="danger" round class="buttonbrowser" @click="inbroser">进入浏览</el-button>
         

    </div>

    
</template>

<script>


import { mapGetters } from 'vuex'



import{getBillboard} from '@/api/billboard'

export default {
  components: {  },
    name: "HomeHeader",
    data(){
    return{
      billboard:{
        userName:'游客'
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
    },
    infeedback(){
      this.$router.push({path:'/Feedback'})
    },
    inhome(){
      this.$router.push({path:'/'})
    },
    tologin(){
      this.$router.push({path:'/Login'})},
    inbroser(){
      this.$router.push({path:'/Browser'})
    },
    inpublish(){
      this.$router.push({path:'/Wallpublish'})
    },
    touserhome(){
      this.$router.push({path:'/Userhome'})
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'user'
    ])
  }
}
</script>

<style >
.container{
   width: 1920px;
   height: 540px;
   background-image: url(../assets/css/bg_1.png);
   background-repeat:no-repeat;    
   background-position:50% ;

}
.spancss{
    color: #FFFFFF;
    font-size: 10px;
    cursor: pointer;
}
.item1{
    float: left;

}
.item2{
    position: relative;
    color: #FFFFFF;
    font-size: 25px;
    left: 300px;
    top: 170px;

}
.spancss1{
    left: 400px;
    position: absolute;

}
.spancss2{
    left: 500px;
    position: absolute;
}
.spancss3{
    left: 600px;
    position: absolute;
}
.spancss4{
    left: 700px;
    position: absolute;
}
.spancss5{
    left: 1100px;
    position: absolute;
}
.spancss6{
    left: 1200px;
    position: absolute;
}
.buttonbrowser{
    position: absolute;
    left: 630px;
    top: 230px;
    background-color: #dd3636;
}
</style>
