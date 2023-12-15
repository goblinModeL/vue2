

<template>
<div class="All-box">
  <div id="little-box" ref="box" v-for="item in 10"></div>
</div>
</template>
<script>
import * as echarts from 'echarts';
export  default {
  data(){
return{
}
  },
  mounted() {
  // this.beg()
  },
  methods:{
    beg(){
      var myChart = echarts.init(this.$refs.box);
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
}
</script>
<style scoped>
.All-box{
  height: 800px;
  display: flex;
  gap: 40px 40px;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  #little-box{
    height: 300px;
    width: 300px;
    box-shadow: 0 0 5px 1px #999;
    background-color: white;
  }
}

</style>

