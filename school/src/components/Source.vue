<template>
  <div class="bg">
    <div class="rim">
      <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>来源展示</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <!-- 视图展示区域 -->
    <div class="view">
      <!-- 监控滚动 -->
      <div class="panel monitor">
        <div class="inner">
          <div class="content">
            <div class="head">
              <span class="col">学号</span>
              <span class="col">姓名</span>
              <span class="col">班级</span>
              <span class="col">籍贯</span>
            </div>

            <div class="marquee-view">
              <div class="marquee">
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">张三</span>
                  <span class="col">计科1902</span>
                  <span class="col">四川</span>
                </div>
                <div class="row">
                  <span class="col">20190601</span>
                  <span class="col">李四</span>
                  <span class="col">计科1902</span>
                  <span class="col">云南</span>
                </div>
                <div class="row">
                  <span class="col">20190704</span>
                  <span class="col">王五</span>
                  <span class="col">计科1902</span>
                  <span class="col">上海</span>
                </div>
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">贡慧</span>
                  <span class="col">计科1902</span>
                  <span class="col">北京</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">宫音</span>
                  <span class="col">计科1902</span>
                  <span class="col">陕西</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">步筠</span>
                  <span class="col">计科1902</span>
                  <span class="col">西藏</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">步筠</span>
                  <span class="col">计科1902</span>
                  <span class="col">湖南</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">弓芃</span>
                  <span class="col">计科1902</span>
                  <span class="col">广州</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">弓芃</span>
                  <span class="col">计科1902</span>
                  <span class="col">重庆</span>
                </div>
                <div class="row">
                  <span class="col">20190710</span>
                  <span class="col">田晴</span>
                  <span class="col">计科1902</span>
                  <span class="col">宁夏</span>
                </div>
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">张三</span>
                  <span class="col">计科1902</span>
                  <span class="col">四川</span>
                </div>
                <div class="row">
                  <span class="col">20190601</span>
                  <span class="col">李四</span>
                  <span class="col">计科1902</span>
                  <span class="col">云南</span>
                </div>
                <div class="row">
                  <span class="col">20190704</span>
                  <span class="col">王五</span>
                  <span class="col">计科1902</span>
                  <span class="col">上海</span>
                </div>
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">贡慧</span>
                  <span class="col">计科1902</span>
                  <span class="col">北京</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">宫音</span>
                  <span class="col">计科1902</span>
                  <span class="col">陕西</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">步筠</span>
                  <span class="col">计科1902</span>
                  <span class="col">西藏</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">步筠</span>
                  <span class="col">计科1902</span>
                  <span class="col">湖南</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">弓芃</span>
                  <span class="col">计科1902</span>
                  <span class="col">广州</span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">弓芃</span>
                  <span class="col">计科1902</span>
                  <span class="col">重庆</span>
                </div>
                <div class="row">
                  <span class="col">20190710</span>
                  <span class="col">田晴</span>
                  <span class="col">计科1902</span>
                  <span class="col">宁夏</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 来源统计 -->
      <div class="panel bar">
        <div class="inner">
          <h3>全部学生来源统计</h3>
        <div class="tu"></div>
        </div>
      </div>
    </div>

    <!-- 地图区域 --> 
    <div class="chart">
      <div ref="echarts" :style="size"></div>
    </div>
  </div>
</template>

<script>
import "../assets/Sourcejs/china";
import * as echarts from "echarts";
import "../assets/Sourcejs/jquery.min.js"


 // 中间省略的数据  准备三项
   var item={
            name: '',
            value: 1200,
            // 柱子颜色
            itemStyle: {
                color: '#254065'
            },
            // 鼠标经过柱子颜色
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            // 工具提示隐藏
            tooltip: {
                extraCssText: 'opacity:0'
            },
        }
