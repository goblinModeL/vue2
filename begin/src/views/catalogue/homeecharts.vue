

<template>
<div class="All-box">
  <div id="little-box" v-for=" (val,index) in 10">
     <div ref="box" class="con" v-if="index<5">
     </div>
    <div ref="box" class="con" v-if="index>=5">
    </div>
    <span>123333333333</span>
  </div>

</div>
</template>
<script>

import {option, option2} from "../../ui-FZ/echarts";

export  default {
  data(){
return{
}
  },
  mounted() {
  this.beg()
  },
  methods:{
    beg(){
      let All=document.getElementsByClassName('con')
      for(let i=0;i<All.length;i++) {
        var myChart = this.$echarts.init(All[i]);
        if(i<5)
        myChart.setOption(option());
        else
          myChart.setOption(option2());
      }
    }
  }
}
</script>
<style scoped lang="scss">
.All-box{
  height: 800px;

  display: flex;
  gap: 40px 40px;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  #little-box{
    box-sizing: border-box;
    height: 300px;
    width: 300px;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .con{
    height: 90%;
    width: 100%;
  }
    span{
      font-size: 14px;
    }
  }
}

</style>

