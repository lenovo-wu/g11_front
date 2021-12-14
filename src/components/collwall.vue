// 表白墙展示组件
<template>
    <div class="wallformal">
        <div class="walltoname">to: {{wall.wallTo}}</div>
        <div class="walltime">发布时间: {{dayjs(wall.wallTime).format('YYYY-MM-DD HH:mm')}}</div>
        <div class="walltitle">{{wall.wallContenttitle}}</div>
        <div class="walltext">{{wall.wallContent}}</div>
        <div class="wallauthor">作者: {{walluser.userName}}</div>
        <div class="bgbutton btgood" @click="goodopen"> </div>
        <div class="bgbutton btcollection" @click="collectionopen"> </div>
        <div class="bgbutton btcommon" @click="btnClicked"> 

        </div>
        <div class="bgbutton btbad" @click="badopen"> </div>
        <div class="bgbutton btchoose" @click="chooseopen"> </div>
        <Reply :visible="visible" @handleCancle="handleCancle" @handleOk="handleOk" v-bind:wallIdd="wallId" />
    
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
.bgbutton{
  margin: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  vertical-align: top;
  position: relative;
  top: 50px;
}
.btgood{
  z-index: 200;
  background-image: url(../assets/css/good.png);
  background-size: cover;
  position: relative;
  left: 880px;

}
.btbad{
  z-index: 200;
  background-image: url(../assets/css/bad.png);
  background-size: cover;
  position: relative;
  left: 880px;

}
.btcollection{
  z-index: 200;
  background-image: url(../assets/css/collection.png);
  background-size: cover;
  position: relative;
  left: 880px;
}
.btcommon{
  z-index: 200;
  background-image: url(../assets/css/common.png);
  background-size: cover;
  position: relative;
  left: 880px;
}
.btchoose{
  z-index: 200;
  background-image: url(../assets/css/choose.png);
  background-size: cover;
  position: relative;
  left: 880px;
}
.walltime{
  padding: 10px;
  float: right;
  font-size: 10px;
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
  top: 95px;
  left: 180px;
  position: relative;
  color: #000000;
  word-wrap: break-word; 
  word-break: normal; 
  text-indent:20px;
  width: 535px;
  height: 100px;
}
.wallsigntitle{
  color: #000000;
  position: relative;
  top: 225px;
  left: 135px;
  font-style:italic;
}
.wallsignature{
  padding: 10px;
  width: 535px;
  height: 100px;
  word-wrap: break-word; 
  word-break: normal; 
  text-indent:20px;
  color: #000000;
  position: relative;
  top: 230px;
  left: 180px;
  font-style:italic;
}
.wallauthor{
  float:right;
  width: 200px;
  height: 60px;
  background-color: #f5f5f5;
  color: #000000;
  position: relative;
  font-size: 20px;
  top: 240px;
  right: 50px;
}

</style>


<script>
  import {insertChoose} from '@/api/choose/choose'
import {insertCollection} from '@/api/collection/collection'
import {update} from '@/api/adminWall/updatewall'
import{getInfo} from '@/api/user'
import{getuser} from '@/api/user'
import Selector from './Selector.vue'
import Reply from './Reply.vue'
import { mapGetters } from 'vuex'
import {loadOneWall} from '@/api/user'
export default{
  components: { Selector, Reply },
    name: "wallformal",
data(){
    return{
      visible: false,
      wallId:1,
      auserId:'31901211',
      wall:{
        
        wallTo: '',
        wallContent: ''

    },
    tableData: [

      ],
      orderKey:3,
      walluser:{
        userSignature:'',
        userName:'',
      },
      collection:{
        collectionId:1,
        collectionWallid:1,
        collectionUserid:'12121212',
      },
      choose:{
        chooseId:1,
        chooseWallid:1,
        chooseUserid:'12121212',
        chooseBeuserid:'12121212',
        chooseState:'未认领'
      },
    }
  },
  created(){
    this.LoadOneWall()
    this.fetchUser()
  },
  computed: {
    ...mapGetters(['token', 'user'])
  },
  methods:{
    LoadOneWall(){
      console.log("1") 
       console.log(sessionStorage.getItem("wallid"))  
        loadOneWall(sessionStorage.getItem("wallid")).then(value => {
        console.log(value)   
        console.log("2")  
        this.wall=value.data
        console.log(value)
        console.log(this.wall.wallTo)  
        this.fetchUser(this.wall.wallUserid)
        })
    },
    goodopen() {
        this.wall.wallGood++
        update(this.wall).then(value => {
        console.log(value)
      }
      )
        this.$alert('点赞成功！', '提示', {
          confirmButtonText: '确定',
          
        })
      },  
    badopen() {
      this.wall.wallReport++
      update(this.wall).then(value => {
      console.log(value)
    }
    )
      this.$alert('举报成功！', '提示', {
        confirmButtonText: '确定',
      })
    },
    collectionopen() {
      this.wall.wallCollection++
      update(this.wall).then(value => {
      console.log(value)
    }
    )
      insertCollection(this.collection).then(value => {
        console.log(value)
      }
      )
      this.$alert('收藏成功！', '提示', {
        confirmButtonText: '确定',
      })
    },
    chooseopen() {
      insertChoose(this.choose).then(value => {
        console.log(value)
      }
      )
      this.$alert('认领成功！', '提示', {
        confirmButtonText: '确定',
      })
    },
    fetchUserinfo(){
    getInfo().then((value) => {
      const { data } = value;
      this.billboard = data
    }
    )
  },
  fetchUser(ada){
    getuser(ada).then(value => {
      console.log("0"+value)   
      this.walluser.userName = value.data[0].userName
      this.walluser.userSignature = value.data[0].userSignature
      console.log("1"+this.walluser.userName)
    }
    )
  },
  btnClicked(){
    this.visible=true
  },
  handleCancle(){
    this.visible=false
  },
  handleOk(){
    this.visible=false
  }
}
  }

</script>



