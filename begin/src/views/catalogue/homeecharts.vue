

<template>
<div class="All-box">
  <div id="little-box" v-for=" (val,index) in 4">
     <div ref="box" class="con" >
     </div>
  </div>

</div>
</template>
<script>

import  * as jsonData from "../../ui-FZ/echarts";

export  default {
  data(){
return{
}
  },
  mounted() {
  this.beg()
    // window.addEventListener('resize', this.handleResize);
  },
  methods:{
    handleResize() {
      // 遍历所有图表实例并重新调整大小
      let All = document.getElementsByClassName('con');
      for (let i = 0; i < All.length; i++) {
        let myChart = this.$echarts.getInstanceByDom(All[i]);
        if (myChart) {
          myChart.resize();
        }
      }
    },
    beg(){
        let All=document.getElementsByClassName('con')
        for(let i=0;i<All.length;i++) {

          var myChart = this.$echarts.init(All[i]);

            myChart.setOption(jsonData["option"+i]());

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
    background-color:rgba(255,250,250,0.4) ;
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

