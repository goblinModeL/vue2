import {resize} from "./echarts-rem";

export var option0=()=> {
  return{
    // tooltip: {
    //   trigger: 'axis'
    // },
    grid:{
      show:false,
      right:'5%',
    },
    title:{
      show:true,//false
      text:"2012-2022全国65周岁以上的老年人占比",//主标题文本
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
    data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018','2019', '2020', '2021', '2022']
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
      data: [9.4, 9.7, 10.1, 10.5,  10.8, 11.4,11.9,12.6,13.5,14.2,14.9],
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
export var option1=()=> {
  return{
    // tooltip: {
    //   trigger: 'axis'
    // },
    grid:{
      show:false,
      right:'5%',
    },
    title:{
      show:true,//false
      text:"2012-2022全国60周岁以上的老年人占比",//主标题文本
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
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018','2019', '2020', '2021', '2022']
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
        data: [14.3, 14.9, 15.5, 16.1, 16.7, 17.3, 17.9,18.1,18.7,18.9,19.8],
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
  //第七次普查
  return {
    tooltip: {
      trigger: 'item'
    },
    title:{
      show:true,//false
      text:"各年龄占比",//主标题文本
      textStyle:{
        color:'black',//'red'，字体颜色
        fontStyle:'normal',//'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
        fontWeight:'normal',//'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
        fontFamily:'sans-serif',//'sans-serif' | 'serif' | 'monospace' | 'Arial' | 'Courier New'
        // 'Microsoft YaHei'(微软雅黑) ，文字字体
        fontSize:14,//字体大小
        lineHeight:13,//字体行高
      }},
    grid:{
      show:false,
      top:'20%',
    },
    series: [
      {
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
          { value: 17.95, name: '0-14岁' },
          { value: 63.35, name: '15-59岁' },
          { value: 18.7, name: '60岁以上' },
          { value: 13.50, name: '65岁及以上' },
        ]
      }
    ]
  }
};
export var option3=() => {
  //第七次普查
  return {
    tooltip: {
      trigger: 'item'
    },
    title:{
      show:true,//false
      text:"2019年死亡人数中各疾病占比",//主标题文本
      textStyle:{
        color:'black',//'red'，字体颜色
        fontStyle:'normal',//'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
        fontWeight:'normal',//'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
        fontFamily:'sans-serif',//'sans-serif' | 'serif' | 'monospace' | 'Arial' | 'Courier New'
        // 'Microsoft YaHei'(微软雅黑) ，文字字体
        fontSize:14,//字体大小
        lineHeight:13,//字体行高
      }},
    grid:{
      show:false,
      top:'20%',
    },
    series: [
      {
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
          { value: 47.1, name: '心血管' },
          { value: 24.1, name: '癌症' },
          { value: 8.8, name: '慢性呼吸疾病' },
          { value: 2.5, name: '糖尿病' },
        ]
      }
    ]
  }
};
export var option4=() => {
  //第七次普查
  return {
    tooltip: {
      trigger: 'item'
    },
    title:{
      show:true,//false
      text:"常见疾病患病率",//主标题文本
      textStyle:{
        color:'black',//'red'，字体颜色
        fontStyle:'normal',//'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
        fontWeight:'normal',//'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
        fontFamily:'sans-serif',//'sans-serif' | 'serif' | 'monospace' | 'Arial' | 'Courier New'
        // 'Microsoft YaHei'(微软雅黑) ，文字字体
        fontSize:14,//字体大小
        lineHeight:13,//字体行高
      }},
    grid:{
      show:false,
      top:'20%',
    },
    series: [
      {
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
          { value: 7.1, name: '肥胖' },
          { value: 50.7, name: '超重' },
          { value: 27.5, name: '高血压' },
          { value: 11.9, name: '糖尿病' },
        ]
      }
    ]
  }
};
export var option5=() => {
  //第七次普查
  return {
    tooltip: {
      trigger: 'item'
    },
    title:{
      show:true,//false
      text:"各年龄占比",//主标题文本
      textStyle:{
        color:'black',//'red'，字体颜色
        fontStyle:'normal',//'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
        fontWeight:'normal',//'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
        fontFamily:'sans-serif',//'sans-serif' | 'serif' | 'monospace' | 'Arial' | 'Courier New'
        // 'Microsoft YaHei'(微软雅黑) ，文字字体
        fontSize:14,//字体大小
        lineHeight:13,//字体行高
      }},
    grid:{
      show:false,
      top:'20%',
    },
    series: [
      {
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
          { value: 17.95, name: '0-14岁' },
          { value: 63.35, name: '15-59岁' },
          { value: 18.7, name: '60岁以上' },
          { value: 13.50, name: '65岁及以上' },
        ]
      }
    ]
  }
};

export var option6=() => {
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
export var option7=() => {
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
export var option8=() => {
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

//阳虚质
export   const questions1 = [
  "（1）您手脚发凉吗？",
  "（2）您胃脘部、背部或腰膝部怕冷吗？",
  "（3）您感到怕冷、衣服比别人穿得多吗？",
  "（4）您比一般人不了寒冷（冬天的寒冷，夏天的冷空调、电扇等）。",
  "（5）您比别人容易患感冒吗？",
  "（6）您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉东西吗？",
  "（7）你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？"
];

//阴虚

export  const questions2 = [
  "（1）您感到手脚心发热吗？",
  "（2）您感觉身体、脸上发热吗？",
  "（3）您皮肤或口唇干吗？",
  "（4）您口唇的颜色比一般人红吗？",
  "（5）您容易便秘或大便干燥吗？",
  "（6）您面部两潮红或偏红吗？",
  "（7）您感到眼睛干涩吗？",
  "（8）您活动量稍大就容易出虚汗吗？"
];
//气虚
export const questions3 = [
  "（1）你容易疲乏吗？",
  "（2）您容易气短（呼吸短促，接不上气吗？",
  "（3）您容易心慌吗？",
  "（4）您容易头晕或站起时晕眩吗？",
  "（5）您比别人容易患感冒吗？",
  "（6）您喜欢安静、懒得说话吗？",
  "（7）您说话声音无力吗？",
  "（8）您活动量就容易出虚汗吗？"
];
//滩湿
export const questions4 = [
  "（1）您感到胸闷或腹部胀满吗？",
  "（2）您感到身体沉重不轻松或不爽快吗？",
  "（3）您腹部肥满松软吗？",
  "（4）您有额部油脂分泌多的现象吗？",
  "（5）您上眼睑比别人肿（仍轻微隆起的现象）吗？",
  "（6）您嘴里有黏黏的感觉吗？",
  "（7）您平时痰多，特别是咽喉部总感到有痰堵着吗？",
  "（8）您舌苔厚腻或有舌苔厚厚的感觉吗？"
];

// 湿热
export const questions5 = [
  "（1）您面部或鼻部有油腻感或者油亮发光吗？",
  "（2）你容易生痤疮或疮疖吗？",
  "（3）您感到口苦或嘴里有异味吗？",
  "（4）您大使黏滞不爽、有解不尽的感觉吗？",
  "（5）您小便时尿道有发热感、尿色浓（深）吗？",
  "（6）您带下色黄（白带颜色发黄）吗？（限女性回答）",
  "（7）您的阴囊部位潮湿吗？"
];
//血瘀质
export const questions6 = [
  "（1）您的皮肤在不知不觉中会出现青紫瘀斑（皮下出血）吗？",
  "（2）您两颧部有细微红丝吗？",
  "（3）您身体上有哪里疼痛吗？",
  "（4）您面色晦黯或容易出现褐斑吗？",
  "（5）您容易有黑眼圈吗？",
  "（6）您容易忘事（健忘）吗？",
  "（7）您口唇颜色偏黯吗？"
];
//特禀质
export const  questions7 = [
  "（1）您没有感冒时也会打喷嚏吗？",
  "（2）您没有感冒时也会鼻塞、流鼻涕吗？",
  "（3）您有因季节变化、温度变化或异味等原因而咳喘的现象吗？",
  "（4）您容易过敏（对药物、食物、气味、花粉或在季节交替、气候变化时）吗？",
  "（5）您的皮肤容易起荨麻疹（风团、风疹块、风疙瘩）吗？",
  "（6）您的因过敏出现过紫癜（紫红色瘀点、瘀斑）吗？",
  "（7）您的皮肤一抓就红，并出现抓痕吗？"
];

//气郁
export const questions8 = [
  "（1）您感到闷闷不乐吗？",
  "（2）您容易精神紧张、焦虑不安吗？",
  "（3）您多愁善感、感情脆弱吗？",
  "（4）您容易感到害怕或受到惊吓吗？",
  "（5）您胁肋部或乳房腹痛吗？",
  "（6）您无缘无故叹气吗？",
  "（7）您咽喉部有异物感，且吐之不出、咽之不下吗？"
];
//平和
export  const questions9 = [
  "（1）您精力充沛吗？",
  "（2）您容易疲乏吗？*",
  "（3）您说话声音无力吗？*",
  "（4）您感到闷闷不乐吗？*",
  "（5）您比一般人耐受不了寒冷（冬天的寒冷，夏天的冷空调、电扇）吗？*",
  "（6）您能适应外界自然和社会环境的变化吗？",
  "（7）您容易失眠吗？*",
  "（8）您容易忘事（健忘）吗？*"
];

export const questionsArray = [
  questions1,
  questions2,
  questions3,
  questions4,
  questions5,
  questions6,
  questions7,
  questions8,
  questions9
];
export  const descriptionsArray = [
  "阳虚质",
  "阴虚质",
  "气虚质",
  "湿热质",
  "痰湿质",
  "血瘀质",
  "特禀质",
  "气郁质",
  "平和质"
];

