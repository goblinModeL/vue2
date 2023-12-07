<template>
  <div id="app">
    <div class="box">二次上传测试(数据库查询)
    <div class="ch">

        <a-input placeholder="输入" v-model="name" class="input"/>

      <a-button type="primary" @click="uk(name)">
       查询
      </a-button>
    </div>
      <div class="chs">
   {{mesName}} {{mesAge}}
      </div>
    </div>
  </div>
</template>

<script>

import {getlist} from "./axios/AllRequest";

export default {

  name: 'App',
  data(){
    return{
      name:'',
      mesName:'',
      mesAge:''
    }
  },
  mounted(){
  },
  //
  methods:{
 uk(name){

  getlist('/ren/list',{name:name}).then((data)=>{
    if(JSON.stringify(data.data) === '[]'){
      this.mesName='无数据'
      this.mesAge='无数据'
    }
    else {
      this.mesName = data.data[0].name
      this.mesAge = data.data[0].age
    }
  })
 }
  }
}
</script>

<style scoped>
.box{
  width: 250px;
  height: 200px;
  font-size: 14px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%,-30%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
.ch{
  width: 250px;
  height: 50px;
  background-color: #8cc8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  .input{
    width: 150px;
    margin-right: 20px;
  }
}
  .chs{
    text-align: center;
    width: 250px;
    height: 50px;
    background-color: #52c41a;
    line-height: 50px;
  }
}
</style>
