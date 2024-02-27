

<template>
  <div class="all">
<div class="box">
  <div class="left">
    <div class="top-left">
      <span :class="num===0?'yes':'no'" @click="choose(0)">关注</span>
      <span :class="num===1?'yes':'no'" @click="choose(1)">推荐</span>
      <span :class="num===2?'yes':'no'" @click="choose(2)">发现</span>
    </div>
    <el-divider></el-divider>
    <div class="loading" v-loading="loading">
    <div class="content">
      <div class="box-list" v-for="(i,index) in list" >
        <div class="top-list">
        <span class="title">{{i.title}}</span>
        <span class="time">发布于：{{i.time}}</span>
        </div>
        <div :class="openPage===index?'content-list-open':'content-list'" >
          <span  icon="el-icon-arrow-down" class="pos" @click="open(index)">{{openPage===index?'收起':'展开'}}</span>
       {{i.content}}
        </div>
      </div >
    </div>
    </div>
  </div>
  <div class="right"></div>
</div>
  </div>
</template>

<script >
export default {
  data(){
    return{
      loading:false,
      openPage:null,
    num:1,
    list:[

      {title:'1234',content:'opopssssssssopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopossssssssssssssssssopo222',time:'2022-12-12'},
      {title:'1234',content:'opopssssssssopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopossssssssssssssssssopo222',time:'2022-12-12'},
      {title:'1234',content:'opopssssssssopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopoopopssssssssssssssssssssssssssopossssssssssssssssssopo222',time:'2022-12-12'}


    ]
    }
  },
  methods:{
    choose(num=0){
      this.loading=true;
      setTimeout(()=>this.loading=false,3000)
    this.num=num;
    },
    open(index){
      if(this.openPage===index){
        this.openPage=null
      }
       else this.openPage=index

    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.all{
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(135deg, rgba(161,196,253,0.1),rgba(194,233,251,0.1));

}

.box{
  height: 100%;
  width:  1000px;
  position: absolute;
  left:20%;
  display: flex;
  flex-direction: row;
  gap:4px;
  .left{
    box-sizing: border-box;
    padding: 0 20px;
   width: 60%;
    border-right: rgba(149, 157, 165, 0.2) 1px solid;
    height: 100%;
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
      height: calc(100% - 100px);
      width: 100%;
      .content {
        margin: 40px 0 0 0;
        display: flex;
        flex-direction: column;
        width: 100%;
      //min-height: 80%; height: 80%;
        gap: 40px;

        .box-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          max-height: 200px;
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
          //word-break: normal; overflow: hidden;
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
    flex:40%;
    height: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
  }
}
</style>
