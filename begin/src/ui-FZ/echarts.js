import {resize} from "./echarts-rem";

export var option=()=> {
  return{
    tooltip: {
      trigger: 'axis'
    },
    grid:{
      show:false,
      right:'5%',
    },
    title:{
      show:true,//false
      text:"图表标题",//主标题文本
      textStyle:{
        color:'black',//'red'，字体颜色
        fontStyle:'normal',//'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
        fontWeight:'normal',//'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
        fontFamily:'sans-serif',//'sans-serif' | 'serif' | 'monospace' | 'Arial' | 'Courier New'
        // 'Microsoft YaHei'(微软雅黑) ，文字字体
        fontSize:14,//字体大小
        lineHeight:13,//字体行高
      }},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    splitLine: {
      show: false
    },
    type: 'value'
  },
  series: [
    {
      symbol: "none",
      data: [80, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          color: 'green',
          width: 1,
        }
      },
      areaStyle: {
        normal: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: "#dc3881" // 0% 处的颜色
            }, {
              offset: 0.5,
              color: "rgba(220,56,129,0.7)"
            },
              {
                offset: 1,
                color: "rgba(220,56,129,0)"
              }
            ],
            globalCoord: false // 缺省为 false
          }
        }
      },
    }
  ]
}};
export var option2=() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      top: '0%',
      left: 'left',
      itemWidth: resize(10),   // 设置图例图形的宽
      itemHeight:  resize(10),
    },
    grid:{
      show:false,
      top:'20%',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: 'bold'
        //   }
        // },
        labelLine: {
          show: false
        },
        data: [
          {value: 1048, name: 'Search Engine'},
          {value: 735, name: 'Direct'},
          {value: 580, name: 'Email'},
          {value: 484, name: 'Union Ads'},
          {value: 300, name: 'Video Ads'}
        ]
      }
    ]
  }
};
