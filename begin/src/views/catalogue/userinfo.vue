

<template>
  <div class="father">
<!--    <div class="content" >-->
<!--  <div class="left-bar">-->
<!--    <el-menu-->
<!--      :router="true"-->
<!--      default-active="2"-->
<!--      class="el-menu-vertical-demo"-->
<!--      @open="handleOpen"-->
<!--      @close="handleClose">-->
<!--      <el-menu-item index="/userinfo/userlist">-->
<!--        <template slot="title">-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span>导航一</span>-->
<!--        </template>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="2">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <span slot="title">导航二</span>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="3" disabled>-->
<!--        <i class="el-icon-document"></i>-->
<!--        <span slot="title">导航三</span>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="/homepage">-->
<!--        <i class="el-icon-setting"></i>-->
<!--        <span slot="title">导航四</span>-->
<!--      </el-menu-item>-->
<!--    </el-menu>-->
<!--  </div>-->
<!--  <div class="right-content">-->
<!--    <router-view/>-->
<!--  </div>-->
<!--    </div>-->

<!--  <el-popover-->
<!--    placement="top-start"-->
<!--    title="标题"-->
<!--    width="200"-->
<!--    trigger="hover"-->
<!--  >-->
<!--    <p v-if="1>2">222222222222222222222222</p>-->
<!--    <p else>00</p>-->
<!--    <button slot="reference">hover 激活</button>-->
<!--  </el-popover>-->
    <button  >测试</button><br/>
   <span v-for="i  in list">{{i}}2</span>
    <el-popover
      ref="popover7"
      popper-class="sss"
      placement="top-start"
      width="80"
      trigger="hover"
      v-if="sk"
    >

      <div class="qw" >
        <div class="text"><div>暂无数据</div></div>
      </div>
    </el-popover>
    <span class="box-7" v-popover:popover7 style="font-size: 18px" @mouseenter="open">1234</span>
    <el-popover
      ref="popover8"
      :popper-class="sk===true?'sss':'ssss'"
      placement="top-start"
      width="80"
      trigger="hover"
    >

      <div class="qw" >
        <div class="text"><div>暂无数据</div></div>
      </div>
    </el-popover>
    <span class="box-7" v-popover:popover8 style="font-size: 18px" @mouseenter="open">126664</span>
    <div v-if="sk">11111</div>
    <span>本页面被访问次数：{{count}}</span>
  </div>



</template>

<script>
import SignIn from "./signIn.vue";
import {getBrowse, openceshi} from "../../axios/AllRequest";

export default {
  components: {SignIn},
  data(){
    return{
      count:0,
    name:'',
      list:[],
      j:0,
      sk:false
    }

  },
  mounted() {
    this.getName()

  },
  created() {
    this.getPageNumber()
  },
  methods: {
    open() {
      openceshi('/home/ceshi').then(({data}) => {
        this.sk=true
      })
   console.log(this.sk)
    },
    getName() {
      this.name = this.$store.state.A.user
    },
     //获取当前页面浏览次数
    getPageNumber(){
      let url=this.$route.path
      getBrowse('/getActive/count',
        {'route':url}
      ).then(
        ({data})=>{
          console.log(data)
          if(data.code===200){
            this.count=data.data
          }
        }

      )
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="scss">
.father{
  position: absolute;
  height: 90vh;
  width: 90vw;
  left:5vw;
  top:5vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .content{
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    .left-bar{
      flex: 1;
    display: flex;
      flex-direction: column;

    }
    .right-content{
      flex: 4;

    }
  }
}

</style>
<style>
.sss{
  background-color: #8c939d;
}
.ssss{
  background-color: yellow;
}
</style>
