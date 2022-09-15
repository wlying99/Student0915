<template>
 <div class="bg">
  <div  class="rim">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新生统计</el-breadcrumb-item>
    </el-breadcrumb>
    <div
      style="
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      "
    >
      <div id="myChart" :style="{ width: '100%', height: '45%' }"></div>
      <div
        id="myChart2"
        :style="{ width: '100%', height: '40%', marginTop: '8px' }"
      ></div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      option: {
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
          minInterval: 1,
        },
        series: [
          {
            name: "人数",
            data: [],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      },
      option2: {
        tooltip: {
           // trigger 触发方式,非轴图形，使用item的意思是放到数据对应图形上触发提示
          trigger: "item",
        },
        series: [
          {
            name: "人数",
            type: "pie",
            radius: "90%",
            data: [
              // { value: 1048, name: "Search Engine" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.getData();
    this.getCollege();
  },
  methods: {
    getData() {
      this.ajax
        .get(this.$store.state.api + "tongStudent", "")
        .then((res) => {
          if (res.data[0].length > 0) {
            this.data = res.data[0];
          }
          this.drawLine();
        })
        .catch((err) => {
         
          console.error(err);
        });
    },

    getCollege(){
      this.ajax.get(this.$store.state.api + "zhuanStudent", "")
      .then((res) =>{
        if(res.data[0].length>0){
          this.data = res.data[0];
        }
        console.log(res.data);
        this.drawPie();
      }).catch((err) =>{
        
        console.error(err);
      })
    },

    drawLine() {
      if (this.data.length > 0) {
        //实例化对象
        let myChart = this.$echarts.init(document.getElementById("myChart"));
        for (var i in this.data) {
          this.option.xAxis.data.push(this.data[i].major);
          this.option.series[0].data.push(this.data[i].num);
        }
        // 把配置给实例对象
        myChart.setOption(this.option);
      }
    },
    drawPie(){
      if(this.data.length>0){
        // 实例化对象
         let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
        for (var i in this.data) {
          this.option2.series[0].data.push({
            value: this.data[i].num,
            name: this.data[i].college,
          });
        }
        // 把配置给实例对象
        myChart2.setOption(this.option2);
      }
    }
  },
};
</script>

<style lang="less" scoped>
 .bg{
   width: 100%;
   height: 100%;
  //  background-image: url("../assets/images/bg.jpg") ;
 }
 .rim{
   height: 100%;
   padding-top: 20px;
   padding-left: 20px;
   color: #fff;
 }
</style>>
