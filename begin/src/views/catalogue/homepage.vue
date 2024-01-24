<template>
  <div class="all">
    <div class="top-fixed">
    <div class="top">
      <div class="icon"><img src="@/static/img/he.png" class="icon-img" alt=""></div>
      <div class="username" >
        <el-avatar>{{name.substring(0,4)||"游客"}}</el-avatar>
        <p class="quit" @click="quit" v-if="name">退出登录</p>
      </div>
      <el-menu
        :router="true"
        background-color="#ffff00"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#000000"
        active-text-color="#FF0000">
        <el-menu-item index="/homepage">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">中医</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">西医</el-menu-item>
        <el-menu-item index="4">生活广场</el-menu-item>
        <el-menu-item index="3" disabled>体质辨析</el-menu-item>
        <el-menu-item index="/demo">养生指南</el-menu-item>
        <el-menu-item index="/userinfo">个人中心</el-menu-item>
      </el-menu>
      <div class="search">
        <el-autocomplete
          placeholder="请输入查找内容"
        ></el-autocomplete>
      </div>
    </div></div>

    <el-scrollbar style="height: 100%">

    <div class="picture">
<!--          <el-carousel :interval="2000" type="card"   class="pic">-->
<!--            <el-carousel-item v-for="(item,index) in imgList" :key="index">-->
<!--               <img class="img" :src="item.img" alt="p">-->
<!--             {{item}}-->
<!--            </el-carousel-item>-->
<!--          </el-carousel>-->
    </div>
    <div class="echarts">
    <ZoomCharts></ZoomCharts>
    </div>
    </el-scrollbar>
  </div>
</template>

<script>
import  ZoomCharts from './homeecharts.vue'
export default {
  data() {
    return {
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
  },

  methods: {
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

    }
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}

.all {
  background-color: #F5F5F5;
overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
.top-fixed {
  position: fixed;
  top:0;
  width: 100%;
  height: 50px;
  z-index: 100;
  .top {
    width: 100%;
    height: 50px;
    background-color: #ffff00;
    display: flex;
    position: relative;

    .search {
      position: absolute;
      height: 50px;
      right: 300px;
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
      text-align: center;
      position: absolute;
      right: 10px;
      width: 120px;
      height: 50px;
      display: flex;
      align-items: center;
      line-height: 50px;
      justify-content: space-between;

      .el-avatar {
        background-color: #52c41a;
        height: 40px;
        width: 40px;
      }

      .quit {
        font-size: 14px;
        height: 50px;
        line-height: 50px;
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
       position: absolute;
      z-index: 100;
      .icon-img {
        width: 50px;
        height: 50px;
        display: block;
      }
    }

    .el-menu {
      height: 50px;
      overflow: hidden;
      margin-left: 200px;
    }

    .el-menu-demo {

    }
  }
}
    .picture {
      margin-top: 60px;
      padding: 5px 0 5px 0;
      height: 280px;
      width: 86vw;
      margin-left: 7%;
      box-shadow: 0 0 5px 1px #999;
      background-color: white;
      .pic {
        height: 280px !important;
        margin-left: 40px;
        overflow-y: hidden;
      }

    }

    .echarts {
      width: 86vw;
      margin-left: 7%;
      margin-right: 7%;
      padding-top: 30px;
    //overflow-y: auto;
    }
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
</style>
<style>
el-menu .el-menu-item:hover {
  background: #ffff00 !important;
}

.el-submenu__title:hover {
  background-color: #ffff00 !important;
}

.el-menu-item:hover {
  background-color: #ffff00 !important;
}
</style>
