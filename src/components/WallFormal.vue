<template>
    <div class="wallformal" >
        <div class="walltoname">{{"to: "+tableData[0].wallTo}}</div>
        <div class="walltime">{{"发布时间: "+tableData[0].wallTime}}</div>
        <div class="walltitle">{{tableData[0].wallContenttitle}}</div>
        <div class="walltext">{{tableData[0].wallContent}}</div>
        <div class="wallauthor">{{"作者: "+billboard.userName}}</div>
        <div class="wallsigntitle">个性签名</div>
        <div class="wallsignature">{{billboard.userSignature}}</div>
        <div class="bgbutton btgood" @click="goodopen"> </div>
        <div class="bgbutton btcollection" @click="collectionopen"> </div>
        <div class="bgbutton btcommon"> </div>
        <div class="bgbutton btbad" @click="badopen"> </div>
        <div class="bgbutton btchoose" @click="chooseopen"> </div>
        <div style="width:220px;position:relative;bottom:43px;left:50px">
          <el-input v-model="search" placeholder="以用户id查找"  clearable="" style="float:left;width:130px"></el-input>
          <el-button type="primary" style="float:right;width:80px" @click="loadAllwall">查询</el-button>
        </div>
        <div style="margin:10px 0" class="pagetransform">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[1]"
            :page-size="pageSize"
            Wallformal="total, sizes, prev, pager, next, jumper"
            :total="total">
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
  left: 250px;
}
</style>


<script>
import{getBillboard} from '@/api/billboard'
import {getWallall} from '../api/wall/wall'
import {loadAllwall} from '@/api/wall/loadwall'
import Selector from './Selector.vue'
export default{
  components: { Selector },
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
      },
      page:{
        total:'',
        pagesize:1,
        currentpage:1,
        search:''
      },
      tableData: [

      ]
    }
  },
  created(){
    this.loadAllwall()
    this.fetchWallall()
    this.fetchBillboard()
    
  },
  methods:{
    // async fetchWallall(){
    //   getWallall().then((value) => {
    //     const { data } = value;
    //     this.wall = data
    //   }
    //   )
    // },
    loadAllwall(){
      loadAllwall(this.currentPage,this.pageSize,this.search).then(res=>{
        console.log(res);        
        this.tableData =res.data.records
        this.page.total=res.data.total
      })
    },
    goodopen() {
        this.$alert('点赞成功！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })
      },
      badopen() {
        this.$alert('举报成功！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })
      },
      collectionopen() {
        this.$alert('收藏成功！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })
      },
      chooseopen() {
        this.$alert('认领成功！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })
      },
    async fetchBillboard(){
      getBillboard().then((value) => {
        const { data } = value;
        this.billboard = data
      }
      )
    },
}
}
</script>



