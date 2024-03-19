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
// const colors = [
//   [
//     {offset: 0, color: 'rgba(52, 185, 255, 1)'},
//     {offset: 1, color: 'rgba(2, 38, 85, 0.60)'},
//   ],
//   [
//     {offset: 0, color: 'rgba(52, 185, 255, 1)'},
//     {offset: 1, color: 'rgba(2, 38, 85, 0.60)'},
//   ],
//   [
//     {offset: 0, color: 'rgba(52, 185, 255, 1)'},
//     {offset: 1, color: 'rgba(2, 38, 85, 0.60)'},
//   ],
//   [
//     {offset: 0, color: 'rgba(52, 185, 255, 1)'},
//     {offset: 1, color: 'rgba(2, 38, 85, 0.60)'},
//   ],
//   [
//     {offset: 0, color: 'rgba(52, 185, 255, 1)'},
//     {offset: 1, color: 'rgba(2, 38, 85, 0.60)'},
//   ],
//   [
//     {offset: 0, color: 'rgba(52, 185, 255, 1)'},
//     {offset: 1, color: 'rgba(2, 38, 85, 0.60)'},
//   ],
// ];
//
// export   var option4=(seriesData) =>{
//   return  {
//     // tooltip: { // 将 tooltip 配置放在顶层
//     //   show: true, // 显示 tooltip
//     //   trigger: 'item',
//     //   formatter: function(params) {
//     //     // 计算占比
//     //     let percentage = (params.value / count * 100).toFixed(2) + '%';
//     //     let text = ''
//     //     if (params.data.add > 0) {
//     //       text = '本月新增'
//     //     } else {
//     //       text = '本月减少'
//     //     }
//     //     let textColor = (params.data.add > 0) ? '#2BC2FF' : '#FF4800';
//     //     let font='DINPro Bold'
//     //     // 返回格式化后的字符串
//     //     return '共' + params.value + '人&nbsp;&nbsp;' + percentage + '<br>'+text+'&nbsp;<div style="color:' + textColor + ';font-family:'+font+';display: inline">' +Math.abs( params.data.add) + '</div>&nbsp;人'
//     //   },
//     //   backgroundColor: '#072027',
//     //   textStyle: {
//     //     color: '#B9FDFF',
//     //     fontsize: resize(12),
//     //   },
//     //
//     //   // 可以根据需要添加其他 tooltip 的配置项
//     // },
//
//     grid: {
//       width: "100%",
//       height: "90%",
//       containLabel: true,
//       top: resize(20),
//       left: "0px",
//       right: "0px",
//       bottom: resize(20)
//     },
//     xAxis: {
//       axisTick: {
//         show: false
//       },
//       axisLine: {
//         show:true,
//         lineStyle: {
//           color:'rgba(255,255,255,0.16)'}
//       },
//       axisLabel: {
//         color: '#FFFFFF',
//         fontSize: resize(17),
//         interval: 0
//
//       },
//       data: ['测试1','测试2','测试3','测试4','测试5','测试6'],
//     },
//     // legend: {
//     //   data: getlegendData(),
//     //   right: '25',
//     //   top: '18',
//     //   icon: 'rect',
//     //   itemHeight: 10,
//     //   itemWidth: 10,
//     //   textStyle: {
//     //     color: '#000'
//     //   }
//     // },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         color: '#FFFFFF',
//         fontSize: resize(16)
//       },
//       splitLine: {
//         show: true,
//         lineStyle: {
//           type: 'dashed',
//           color: ['rgba(255,255,255,0.16)']
//         }
//       }
//     },
//     series: getSeriesData(seriesData)
//   }
// }
// function getSeriesData(seriesData) {
//   const data = [];
//   seriesData.forEach((item, index) => {
//     data.push(
//       {
//         type: 'custom',
//         name: Object.keys(item)[0],
//         renderItem: function (params, api) {
//           return getRenderItem(params, api);
//         },
//         data: [{'value':Object.values(item)[1],}],
//         add:item.change,
//         itemStyle: {
//           color: () => {
//             return new echarts.graphic.LinearGradient(0, 0, 0, 1, colors[index]);
//           },
//         },
//       }
//     )
//   })
//   console.log(data)
//   return data
// }
// function getRenderItem(params, api) {
//   const index = params.seriesIndex;
//   let location = api.coord([api.value(0) + index, api.value(1)]);
//   var extent = api.size([0, api.value(1)]);
//   return {
//     type: 'group',
//     children: [
//       {
//         type: 'leftRect',
//         shape: {
//           api,
//           xValue: api.value(0) + index,
//           yValue: api.value(1),
//           x: location[0],
//           y: location[1]
//         },
//         style: api.style()
//       },
//       {
//         type: 'rightRect',
//         shape: {
//           api,
//           xValue: api.value(0) + index,
//           yValue: api.value(1),
//           x: location[0],
//           y: location[1]
//         },
//         style: api.style()
//       }
//     ]
//   };
// }
// // 定义柱状图左侧图形元素
// const leftRect = echarts.graphic.extendShape({
//   shape: {
//     x: 0,
//     y: 0,
//     width: resize(19),//柱状图宽
//     zWidth: resize(8), //阴影折角宽
//     zHeight: resize(4) //阴影折角高
//   },
//   buildPath: function (ctx, shape) {
//     const api = shape.api;
//     const xAxisPoint = api.coord([shape.xValue, 0]);
//     const p0 = [shape.x - shape.width / 2, shape.y - shape.zHeight];
//     const p1 = [shape.x - shape.width / 2, shape.y - shape.zHeight];
//     const p2 = [xAxisPoint[0] - shape.width / 2, xAxisPoint[1]];
//     const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
//     const p4 = [shape.x + shape.width / 2, shape.y];
//
//     ctx.moveTo(p0[0], p0[1]);
//     ctx.lineTo(p1[0], p1[1]);
//     ctx.lineTo(p2[0], p2[1]);
//     ctx.lineTo(p3[0], p3[1]);
//     ctx.lineTo(p4[0], p4[1]);
//     ctx.lineTo(p0[0], p0[1]);
//     ctx.closePath();
//   }
// });
// // 定义柱状图右侧以及顶部图形元素
// const rightRect = echarts.graphic.extendShape({
//   shape: {
//     x: 0,
//     y: 0,
//     width: resize(18),
//     zWidth: resize(15),
//     zHeight: 8
//   },
//   buildPath: function (ctx, shape) {
//     const api = shape.api;
//     const xAxisPoint = api.coord([shape.xValue, 0]);
//     const p1 = [shape.x - shape.width / 2, shape.y - shape.zHeight / 2];
//     const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
//     const p4 = [shape.x + shape.width / 2, shape.y];
//     const p5 = [xAxisPoint[0] + shape.width / 2 + shape.zWidth, xAxisPoint[1]];
//     const p6 = [
//       shape.x + shape.width / 2 + shape.zWidth,
//       shape.y - shape.zHeight / 2
//     ];
//     const p7 = [
//       shape.x - shape.width / 2 + shape.zWidth,
//       shape.y - shape.zHeight
//     ];
//     ctx.moveTo(p4[0], p4[1]);
//     ctx.lineTo(p3[0], p3[1]);
//     ctx.lineTo(p5[0], p5[1]);
//     ctx.lineTo(p6[0], p6[1]);
//     ctx.lineTo(p4[0], p4[1]);
//
//     ctx.moveTo(p4[0], p4[1]);
//     ctx.lineTo(p6[0], p6[1]);
//     ctx.lineTo(p7[0], p7[1]);
//     ctx.lineTo(p1[0], p1[1]);
//     ctx.lineTo(p4[0], p4[1]);
//     ctx.closePath();
//   }
// });
//
// // 注册图形元素
// echarts.graphic.registerShape('leftRect', leftRect);
// echarts.graphic.registerShape('rightRect', rightRect);
