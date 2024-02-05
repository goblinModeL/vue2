

<template>
  <div class="button">

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
    {{name}}
    <button @click="open">测试</button>
  </div>


</template>

<script>
import SignIn from "./signIn.vue";
import {openceshi} from "../../axios/AllRequest";

export default {
  components: {SignIn},
  data(){
    return{
    name:''
    }

  },
  mounted() {
    this.getName()
  },
  methods:{
    open(){
      openceshi('/getActive/all').then(res=>{
      })
    },
      getName(){
      this.name=this.$store.state.A.user
    }
  },
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

</style>