// 各地区经纬度
var geoCoordMap = {
  上海: [121.4648, 31.2891],
  东莞: [113.8953, 22.901],
  东营: [118.7073, 37.5513],
  中山: [113.4229, 22.478],
  临汾: [111.4783, 36.1615],
  临沂: [118.3118, 35.2936],
  丹东: [124.541, 40.4242],
  丽水: [119.5642, 28.1854],
  乌鲁木齐: [87.9236, 43.5883],
  佛山: [112.8955, 23.1097],
  保定: [115.0488, 39.0948],
  兰州: [103.5901, 36.3043],
  包头: [110.3467, 41.4899],
  北京: [116.4551, 40.2539],
  北海: [109.314, 21.6211],
  南京: [118.8062, 31.9208],
  南宁: [108.479, 23.1152],
  南昌: [116.0046, 28.6633],
  南通: [121.1023, 32.1625],
  厦门: [118.1689, 24.6478],
  台州: [121.1353, 28.6688],
  合肥: [117.29, 32.0581],
  呼和浩特: [111.4124, 40.4901],
  咸阳: [108.4131, 34.8706],
  哈尔滨: [127.9688, 45.368],
  唐山: [118.4766, 39.6826],
  嘉兴: [120.9155, 30.6354],
  大同: [113.7854, 39.8035],
  大连: [122.2229, 39.4409],
  天津: [117.4219, 39.4189],
  太原: [112.3352, 37.9413],
  威海: [121.9482, 37.1393],
  宁波: [121.5967, 29.6466],
  宝鸡: [107.1826, 34.3433],
  宿迁: [118.5535, 33.7775],
  常州: [119.4543, 31.5582],
  广州: [113.5107, 23.2196],
  廊坊: [116.521, 39.0509],
  延安: [109.1052, 36.4252],
  张家口: [115.1477, 40.8527],
  徐州: [117.5208, 34.3268],
  德州: [116.6858, 37.2107],
  惠州: [114.6204, 23.1647],
  成都: [103.9526, 30.7617],
  绵阳: [104.334, 31.3302],
  扬州: [119.4653, 32.8162],
  承德: [117.5757, 41.4075],
  拉萨: [91.1865, 30.1465],
  无锡: [120.3442, 31.5527],
  日照: [119.2786, 35.5023],
  昆明: [102.9199, 25.4663],
  杭州: [119.5313, 29.8773],
  枣庄: [117.323, 34.8926],
  柳州: [109.3799, 24.9774],
  株洲: [113.5327, 27.0319],
  武汉: [114.3896, 30.6628],
  汕头: [117.1692, 23.3405],
  江门: [112.6318, 22.1484],
  沈阳: [123.1238, 42.1216],
  沧州: [116.8286, 38.2104],
  河源: [114.917, 23.9722],
  泉州: [118.3228, 25.1147],
  泰安: [117.0264, 36.0516],
  泰州: [120.0586, 32.5525],
  济南: [117.1582, 36.8701],
  济宁: [116.8286, 35.3375],
  海口: [110.3893, 19.8516],
  淄博: [118.0371, 36.6064],
  淮安: [118.927, 33.4039],
  深圳: [114.5435, 22.5439],
  清远: [112.9175, 24.3292],
  温州: [120.498, 27.8119],
  渭南: [109.7864, 35.0299],
  湖州: [119.8608, 30.7782],
  湘潭: [112.5439, 27.7075],
  滨州: [117.8174, 37.4963],
  潍坊: [119.0918, 36.524],
  烟台: [120.7397, 37.5128],
  玉溪: [101.9312, 23.8898],
  珠海: [113.7305, 22.1155],
  盐城: [120.2234, 33.5577],
  盘锦: [121.9482, 41.0449],
  石家庄: [114.4995, 38.1006],
  福州: [119.4543, 25.9222],
  秦皇岛: [119.2126, 40.0232],
  绍兴: [120.564, 29.7565],
  聊城: [115.9167, 36.4032],
  肇庆: [112.1265, 23.5822],
  舟山: [122.2559, 30.2234],
  苏州: [120.6519, 31.3989],
  莱芜: [117.6526, 36.2714],
  菏泽: [115.6201, 35.2057],
  营口: [122.4316, 40.4297],
  葫芦岛: [120.1575, 40.578],
  衡水: [115.8838, 37.7161],
  衢州: [118.6853, 28.8666],
  西宁: [101.4038, 36.8207],
  西安: [109.1162, 34.2004],
  贵阳: [106.6992, 26.7682],
  连云港: [119.1248, 34.552],
  邢台: [114.8071, 37.2821],
  邯郸: [114.4775, 36.535],
  郑州: [113.4668, 34.6234],
  鄂尔多斯: [108.9734, 39.2487],
  重庆: [107.7539, 30.1904],
  金华: [120.0037, 29.1028],
  铜川: [109.0393, 35.1947],
  银川: [106.3586, 38.1775],
  镇江: [119.4763, 31.9702],
  长春: [125.8154, 44.2584],
  长沙: [113.0823, 28.2568],
  长治: [112.8625, 36.4746],
  阳泉: [113.4778, 38.0951],
  青岛: [120.4651, 36.3373],
  韶关: [113.7964, 24.7028],
};

