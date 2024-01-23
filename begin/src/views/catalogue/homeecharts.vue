

<template>
<div class="All-box">
  <div id="little-box" ref="box" v-for="item in 10">
    <el-image :src="src"></el-image>
    <p class="text">222</p>
  </div>
</div>
</template>
<script>
import * as echarts from 'echarts';
export  default {
  data(){
return{
  src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
  justify-content: space-between;
  #little-box{
    height: 300px;
    width: 300px;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: white;
    .text{
      margin-top:10px ;
      font-size: 14px;
    }
  }
}

</style>

