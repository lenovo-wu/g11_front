// 表白墙展示组件
<template>
    <div class="wallformal" >
        <div class="walltoname">{{"to: "+tableData[0].wallTo}}</div>
        <div class="walltime">{{"发布时间: "+tableData[0].wallTime}}</div>
        <div class="walltitle">{{tableData[0].wallContenttitle}}</div>
        <div class="walltext">{{tableData[0].wallContent}}</div>
        <div class="wallauthor">{{"作者: "+walluser.userName}}</div>
        <div class="wallsigntitle">个性签名</div>
        <div class="wallsignature">{{walluser.userSignature}}</div>
        <div class="bgbutton btgood" @click="goodopen"> </div>
        <div class="bgbutton btcollection" @click="collectionopen"> </div>
        <div class="bgbutton btcommon"> </div>
        <div class="bgbutton btbad" @click="badopen"> </div>
        <div class="bgbutton btchoose" @click="chooseopen"> </div>
        <div style="margin:10px 0" class="pagetransform">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="this.page.currentpage"
            :page-sizes="[1]"
            :page-size="this.page.pagesize"
            :total="this.page.total"
            layout="prev, pager, next, total,  jumper"
            >
          </el-pagination>
        </div>
        <Selector />
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
  margin: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  vertical-align: top;
  position: relative;
  top: -50px;
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
  top: 95px;
  left: 180px;
  position: relative;
  color: #000000;
  word-wrap: break-word; 
  word-break: normal; 
  text-indent:20px;
  width: 535px;
  height: 100px;
  background-color: #e9e9e9;
}
.wallsigntitle{
  color: #000000;
  position: relative;
  top: 95px;
  left: 125px;
  font-style:italic;
}
.wallsignature{
  padding: 10px;
  width: 535px;
  height: 100px;
  word-wrap: break-word; 
  word-break: normal; 
  text-indent:20px;
  background-color: #e9e9e9;
  color: #000000;
  position: relative;
  top: 100px;
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
.pagetransform{
  position: relative;
  bottom: 40px;
  left: 200px;
}

</style>


<script>
import {insertChoose} from '@/api/choose/choose'
import {insertCollection} from '@/api/collection/collection'
import {update} from '@/api/adminWall/updatewall'
import{getInfo} from '@/api/user'
import{getuser} from '@/api/user'
import { mapGetters } from 'vuex'
import {loadAllwall} from '@/api/wall/loadwall'
import Selector from './Selector.vue'
export default{
  components: { Selector },
    name: "Wallformal",
data(){
    return{
      wallId:1,
      auserId:'31901211',
      page:{
        total:0,
        pagesize:1,
        currentpage:1,
        search:''
      },
      tableData: [

      ],
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
    this.loadAllwall()
    this.fetchUser()
  },
  computed: {
    ...mapGetters(['token', 'user'])
  },
  methods:{
    loadAllwall(){
      loadAllwall(this.currentpage,this.pagesize,this.search).then(res=>{
        console.log(res);   
        this.tableData =res.data.records
        this.page.total=res.data.total

        this.wallId=res.data.records[0].wallId
        this.collection.collectionWallid=res.data.records[0].wallId
        this.choose.chooseWallid=res.data.records[0].wallId

        console.log(this.wallId);
        console.log(this.collectionWallid);

        this.auserId=res.data.records[0].wallUserid
        this.collection.collectionUserid=this.user.userId
        this.choose.chooseUserid=this.user.userId
        this.choose.chooseBeuserid=res.data.records[0].wallUserid
        console.log(this.auserId)
        this.fetchUser(res.data.records[0].wallUserid)
      })
      
    },
    handleCurrentChange(pageNum){  //改变当前页码触发
      this.currentpage=pageNum
      this.loadAllwall()
      
      
    },
    goodopen() {
        this.tableData[0].wallGood++
        update(this.tableData[0]).then(value => {
        console.log(value)
      }
      )
        this.$alert('点赞成功！', '提示', {
          confirmButtonText: '确定',
          
        })
      },  
    badopen() {
      this.tableData[0].wallReport++
      update(this.tableData[0]).then(value => {
      console.log(value)
    }
    )
      this.$alert('举报成功！', '提示', {
        confirmButtonText: '确定',
      })
    },
    collectionopen() {
      this.tableData[0].wallCollection++
      update(this.tableData[0]).then(value => {
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
      console.log(value)   
      this.walluser.userName = value.data[0].userName
      this.walluser.userSignature = value.data[0].userSignature
      console.log(this.walluser.userName)
    }
    )
  }
}
}
</script>