// 以西安为中心飞到其他地方
var XAData = [
  [{ name: "北京", value: 100 }, { name: "绵阳" }],
  [{ name: "上海", value: 100 }, { name: "绵阳" }],
  [{ name: "西宁", value: 100 }, { name: "绵阳" }],
  [{ name: "长沙", value: 100 }, { name: "绵阳" }],
  [{ name: "青岛", value: 100 }, { name: "绵阳" }],
  [{ name: "武汉", value: 100 }, { name: "绵阳" }],
  [{ name: "哈尔滨", value: 100 }, { name: "绵阳" }],
  [{ name: "贵阳", value: 100 }, { name: "绵阳" }],
  [{ name: "乌鲁木齐", value: 100 }, { name: "绵阳" }],
  [{ name: "包头", value: 100 }, { name: "绵阳" }],
  [{ name: "拉萨", value: 100 }, { name: "绵阳" }],
];


// 航线绘制
var planePath =
  "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
//var planePath = 'arrow';
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];

    var fromCoord = geoCoordMap[dataItem[0].name];
    var toCoord = geoCoordMap[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
        value: dataItem[1].value,
      });
    }
  }
  return res;
};

var color = ["#fff", "#fff", "#fff"]; //航线的颜色
var series = [];
[
  ["绵阳", XAData],
  // ["西宁", XNData],
  // ["银川", YCData]
].forEach(function (item, i) {
  series.push(
    {
      name: item[0] + " Top3",
      type: "lines",
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: "red", //arrow箭头的颜色
        symbolSize: 3,
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2,
        },
      },
      data: convertData(item[1]),
    },
    {
      name: item[0] + " Top3",
      type: "lines",
      zlevel: 2,
      symbol: ["none", "arrow"],
      symbolSize: 10,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15,
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.6,
          curveness: 0.2,
        },
      },
      data: convertData(item[1]),
    },
    {
      name: item[0] + " Top3",
      type: "effectScatter",
      coordinateSystem: "geo",
      zlevel: 2,
      rippleEffect: {
        brushType: "stroke",
      },
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: "{b}",
        },
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
        emphasis: {
          areaColor: "#2B91B7",
        },
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
        };
      }),
    }
  );
});

