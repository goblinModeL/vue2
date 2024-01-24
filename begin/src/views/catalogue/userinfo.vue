

<template>
  <div class="button">
  <el-popover
    popper-class="sss"
    placement="top-start"
    width="200"
    trigger="hover"
  >
    <div class="qw">
      <p>12344</p>
    </div>
    <span slot="reference" class="texx">hover 激活</span>
  </el-popover>
  <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
  >
    <p v-if="1>2">222222222222222222222222</p>
    <p else>00</p>
    <button slot="reference">hover 激活</button>
  </el-popover>
    <button @click="open">测试</button>
    <div class="uuk" id="uuk"></div>
  </div>


</template>

<script>
import SignIn from "./signIn.vue";
import {openceshi} from "../../axios/AllRequest";

export default {
  components: {SignIn},
  data(){
    return{

    }

  },
  methods:{
    open(){
      openceshi('/getActive/all').then(res=>{
      })
    },
    abc(){
console.log('开始')
    }
  },
  mounted() {
 let demo=document.getElementById('uuk')
    demo.addEventListener('wheel',this.abc)
  }
}
</script>

<style scoped>
</style>
<style>
.texx{
  font-family: almm,serif;
  font-size: 14px;
  height: 14px;
}
.sss {
  width: 134px;
  height: 88px;
  background: #072027;
  border: 1px solid;
  border-image: linear-gradient(133deg, rgba(67, 179, 234, 1), rgba(30, 124, 218, 1)) 1 1;
}

.sss .popper__arrow::after {
  border-top-color: #072027 !important;
}

.button{
  position: relative;
  height: 100vh;
  width: 100vw;
  font-size: 14px;
}
.uuk{
  height: 50%;
  width: 50%;
  background-color: yellow;
}
.sss .qw {
  width: 110px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC, PingFang SC;
  font-weight: 400;
  color: #B9FDFF;
  line-height: 17px;
}
</style>
