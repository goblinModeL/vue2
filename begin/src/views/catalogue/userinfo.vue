

<template>
  <div class="father">
   <div class="left">
    <div v-if="type===1&&orgid!=1" class="form">
      <span class="MZ">本测试来自《中医体质分类与判定》国家标准</span>
      <span class="box">
          <span>
           请根据近一年的体验和感觉，回答以下问题
          </span>
          <span class="box-ch">
       <span>没有</span>
     <el-divider direction="vertical"></el-divider>
    <span> 很少</span>
    <el-divider direction="vertical"></el-divider>
    <span> 有时</span>
   <el-divider direction="vertical"></el-divider>
    <span> 经常</span>
              <el-divider direction="vertical"></el-divider>
    <span> 总是</span>

          </span>
          </span>
      <div v-for="(item,index) in List" class="List">
        <el-divider content-position="left">{{ListName[index]}}</el-divider>
      <span v-for="(value,ls) in item" class="list-ch">
        <span class="name">{{value}}</span>
        <span>
         <el-radio-group v-model="radio[index][ls]" style="margin-left: 10px">
      <el-radio-button label="1"></el-radio-button>
      <el-radio-button label="2"></el-radio-button>
      <el-radio-button label="3"></el-radio-button>
      <el-radio-button label="4"></el-radio-button>
                 <el-radio-button label="5"></el-radio-button>
    </el-radio-group>
        </span>
      </span>
      </div>
      <div class="button">
        <el-button type="warning" @click="rest" plain style="width: 100px">重置</el-button>
      <el-button type="primary" @click="sendTZ" plain style="width: 100px">提交</el-button>

      </div>
      </div>
     <div v-if="type==2&&orgid!=1" class="box">
       <el-table
         v-loading="loading"
         :data="tableData"
         stripe
         style="width: 80%"
       max-height="500px">
         <el-table-column
           prop="proTitle"
           label="问题标题"
           width="180">
         </el-table-column>
         <el-table-column
           prop="mes"
           label="内容"
           min-width="180">
         </el-table-column>
         <el-table-column
           prop="starttime"
           label="时间">
         </el-table-column>
         <el-table-column label="操作">
           <template slot-scope="scope">
             <el-button
               size="mini"
               type="danger"
               @click="handleDelete(scope.row)">删除</el-button>
           </template>
         </el-table-column>
       </el-table>
     </div>
     <div v-if="type==2&&orgid==1" class="box">
       <el-table
         v-loading="loading"
         :data="tableData"
         stripe
         style="width: 80%"
         max-height="500px">
         <el-table-column
           prop="proTitle"
           label="问题标题"
           width="180">
         </el-table-column>
         <el-table-column
           prop="mes"
           label="内容"
           min-width="180">
         </el-table-column>
         <el-table-column
           prop="starttime"
           label="时间">
         </el-table-column>
         <el-table-column label="操作">
           <template slot-scope="scope" >
             <div style="display: flex;flex-direction: row">
             <el-button
               size="mini"
               type="primary"
               @click="handleDelete1(scope.row)">通过</el-button>
             <el-button
               size="mini"
               type="danger"
               @click="rejectQ(scope.row)">拒绝</el-button>
             </div>
           </template>
         </el-table-column>
       </el-table>
     </div>
     <div v-if="type==3&&orgid==1" class="box">



       <el-table
         v-loading="loading"
         :data="tableData"
         stripe
         style="width: 80%"
         max-height="500px">
         <el-table-column
           prop="username"
           label="用户名"
           width="180">
         </el-table-column>
         <el-table-column
           prop="problemList.anMes"
           label="内容"
           min-width="180">
         </el-table-column>
         <el-table-column
           prop="finishtime"
           label="时间">
         </el-table-column>
         <el-table-column label="操作">
           <template slot-scope="scope" >
             <div style="display: flex;flex-direction: row">
               <el-button
                 size="mini"
                 type="primary"
                 @click="handleDelete2(scope.row)">通过</el-button>
               <el-button
                 size="mini"
                 type="danger"
                 @click="rejectQ2(scope.row)">拒绝</el-button>
             </div>
           </template>
         </el-table-column>
       </el-table>
     </div>
    </div>

    <div class="right">
      <span class="text" v-if="orgid!=1">最近一次体质:
            <span v-if="type!=0">{{time.slice(0,10)}}</span>
          <span v-if="type!=0">{{ListName[bodyType-1]}}</span>
        <span v-if="type==0">暂无体质数据</span>

      </span>
      <span v-if="orgid!=1" @click="ChangeType(1)" :class="{choose:type===1}">体质辨析</span>
      <span  @click="ChangeType(2)" :class="{choose:type===2}">{{orgid!=1?'我的提问':'提问审核'}}</span>
      <span v-if="orgid==1" @click="ChangeType(3)" :class="{choose:type===3}">{{orgid!=1?'我的提问':'回答审核'}}</span>
