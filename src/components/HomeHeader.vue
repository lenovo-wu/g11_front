// 用户所有界面共用头部，包含帮助、反馈、进入管理员界面、返回主页等组件
<template>
    <div class="container">
        <div style="width: 300px; padding-left:80px; font-size:10px; color:#FFFFFF; cursor: pointer;" class="item1" @click="inhome">欢迎来到城院表白墙</div>
        <span class="spancss spancss1" @click="inadmin">管理员入口<i class="item"></i></span>
        <span class="spancss spancss2" @click="inpublish">发布表白墙<i class="item"></i></span>
        <span class="spancss spancss3" @click="infeedback">反馈入口<i class="item"></i></span>
        <span class="spancss spancss4" @click="inrank">💖十大表白<i class="item"></i></span>

        <div v-if="token != null && token !== ''" class="spancss spancss">
          <el-dropdown class="userhome-meum">
            
            <span class="el-dropdown-link">
              {{user.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >
                <b-navbar-item tag="router-link" :to="{ path: `/${user.userId}/home` }" class="userhome-door">
                个人中心
                </b-navbar-item>
              </el-dropdown-item>
              <el-dropdown-item>
                <b-navbar-item tag='a' @click='logout'>
                退出登录
                </b-navbar-item
              ></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!--
          <b-navbar-item class='auserhome' tag="router-link" :to="{ path: `/${user.userId}/home` }">
          {{user.userName}}的个人中心
          </b-navbar-item>
          <b-navbar-item class='logout' tag='a' @click='logout'>
            退出登录
          </b-navbar-item>-->
        </div>  
        
        <div v-else class="spancss spancss"><span class="userhome-meum" @click="tologin">🔔{{billboard.userName+",请登录！"}}<i class="item"></i></span></div>
        
        
        <span class="spancss spancss6" @click="tohelp">帮助<i class="item"></i></span>
        <div class="item2">ZUCC城院表白墙</div>
         <el-button type="danger" round class="buttonbrowser" @click="inbroser">进入浏览</el-button>
         

    </div>

    
</template>

<script>


import { mapGetters } from 'vuex'
import { logout } from '@/api/auth/auth'
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
    
  },
  computed: {
    ...mapGetters(['token', 'user'])
  },
  methods:{
    async logout() {
      this.$store.dispatch('user/logout').then(() => {
        this.$message.info('退出登录成功')
        setTimeout(() => {
          this.$router.push({ path: this.redirect || '/' })
        }, 500)
      })
    },
    inadmin(){
      if(this.user.userJurisdiction=="管理员"){
        console.log(this.user.userState)
        this.$router.push({path:'/Admin'})
        alert('您好！管理员 '+this.user.userName);
      }
      else{
        alert('你不是管理员!');
        console.log(this.user.userJurisdiction)
      }
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
    inrank(){
      this.$router.push({path:'/Rank'})
    },
    touserhome(){
      this.$router.push({path:'/${user.userId}/home'})
    },
    tohelp(){
      this.$router.push({path:'/Help'})
    }
  },
  
  
}
</script>

<style >
  .auserhome{
    position: absolute;
    width: 80px;
    color: white;
    top: 1px;
    right: 220px;
    margin: 0;
    padding: 0;

  }
  .logout{
    position: absolute;
    width: 50px;
    color: white;
    top: 1px;
    right: 170px;
    margin: 0;
    padding: 0;
  }
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
    left: 980px;
    position: absolute;
}
.spancss6{
    left: 1100px;
    position: absolute;
}
.buttonbrowser{
    position: absolute;
    left: 630px;
    top: 230px;
    background-color: #dd3636;
}
.userhome-meum{
  right:100px;
  position: absolute;
}
.el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
