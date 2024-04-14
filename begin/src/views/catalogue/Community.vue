

<template>
  <div class="all" ref="all">
<!--    <div class="top " @click="upupup" ref="top"><span>回到顶部</span></div>-->
<div class="box">
  <div class="left">
    <div class="top-left">
<!--      <span :class="num===0?'yes':'no'" @click="choose(0)">关注</span>-->
      <span :class="num===1?'yes':'no'" @click="choose(1)">问答</span>
<!--      <span :class="num===2?'yes':'no'" @click="choose(2)">发现</span>-->
    </div>
    <el-divider></el-divider>
    <div class="loading" v-loading="loading" >
    <div class="content">
      <div class="box-list" v-for="(i,index) in List"  @click="goanswer(i)">
        <div class="top-list">
        <span class="title">用户：{{i.username}}</span>
        <span class="time">发布于：{{i.problemList.starttime.slice(0,10)}}</span>
        </div>
        <div :class="openPage===index?'content-list-open':'content-list'" >
          <span v-if="i.problemList.mes.length>100" icon="el-icon-arrow-down" class="pos" @click.stop="open(index)">{{openPage===index?'收起':'展开'}}</span>
<!--          <span  class="pos">去/查看回复</span>-->
       {{i.problemList.mes}}
        </div>
      </div >
    </div>
      <div class="paging"
      >
        <el-pagination
          :current-page="pagenum"
          :page-size="5"
          @current-change="resh"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
        <span class="text">总条数:{{total}}</span>
      </div>

    </div>

  </div>
  <div class="right" >

    <div class="upload" @click="openform">提问</div>
  </div>
</div>
    <ComBack  ref="ppo"    @close="close"></ComBack>
    <PMdig  ref="ppoo"  @close="close1"></PMdig>
  </div>
</template>

<script >
import {Problem} from "../../axios/AllRequest";
import com_Back from "./Com_Back.vue";
import PMdig from "./PMdig.vue";
export default {
  data(){
    return{
      //临时数据
      outList:[],
      dig:false,
      pagenum:1,
      pagesize:5,
      total:0,
      loading:false,
      openPage:null,
        num:1,
      List:[],
    }
  },
  components:{
    PMdig,
    ComBack:com_Back
  },
  methods:{
    close(val){
      this.dig=val
    },
    close1(val){
      this.dig=val
    },
    openform(){
      this.$nextTick(() => {

        this.$refs['ppoo'].init(true)
      })

    },
    getProblem(){
       this.loading=true
      Problem('/home/problem',{
        pagenum:this.pagenum,
        pagesize:this.pagesize,
      }).then(({data})=> {
        if (data.code == 200) {
          this.total = data.sum
          this.List = data.data
        }
        this.loading=false
        }
      )
    },
    // inittop(){
    //   console.log(111)
    //   if(Math.round(this.$refs.all.scrollTop)<=0){
    //     this.$refs.top.style.display='none'
    //   }
    //   else{
    //     this.$refs.top.style.display=''
    //   }
    // },
    choose(num=0){

      // setTimeout(()=>this.loading=false,3000)
    this.num=num;
    },
    resh(val){
      console.log(val)
      this.pagenum=val
      this.getProblem()
    },
    goanswer(list){
      this.$nextTick(() => {

        this.$refs['ppo'].init(list,true)
      })


    },
    // upupup() {
    //
    //   this.$refs.all.scrollTop = 0
    // },
    open(index){
      if(this.openPage===index){
        this.openPage=null
      }
       else this.openPage=index
    }
  },
  created() {
  },
  mounted() {
    this.getProblem()
   // this.inittop()
    // this.$refs.all.addEventListener('scroll',this.inittop)
  }
}
</script>
<style scoped lang="scss">
.all{
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow-y: auto;
  background: linear-gradient(135deg, rgba(230,230,250,1),rgba(194,233,251,1));
}
//.top{
//  cursor: pointer;
//  text-align: center;
//  border-radius: 50%;
//   background-color: yellow;
// right:100px;
//  top:90%;
//  position: fixed;
//  width: 60px;
//  height: 60px;
//
//  span{
//    display: block;
//    font-size: 11px;
//   line-height: 60px;
//  }
//}
.box{
  width:  1000px;
  position: absolute;
  left:20%;
  display: flex;
  flex-direction: row;
  gap:4px;
  .left{
   width: 60%;
    border-right: rgba(149, 157, 165, 0.2) 1px solid;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
    .top-left{
      box-sizing: border-box;
      padding:20px 20px 0 20px ;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 20px;
      .no{
        color: #8c939d;
        cursor: pointer;
        user-select:none;
      }
      .yes{
        color: #3a8ee6;
        cursor: pointer;
        user-select:none;
      }
    }
    .loading {
      display: flex;
      flex-direction: column;
      height: calc(100% - 100px);
      width: 100%;
      .content {
        padding: 0 20px;
        margin: 40px 0 0 0;
        display: flex;
        flex-direction: column;
        width: 95%;
      //min-height: 80%; height: 80%;
        gap: 40px;

        .box-list {
          cursor: pointer;
          width: 100%;
          display: flex;
          flex-direction: column;
          max-height: 500px;
          min-height: 100px;

          .top-list {
            display: flex;
            flex-direction: row;
            gap: 20px;
            font-size: 14px;
            color: #8c939d;

          }

          .content-list::before {
            content: '';
            float: right;
            height: calc(100% - 20px);
          }

          .content-list-open::before {
            content: '';
            float: right;
            height: calc(100% - 20px);
          }

          .content-list {
            display: flex;
            padding-right: 10px;
            width: 100%;
            max-height: 60px;
            line-height: 20px;
            font-size: 14px;
            word-wrap: break-word;
            word-break: normal;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            .pos {
              margin-right: 8px;
              float: right;
              white-space: nowrap;
              height: 20px;
              width: 20px;
              font-size: 14px;
              color: #3a8ee6;
              clear: both;
              cursor: pointer;
            }
          }

          .content-list-open {
            display: flex;
            padding-right: 10px;
            width: 100%;
            max-height: 600px;
            line-height: 20px;
            font-size: 14px;
            word-wrap: break-word;
          //word-break: normal; overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 9999;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;

            .pos {
              float: right;
              white-space: nowrap;
              height: 20px;
              width: 20px;
              font-size: 14px;
              margin-right: 8px;
              color: #3a8ee6;
              clear: both;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .right{
    display: flex;
    width:40%;
    height: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
    .upload{
      line-height: 100px;
      cursor: pointer;
      height: 100px;
      width: 100%;
      color: #3a8ee6;
      text-align: center;
    }
  }
}
.paging{
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
.text{
  font-size: 16px;
  right:20px;
  position: absolute;

}

}

</style>