<!--      <span @click="ChangeType(3)" :class="{choose:type===3}">健康管理</span>-->
    </div>
  </div>


</template>

<script>
import SignIn from "./signIn.vue";
import {Bodytype, delproblem, getBrowse, openceshi, ProblemMy, updateorg} from "../../axios/AllRequest";
import router from "../../router";
import {descriptionsArray, questionsArray} from "../../ui-FZ/echarts";

export default {
  components: {SignIn},
  data(){
    return{
      orgid:sessionStorage.getItem('OrgId'),
      loading:false,
    //转化
    zHList:[],
      //是否填写完毕，
      state:true,
    name:'',
    type:sessionStorage.getItem('OrgId')==1?2:1,
    bodyType:0,
    grade:[],
      time:'',
    List:questionsArray,
      ListName:descriptionsArray,
      tableData:[],
      radio:[
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0],
      ]
    }

  },
  mounted() {
    this.getName(),
      this.getType(),
      //如果是管理员则先调用一次
      this.ProblemMys1()
  },

  created() {

  },
  methods: {
    rest(){
      this.radio=[
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0],
      ]
    },
    ChangeType(val){
      this.type=val
      if(val==2&&this.orgid!=1){
        this.ProblemMys()
      }
      if(val==2&&this.orgid==1){
        this.ProblemMys1()//tiwen
      }
      if(val==3&&this.orgid==1){
        this.ProblemMys2()//huida
      }
    },
    sendTZ(){
      this.state=true;
      console.log(this.radio)
      this.countList=[]
     for(let i of this.radio){
       if(this.state==false){
         break;
       }
       for(let j  of i){
         if(j==0){
           this.state=false;
         }
       }
     }
     if(this.state===false){
       this.$message({
         message: '请先填写',
         type: 'warning'
       });
       return 0;
     }
     else {
       this.radio[8] = this.radio[8].map((item, index) => {
         if (index !== 0 && index !== 5) {
           return Math.abs(parseInt(item) - 6);
         } else {
           return item; // 不对第一项和第六项进行变换，直接返回原值
         }
       });
       for (let i of this.radio) {
         let count = 0
         for (let j of i) {
           if (j == 0) {
             this.state = false;
           }
           count += parseInt(j)
         }
         this.countList.push(parseInt(count - i.length) / (i.length * 4) * 100)
       }
       const newArray =  this.countList.slice(0, 8);
       console.log(newArray)

       if(this.countList[8]>=60&&Math.max(...newArray)<40){
         this.bodyType=9
       }
       else{
         const maxElement = Math.max(...newArray);
         const index = newArray.findIndex(item => item >= maxElement);
          this.bodyType=index+1
       }
       updateorg('home/updateorg',{
         body_type:this.bodyType,
         id:sessionStorage.getItem('OrgId')
       }).then(({data})=>{
         if(data.code==200){
           this.$message({
             message: '监测成功',
             type: 'success'
           });
           this.getType()
         }
       })
     }
    },
    getName() {
      this.name = this.$store.state.A.user
      if(this.name==''){
        this.$message({
          message: '请先登录',
          type: 'warning'
        });
        this.$router.push({
          path:'/home',
        })
      }
    },
    //管理员审核问题
    handleDelete1(list){
      this.$confirm('审核通过, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading=true
        delproblem('/home/problemnu1',{
          mesid:list.mesid,
          state:1
        }).then(({data})=>{
          if(data.code==200){
            this.$message({
              message: '审核通过',
              type: 'success'
            })
            this.ProblemMys1()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    rejectQ(list){
      this.$confirm('拒绝通过, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading=true
        delproblem('/home/problemnu1',{
          mesid:list.mesid,
          state:3
        }).then(({data})=>{
          if(data.code==200){
            this.$message({
              message: '未通过审核',
              type: 'success'
            })
            this.ProblemMys1()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    //审核回答
    handleDelete2(list){
      console.log(list)
      this.$confirm('审核通过, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading=true
        delproblem('/home/anblemnu1',{
          an_id:list.problemList.anId,
          state:1
        }).then(({data})=>{
          if(data.code==200){
            this.$message({
              message: '审核通过',
              type: 'success'
            })
            this.ProblemMys2()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    rejectQ2(list){
      this.$confirm('拒绝通过, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading=true
        delproblem('/home/anblemnu1',{
          an_id:list.problemList.anId,
          state:3
        }).then(({data})=>{
          if(data.code==200){
            this.$message({
              message: '未通过审核',
              type: 'success'
            })
            this.ProblemMys2()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    //用户删除回答
    handleDelete(list){
      this.$confirm('此操作将永久删该提问及评论, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading=true
        delproblem('/home/delproblem',{
          mesid:list.mesid
        }).then(({data})=>{
          if(data.code==200){
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.ProblemMys()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });


    },
    ProblemMys(){
      this.loading=true
      ProblemMy('/home/problemnu',
        {
        id:2
      }).then(({data})=>{
        if(data.code==200){
          this.tableData=data.data
          this.tableData.map((item)=>{
            item.starttime=item.starttime.slice(0,10)
          })
          this.loading=false
        }
      })
    },
    //管理员列表问题
    ProblemMys1(){
      if(this.orgid==1&&this.type==2) {
        this.loading = true
        ProblemMy('/home/problemnu0',
          ).then(({data}) => {
          if (data.code == 200) {
            this.tableData = data.data
            this.tableData.map((item) => {
              item.starttime = item.starttime.slice(0, 10)
            })
            this.loading = false
          }
        })
      }
    },
    ProblemMys2(){
      this.loading=true
      ProblemMy('/home/AnswerList1',
        ).then(({data})=>{
        if(data.code==200){
          this.tableData=data.data
          this.tableData.map((item)=>{
            console.log(item)
            item.finishtime=item.problemList.finishtime.slice(0,10)
          })
          this.loading=false
        }
      })
    },
    getType(){
      Bodytype('/home/orgtype',{id:sessionStorage.getItem('OrgId')}).then(({data})=>{
        if(data.code==200) {
          this.bodyType = data.data[0].bodyType
          this.time = data.data[0].time
        }
      })
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="scss">
.father{
  display: flex;
  background-color:RGBA(240,248,255,0.3);
  flex-direction: row;
  position: absolute;
  height: 90vh;
  width: 90vw;
  left:5vw;
  top:5vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .left{
    display: flex;
    position: relative;
   height: 100%;
   flex: 8;
    .form {
      overflow-y: auto;
      overflow-x:hidden ;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap:30px;
      .box{
        position: relative;
        left: 30px;
        display: flex;
        width: 90%;
        flex-direction: row;
        justify-content: space-between;
      }
      .MZ {
        position: relative;
        top: 20px;
        left: 20px;
        color: #8c939d;

      }
      .List {
        position: relative;
        width: 90%;
        left: 30px;
        gap:10px;
        display: flex;
        flex-direction: column;
        .list-ch{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-bottom: 1px solid #Cccccc;
        }
      }
    }
    .box{
      width: 100%;
      position: relative;
    }
  }
  .right{
    box-sizing: border-box;

    align-items: center;
    display: flex;
    flex-direction: column;
    gap:20px;
    height: 100%;
    flex: 1;
    .text{
      font-size: 12px;
      height: 200px;
      width: 90%;
      text-align: left;
      display: flex;
      flex-direction: column;
      span{
        font-size: 16px;
        text-align: center;
        color: #3a8ee6;
      }
    }
    span{
      text-align: center;
      width: 100%;
      cursor: pointer;
      height: 50px;
      line-height: 50px;
     font-size: 20px;
      //transition: opacity 0.1s, background-color 0.1s; /* 添加过渡效果 */
    }
    .choose{
      transition: opacity 0.7s, background-color 1s; /* 添加过渡效果 */
     background-color: #87CEFA;
    }
  }
}
.button{
  width: 60%;
  margin-bottom: 20px;
  position: relative;
  left: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
</style>
<style>
.sss{
  background-color: #8c939d;
}
.ssss{
  background-color: yellow;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
::-webkit-scrollbar {
  width: 6px; /* 纵向滚动条*/
  height: 5px; /* 横向滚动条 */
  background-color: #fff;
}

/*定义滚动条轨道 内阴影*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: white;
}

/*定义滑块 内阴影*/
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: #ccc;
  border-radius: 10px;
}

</style>
<script setup>

</script>
