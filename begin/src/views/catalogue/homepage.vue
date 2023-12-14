<template>
  <div class="all">
    <div class="top">
      <div class="icon"><img src="@/static/img/he.png" style="max-width: 100%; max-height: 100%" alt=""></div>
      <div class="username">
        <el-avatar>{{name.substring(0,4)}}</el-avatar>
        <p class="quit" @click="quit">退出登录</p>
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
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
      </el-menu>
    </div>
    <div class="picture">
<!--          <el-carousel :interval="2000" type="card"   class="pic">-->
<!--            <el-carousel-item v-for="(item,index) in imgList" :key="index">-->
<!--               <img class="img" :src="item.img" alt="p">-->
<!--             {{item}}-->
<!--            </el-carousel-item>-->
<!--          </el-carousel>-->
    </div>
    用户: {{ name || '游客' }}
  </div>
</template>

<script>

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

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .top {
    width: 100vw;
    height: 50px;
    margin-bottom: 10px;
    background-color: yellow;
    display: flex;

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
      }
      .quit{
        height: 50px;
        line-height: 50px;
        display: inline-block;
        margin: 0;
        cursor: pointer;
      }
    }

    .icon {
      width: 100px;
      line-height: 50px;
      padding-left: 20px;
    }

    .el-menu {
      height: 50px;
      overflow: hidden;
      margin-left: 20px;
    }

    .el-menu-demo {

    }
  }

  .picture {
    padding: 5px 20px 5px 20px;
    height: 260px;
    width: 86vw;
    margin-left: 7vw;
    box-shadow: 0 0 5px 1px #999;

    .pic {
      height: 250px !important;
      overflow-y: hidden;
    }

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
  height: 250px !important;
  width: 45vw !important;

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
