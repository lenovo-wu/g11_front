<template>
    <div class="wallformal" >
        <div class="walltoname">{{"to: "+wall.wallTo}}</div>
        <div class="walltime">{{"发布时间: "+wall.wallTime}}</div>
        <div class="walltitle">{{wall.wallContenttitle}}</div>
        <div class="walltext">{{wall.wallContent}}</div>
        <div class="wallauthor">{{"作者: "+billboard.userName}}</div>
        <div class="wallsigntitle">签名</div>
        <div class="wallsignature">{{billboard.userSignature}}</div>

    </div>
</template>

<style>
.wallformal{
width: 950px;
height: 550px;
background-color: #f5f5f5;
margin: 5px auto;
box-shadow: 1px 1px 6px #000000;
z-index: 100;
position: relative;
top: -370px;
}
.walltime{
  padding: 10px;
  float: right;
  font-size: 25px;
  font-style: 宋体;
  color: #000000;
  font-weight: bold;
}
.walltoname{
  padding: 10px;
  float: left;
  font-size: 25px;
  font-style: 宋体;
  color: #000000;
  font-weight: bold;
}
.walltitle{
  padding: 10px;
  position: relative;
  top: 100px;
  left: 25px;
  font-weight: bold;
  font-size: 25px;
  font-style: 楷体;
  color: #000000;
  position: relative;
}
.walltext{
  top: 100px;
  left: 180px;
  position: relative;
  color: #000000;
  word-wrap: break-word; 
  word-break: normal; 
  text-indent:20px;
  width: 500px;
  height: 100px;
  background-color: #ffffff;
}
.wallsigntitle{
  color: #000000;
  position: relative;
  top: 90px;
  left: 145px;
  font-style:italic;
}
.wallsignature{
  padding: 10px;
  width: 535px;
  height: 100px;
  word-wrap: break-word; 
  word-break: normal; 
  text-indent:20px;
  background-color: #ffffff;
  color: #000000;
  position: relative;
  top: 90px;
  left: 145px;
  font-style:italic;
}
.wallauthor{
  float:right;
  width: 100px;
  height: 60px;
  background-color: #ffffff;
  color: #000000;
  position: relative;
  top: 220px;
  right: 180px;
  

}
</style>



<script>
// import{getSignature} from '@/api/billboard'
import{getBillboard} from '@/api/billboard'
// import {getWalltime} from '../api/wall/wall'
// import {getWallcontent} from '../api/wall/wall'
import {getWallall} from '../api/wall/wall'
export default{
    name: "Wallformal",
data(){
    return{
      wall:
      {
        wallTime:'2021-11-27',
        wallContent:'examplecontent111111111111111111111111111111111111111111111111111111',
        wallContenttitle:'walltitle1',
        wallTo:'牛魔王',
        wallUserid:'userid',
      },
      billboard:{
        userSignature:'abcsassdfsdgsdgsdgsddddddddddfsdfffffffffffffffffffsdfdsfsd水电费会计核算的开发SDK劲夫和看',
        userName:'wlx',
      }
    }
  },
  created(){
    this.fetchWallall()
    // this.fetchWallcontent()
    // this.fetchWalltitle()
    this.fetchBillboard()
    // this.fetchUsersignature()
    // this.fetchWallto()
  },
  methods:{
    async fetchWallall(){
      getWallall().then((value) => {
        const { data } = value;
        this.wall = data
      }
      )
    },
  //   async fetchUsersignature(){
  //     getSignature().then((value) => {
  //       const { data } = value;
  //       this.billboard = data
  //     }
  //     )
  //   },
  //   async fetchWallcontent(){
  //     getWallcontent().then((value) => {
  //       const { data } = value;
  //       this.wall = data
  //     }
  //     )
  //   },
  //   async fetchWalltitle(){
  //     getWalltitle().then((value) => {
  //       const { data } = value;
  //       this.wall = data
  //     }
  //     )
  //   },
    async fetchBillboard(){
      getBillboard().then((value) => {
        const { data } = value;
        this.billboard = data
      }
      )
    },
  //   async fetchWallto(){
  //     getWalltowho().then((value) => {
  //       const { data } = value;
  //       this.wall = data
  //     }
  //     )
  //   },
  //   inadmin(){
  //     this.$router.push({path:'/Admin'})
  //   }
  // }
}
}
</script>