export default {
  data: function () {
    return {
      myChart: {},
      myChart1:{},
      year: 2000,
      options: {
        tooltip: {
          trigger: "item",
          formatter: function (params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
              return "线路：" + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
              return (
                params.data.fromName +
                ">" +
                params.data.toName +
                "<br />" +
                params.data.value
              );
            } else {
              return params.name;
            }
          },
        },

        geo: {
          map: "china",
          label: {
            emphasis: {
              show: true,
              color: "#fff",
            },
          },
          roam: true,
          //   放大我们的地图
          zoom: 1,
          itemStyle: {
            normal: {
              areaColor: "#142957",
              borderColor: "rgba(43, 196, 243, 1)",
              borderWidth: 0.5,
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
        },
        series: series,
      },
      size: {
        width: "100%",
        height: "7rem",
      },
     
           // 2. 指定配置和数据
    option: {
        // 修改线性渐变色方式 1
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'item',
            // 轴触发提示才有效
            // axisPointer: {
            //     // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
            //     type: 'shadow'
            // }
        },
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            top: '3%',
            left: '0%',
            right: '3%',
            bottom: '3%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            // 刻度设置
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                // 不显示刻度
                show: false
            },
            // x坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // x坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        }],
        // 控制y轴
        yAxis: [{
            // 使用数据的值设为刻度文字
            type: 'value',
            // 刻度设置
            axisTick: {
                // 不显示刻度
                show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        // 控制x轴
        series: [{
            // 图表数据名称
            name: '用户统计',
            // 图表类型
            type: 'bar',
            // 柱子宽度
            barWidth: '60%',
            // 数据
            // series
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
        }]
    }
    };
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.echarts);
    this.myChart.setOption(this.options);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
    // 1. 实例化对象
    this.myChart1 = echarts.init(document.querySelector(".tu"));
    this.myChart1.setOption(this.option);

  },

  watch: {
    options: function () {
      this.myChart.setOption(this.options);
    },
    option:function(){
      this.myChart1.setOption(this.option);
    }
  },
};
</script>

<style lang="less" scoped>
.bg {
  box-sizing: border-box;
  position: relative;
  width: 1336px;
  height: 731px;
  //  background-color: aquamarine;
  background-image: url("../assets/images/bg1.jpg");
  //  background-size: contain;
}
.rim {
  width: 100%;
  height: 50px;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  color: #fff;
}

// 视图展示区
.view {
  display: inline-block;
  box-sizing: border-box;
  width: 500px;
  height: 665px;
  padding: 5px 20px 20px 40px;
  //  background-color: aquamarine;
}

.panel {
  position: relative;
  border: 15px solid transparent;
  border-width: 0.6375rem 0.475rem 0.25rem 1.65rem;
  border-image-source: url(../assets/images/border.png);
  border-image-slice: 51 38 20 132;
  margin-bottom: 0.1875rem;
}
.inner {
  position: absolute;
  top: -0.6375rem;
  left: -1.65rem;
  right: -0.475rem;
  bottom: -0.25rem;
  /* background-color: aqua; */
  padding: 0.3rem 0.45rem;
  /* margin-bottom: .25rem; */
}
.monitor {
  height: 300px;
}

.monitor .inner {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
}
.monitor .content {
  flex: 1;
  position: relative;
  display: block;
}

.monitor .head {
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px 36px;
  color: #68d8fe;
  font-size: 17px;
}

.monitor .marquee-view {
    position: absolute;
    top: 0.5rem;
    bottom: 0;
    width: 100%;
    overflow: hidden;
}

.monitor .row {
    display: flex;
    justify-content: space-between;
    line-height: 1.05;
    font-size: 0.15rem;
    color: #61a8ff;
    padding: 0.15rem 0.45rem;
}


.monitor .row:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #68d8fe;
}

// .monitor .row:hover .icon-dot {
//     opacity: 1;
// }

.monitor .col:first-child {
    width: 100px;
}

.monitor .col:nth-child(2) {
    width: 80px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.monitor .col:nth-child(3) {
    width: 100px;
}

.monitor .col:nth-child(4) {
    width: 80px;
}
/* 通过CSS3动画滚动marquee */

.marquee-view .marquee {
    animation: move 10s linear infinite;
}

@keyframes move {
    0% {}
    100% {
        transform: translateY(-50%);
    }
}


/* 3.鼠标经过marquee 就停止动画 */

.marquee-view .marquee:hover {
    animation-play-state: paused;
}

.bar{
  height: 240px;
}
.bar h3{
  height: 30px;
  color: whitesmoke;
}

.tu{
  height: 200px;
}


// Map区域
.chart {
  display: inline-block;
  box-sizing: border-box;
  //  position: absolute;
  //  top: 50%;
  //  left: 50%;
  //  transform: translate(-50%,-50%);
  //  display: flex;
  //  align-content: center;
  //  justify-content: center;
  width: 780px;
  height: 660px;
  padding: 40px 20px 20px 20px;
  //  background-color: cadetblue;
}
</style>