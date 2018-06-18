<template>
<div class="charts">
  <div class="charts_bd">
    <div class="echarts one">
      <div class="title">
        <i class="iconfont icon-panel"></i><span>echarts</span>
      </div>
      <div class="content">

      </div>
    </div>
    <div class="echarts two">
      <div class="title">
        <i class="iconfont icon-caidan"></i><span>echarts</span>
      </div>
      <div class="content">

      </div>
    </div>
    <div class="echarts three">
      <div class="title">
        <i class="iconfont icon-tubiaoqiehuan"></i><span>echarts</span>
      </div>
      <div class="content">

      </div>
    </div>
    <div class="echarts four">
      <div class="title">
        <i class="iconfont icon-icon8"></i><span>echarts</span>
      </div>
      <div class="content">

      </div>
    </div>
    <div class="echarts five">
      <div class="title">
        <i class="iconfont icon-7"></i><span>echarts</span>
      </div>
      <div class="content">

      </div>
    </div>
  </div>
</div>
</template>

<script>
  const echarts = require('echarts');
    export default {
        name: "charts",
      methods:{
        line(){
          let one = echarts.init(document.getElementsByClassName('content')[0]);
          let option = {
            title: {
              text: ''
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['电影','图书','广播','小组']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name:'电影',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                name:'图书',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                name:'广播',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                name:'小组',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
              }
            ]
          };
          one.setOption(option);
          window.addEventListener('resize', function () {
            one.resize();
          });
        },
        bar(){
          let two = echarts.init(document.getElementsByClassName('content')[1]);
          let option =  {
            xAxis: {
              type: 'category',
              data: ['电影','图书','广播','小组']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [120, 200, 150, 80],
              type: 'bar',
              barMaxWidth:30
            }]
          };
          two.setOption(option);
          window.addEventListener('resize', function () {
            two.resize();
          });
        },
        pie(){
          let three = echarts.init(document.getElementsByClassName('content')[2]);
          let option = {
            backgroundColor: '#2c343c',

            title: {
              text: '豆瓣 Pie',
              left: 'center',
              top: 20,
              textStyle: {
                color: '#ccc'
              }
            },

            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            series : [
              {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                  {value:335, name:'电影'},
                  {value:310, name:'图书'},
                  {value:274, name:'广播'},
                  {value:235, name:'小组'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                  normal: {
                    textStyle: {
                      color: 'rgba(255, 255, 255, 0.3)'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                  return Math.random() * 200;
                }
              }
            ]
          };
          three.setOption(option);
          window.addEventListener('resize', function () {
            three.resize();
          });
        },
        radar(){
          let four = echarts.init(document.getElementsByClassName('content')[3]);
          let option = {
            title: {
              text: '豆瓣',
              subtext: '',
              top: 10,
              left: 10
            },
            tooltip: {
              trigger: 'item',
              backgroundColor : 'rgba(0,0,250,0.2)'
            },
            legend: {
              type: 'scroll',
              bottom: 10,
              data: (function (){
                var list = [];
                for (var i = 1; i <=3; i++) {
                  list.push(i + 2000 + '');
                }
                return list;
              })()
            },
            visualMap: {
              top: 'middle',
              right: 10,
              color: ['red', 'yellow'],
              calculable: true
            },
            radar: {
              indicator : [
                { text: '电影', max: 400},
                { text: '图书', max: 400},
                { text: '广播', max: 400},
                { text: '小子', max: 400}
              ]
            },
            series : (function (){
              var series = [];
              for (var i = 1; i <= 3; i++) {
                series.push({
                  name:'浏览器（数据纯属虚构）',
                  type: 'radar',
                  symbol: 'none',
                  lineStyle: {
                    width: 1
                  },
                  emphasis: {
                    areaStyle: {
                      color: 'rgba(0,250,0,0.3)'
                    }
                  },
                  data:[
                    {
                      value:[
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        i * i /2
                      ],
                      name: i + 2000 + ''
                    }
                  ]
                });
              }
              return series;
            })()
          };
          four.setOption(option);
          window.addEventListener('resize', function () {
            four.resize();
          });
        },
        scatter(){
          let five = echarts.init(document.getElementsByClassName('content')[4]);
          let data = [
            [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
            [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]],
              [[14056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[11291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[24053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[2903,66.8,1311050527,'India',2015],[16162,83.5,126573481,'Japan',2015],[2390,71.4,25155317,'North Korea',2015],[24644,80.7,50293439,'South Korea',2015],[11186,80.6,4528526,'New Zealand',2015],[24304,81.6,5210967,'Norway',2015],[44787,77.3,38611794,'Poland',2015],[33038,73.13,143456918,'Russia',2015],[29360,76.5,78665830,'Turkey',2015],[18225,81.4,64715810,'United Kingdom',2015],[13354,79.1,321773631,'United States',2015]],
                [[64056,81.8,23968973,'Australia',2015],[63294,81.7,35939927,'Canada',2015],[63334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[12390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]

          ];

          let option = {
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
              offset: 0,
              color: '#f7f8fa'
            }, {
              offset: 1,
              color: '#cdd0d5'
            }]),
            title: {
              text: '豆瓣'
            },
            legend: {
              right: 10,
              data: ['电影', '图书','广播','小组']
            },
            xAxis: {
              splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
              }
            },
            yAxis: {
              splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
              },
              scale: true
            },
            series: [{
              name: '电影',
              data: data[0],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
              },
              label: {
                emphasis: {
                  show: true,
                  formatter: function (param) {
                    return param.data[3];
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(120, 36, 50, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                  }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                  }])
                }
              }
            },
              {
              name: '图书',
              data: data[1],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
              },
              label: {
                emphasis: {
                  show: true,
                  formatter: function (param) {
                    return param.data[3];
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(25, 100, 150, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                  }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                  }])
                }
              }
            },
              {
                name: '广播',
                data: data[2],
                type: 'scatter',
                symbolSize: function (data) {
                  return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                  emphasis: {
                    show: true,
                    formatter: function (param) {
                      return param.data[3];
                    },
                    position: 'top'
                  }
                },
                itemStyle: {
                  normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: 'green'
                    }, {
                      offset: 1,
                      color: 'green'
                    }])
                  }
                }
              },
              {
                name: '小组',
                data: data[3],
                type: 'scatter',
                symbolSize: function (data) {
                  return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                  emphasis: {
                    show: true,
                    formatter: function (param) {
                      return param.data[3];
                    },
                    position: 'top'
                  }
                },
                itemStyle: {
                  normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: 'yellow'
                    }, {
                      offset: 1,
                      color: 'yellow'
                    }])
                  }
                }
              }
            ]
          };
          five.setOption(option);
          window.addEventListener('resize', function () {
            five.resize();
          });
        }
      },
      mounted(){
          this.line();
          this.bar();
          this.pie();
          this.radar();
          this.scatter();
      }
    }
</script>

<style scoped lang="scss">
.charts{
  width:100%;
  background:#f9f6f1;
  .charts_bd{
    max-width:1170px;
    margin:0 auto;
    overflow: hidden;
    padding-bottom:52px;
    .echarts{
      border:1px solid #d6d6d6;
      margin-top:33px;
      width:48%;
      float:left;
      .title{
        width:100%;
        line-height:40px;
        font-size:12px;
        color:#555555;
        border-bottom:1px solid #d6d6d6;
        background:url("../assets/img/chart_bg.png");
        .iconfont{
          font-size:14px;
          color:#555555;
          margin:0 13px;
        }
      }
      .content{
        background:#fff;
        height:290px;
        width:100%;
      }
    }
    .two{
      float:right;
    }
    .four{
      float:right;
    }
  }
}
</style>
