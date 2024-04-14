<template>
  <div class="all">
    <div class="top-fixed">
    <div class="top">
      <div class="icon"><img src="@/static/img/he.png" class="icon-img" alt=""></div>
      <div class="search">
<!--        <el-autocomplete-->
<!--          placeholder="请输入查找内容"-->
<!--        ></el-autocomplete>-->

      </div>
      <el-menu
        :router="true"
        background-color="RGBA(176,224,230,1)"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#000000"
        active-text-color="RGBA(176,224,230,1)">
        <el-menu-item index="/homepage">首页</el-menu-item>
<!--        <el-submenu index="2">-->
<!--          <template slot="title">中医</template>-->
<!--          <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--        </el-submenu>-->
<!--        <el-menu-item index="4">西医</el-menu-item>-->
        <el-menu-item index="/messages">资讯</el-menu-item>
        <el-menu-item index="/community" >社区交流</el-menu-item>
        <el-menu-item index="/HEALTH">在线资讯</el-menu-item>
        <el-menu-item index="/userinfo" :disabled="name===''">个人中心</el-menu-item>
      </el-menu>
      <div class="little-menu">

      </div>
      <div class="username" >
        <el-avatar>{{name.substring(0,4)||"游客"}}</el-avatar>
        <p v-if="type!=0" style=" color: #3a8ee6; cursor: pointer" @click="run">{{ListName[type-1]}}</p>
        <p v-if="type==0">暂无体质数据</p>
        <p class="quit" @click="quit" v-if="name">退出登录</p>
      </div>

    </div></div>

    <el-scrollbar style="height: 100%">

    <div class="picture">
          <el-carousel :interval="2000" type="card"   class="pic">
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
               <img class="img" :src="item.img" alt="p">
             {{item}}
            </el-carousel-item>
          </el-carousel>
    </div>
    <div class="echarts">
    <ZoomCharts></ZoomCharts>
    </div>
    </el-scrollbar>
  </div>
</template>

<script>
import  ZoomCharts from './homeecharts.vue'
import {Bodytype} from "../../axios/AllRequest";
import {descriptionsArray} from "../../ui-FZ/echarts";
import router from "../../router";
export default {
  data() {
    return {
      type:0,
      ListName:descriptionsArray,
      name: '',
      excessive: false,
      imgList: [
        {img: require("@/static/img/R.jpg")},
        {img: require("@/static/img/RR.jpg")},
        {img: require("@/static/img/RRR.jpg")},
      ]
    }
  },
  components:{
    ZoomCharts
  },
  mounted() {
    this.name=this.$store.state.A.user
    this.getType()
  },

  methods: {
    run(){
      router.push('/userinfo')
    },
    quit(){
      this.$confirm('确认退出?未保存的数据将丢失', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('A/AclearUser')
        this.$router.push({name:'home'})
      }).catch(() => {

      });

    },
    getType(){
      Bodytype('/home/orgtype',{id:sessionStorage.getItem('OrgId')}).then(({data})=>{
        if(data.code==200){
        this.type=data.data[0].bodyType
          sessionStorage.setItem('type',data.data[0].bodyType)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 100%;
}

.all {
  background: linear-gradient(135deg, rgba(230,230,250,1),rgba(194,233,251,1));
  overflow-x:auto ;
overflow-y: auto;
  height: 100%;
  min-width: 1500px;
  width: 100%;
  display: flex;
  flex-direction: column;
.top-fixed {
  width: 100%;
  height: 50px;
  z-index: 100;
  .top {
    width: 100%;
    height: 50px;
    background-color: rgba(176,224,230,0.8);
    display: flex;
    position: relative;
    flex-direction: row;
      gap:60px;
    .search {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-autocomplete {
        display: flex !important;
        .el-input__inner {
          height: 40px;
          width: 250px;
          border-radius: 20px;
        }
      }
    }
    .username {
      position: absolute;
      right:4%;
      text-align: center;
      height: 50px;
      display: flex;
      gap: 20px;
      align-items: center;
      line-height: 50px;
      justify-content: space-between;
      .el-avatar {
        background-color: #52c41a;
        height: 40px;
        width: 40px;
      }

      .quit {
        width: 60px;
        border-radius: 20px;
        border: 1px  solid black;
        color: white;
        background-color: black;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        display: inline-block;
        margin: 0;
        cursor: pointer;
      }
    }

    .icon {
      height: 50px;
      width: 100px;
      line-height: 50px;
      padding-left: 20px;
      // position: absolute;
      z-index: 100;
      .icon-img {
        width: 50px;
        height: 50px;
        display: block;
      }
    }
     .el-menu {
       display: flex;
       gap:30px;
       height: 50px;
       width: 800px ;
       overflow: hidden;
     }
     .little-menu{
       display:none;
     }

    .el-menu-demo {

    }
  }



}
    .picture {
      margin-top: 40px;
      height: 300px;
      width: 86%;
      margin-left: 7%;
      .pic {

        height: 280px !important;
        margin-left: 40px;
        overflow-y: hidden;
      }

    }

    .echarts {
      width: 86%;
      margin-left: 7%;
      margin-right: 7%;
      padding-top: 30px;
    //overflow-y: auto;
    }



.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(n) {
  box-sizing: border-box;
  border-radius: 8px;
}

.el-carousel__item {
  height: 280px !important;
  width: 45% !important;
}
}
#little-box{
  background-color: white;
}
</style>
<style>
el-menu .el-menu-item:hover {
  background-color: rgba(176,224,230,0.8) !important;
}

.el-submenu__title:hover {
  background-color: rgba(176,224,230,0.8) !important;
}

.el-menu-item:hover {
  background-color: rgba(176,224,230,0.8) !important;
}
.el-dropdown-menu__item, .el-menu-item{
  padding: 0 10px;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}

</style>
