<template>
  <div class="all">
    <div class="top-fixed">
    <div class="top">
      <div class="icon"><img src="@/static/img/he.png" class="icon-img" alt=""></div>
      <div class="search">
        <el-autocomplete
          placeholder="请输入查找内容"
        ></el-autocomplete>
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
        <el-menu-item index="/userlist">生活广场</el-menu-item>
        <el-menu-item index="/community" >社区交流</el-menu-item>
        <el-menu-item index="/HEALTH">养生指南</el-menu-item>
        <el-menu-item index="/userinfo" :disabled="name===''">个人中心</el-menu-item>
      </el-menu>
      <div class="little-menu">

      </div>
      <div class="username" >
        <el-avatar>{{name.substring(0,4)||"游客"}}</el-avatar>
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

<style scoped lang="scss">
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
  width: 100%;
  height: 50px;
  z-index: 100;
  .top {
    width: 100%;
    height: 50px;
    background-color: #ffff00;
    display: flex;
    position: relative;
    flex-direction: row;
    gap:60px;
    .search {
      height: 50px;
      //margin-left: 10%;
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
      //position: absolute;
      //left: 10px;
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
      // position: absolute;
      z-index: 100;
      .icon-img {
        width: 50px;
        height: 50px;
        display: block;
      }
    }

   @media screen and(min-width: 1200px) {
     .el-menu {
       display: flex;
       gap:30px;
       height: 50px;
       width: 1000px ;
       overflow: hidden;
     }
     .little-menu{
       display:none;
     }
   }

    @media screen and(max-width: 1200px) {
      .el-menu {
        display: none;
        height: 50px;
        width: 500px ;
        overflow: hidden;
      }
      .little-menu{
        display:flex;
      }
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
.el-dropdown-menu__item, .el-menu-item{
  padding: 0 10px;
}
</style>
