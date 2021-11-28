<template>
    <div class="wallexample" >
        <div class="exampletoname">{{"to: "+billboard.userName}}</div>
        <div class="exampletime">{{"发布时间: "+wall.wallTime}}</div>
        <div class="exampletitle">{{wall.wallTitle}}</div>
        <div class="exampletext">{{wall.wallContent}}</div>
        <div class="exampleauthor">{{"作者"+billboard.userName}}</div>
        <div class="examplesign">{{"签名"+billboard.userSignature}}</div>

    </div>
</template>

<style>
.wallexample{
width: 950px;
height: 450px;
background-color: #FFFFFF;
margin: 5px auto;
box-shadow: 1px 1px 6px #000000;

}
.exampletime{
  padding: 10px;
  float: right;
  font-size: 25px;
  font-style: 宋体;
  color: #000000;
  font-weight: bold;
}
.exampletoname{
  padding: 10px;
  float: left;
  font-size: 25px;
  font-style: 宋体;
  color: #000000;
  font-weight: bold;
}
.exampletitle{
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
.exampletext{
  top: 100px;
  left: 180px;
  position: relative;
  color: #FFFFFF;
  word-wrap: break-word; 
  word-break: normal; 
  text-indent:20px;
  width: 500px;
  height: 200px;
  background-color: #000000;
}
.examplesign{
  width: 500px;
  height: 200px;
  background-color: #000000;
  color: #FFFFFF;
  position: relative;
  top: 100px;
  left: 25px;
}
</style>



<script>
import{getSignature} from '@/api/billboard'
import{getBillboard} from '@/api/billboard'
import {getWalltime} from '../api/wall/wall'
import {getWallcontent} from '../api/wall/wall'
import {getWalltitle} from '../api/wall/wall'
export default{
    name: "WallExample",
data(){
    return{
      wall:{
        wallTime:'2021-11-28',
        wallContent:'examplecontent111111111111111111111111111111111111111111111111111111',
        wallTitle:'exampletitle1'
      },
      billboard:{
        userSignature:'abc',
        userName:'wlx',
      }
    }
  },
  created(){
    this.fetchWalltime()
    this.fetchWallcontent()
    this.fetchWalltitle()
    this.fetchBillboard()
    this.fetchUsersignature()
  },
  methods:{
    async fetchWalltime(){
      getWalltime().then((value) => {
        const { data } = value;
        this.wallTime = data
      }
      )
    },
    async fetchUsersignature(){
      getSignature().then((value) => {
        const { data } = value;
        this.userSignature = data
      }
      )
    },
    async fetchWallcontent(){
      getWallcontent().then((value) => {
        const { data } = value;
        this.wallContent = data
      }
      )
    },
    async fetchWalltitle(){
      getWalltitle().then((value) => {
        const { data } = value;
        this.wallTitle = data
      }
      )
    },
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



