<template>
  <div class="rim">
    <div class="content">
         <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学校简介</el-breadcrumb-item>
    </el-breadcrumb>

      <div class="top">
        <div class="logo">
          <img src="../assets/images/logo-mianyangcitycollege.png" />
        </div>
        <div class="title">
          <ul class="nav">
            <li class="m1">
              <a href="#">学校概况</a>
              <ul class="m2">
                <li>
                  <a href="">学校简介</a>
                </li>
                <li>
                  <a href="">现任领导</a>
                </li>
                <li>
                  <a href="">历任领导</a>
                </li>
                <li>
                  <a href="">组织机构</a>
                </li>
                <li>
                  <a href="">历史沿革</a>
                </li>
              </ul>
            </li>
            
           <li class="m1">
              <a href="#">学校聚焦</a>
              <ul class="m2">
                <li>
                  <a href="">校园新闻</a>
                </li>
                <li>
                  <a href="">媒体关注</a>
                </li>
                <li>
                  <a href="">通知公告</a>
                </li>
              </ul>
            </li>
           <li class="m1">
              <a href="#">党团建设</a>
             <ul class="m2">
                <li>
                  <a href="">工作动态</a>
                </li>
                <li>
                  <a href="">学习资料</a>
                </li>
                <li>
                  <a href="">制度文件</a>
                </li>
              </ul>
            </li>
           <li class="m1">
              <a href="#">教学研究</a>
              <ul class="m2">
                <li>
                  <a href="">教学动态</a>
                </li>
                <li>
                  <a href="">科研动态</a>
                </li>
                <li>
                  <a href="">学术报告</a>
                </li>
              </ul>
            </li>
          <li class="m1">
              <a href="#">人才培养</a>
              <ul class="m2">
                <li>
                  <a href="">本科生教育</a>
                </li>
                <li>
                  <a href="">专科生教育</a>
                </li>
                <li>
                  <a href="">继续教育</a>
                </li>
              </ul>
            </li>
           <li class="m1">
              <a href="#">招生就业</a>
              <ul class="m2">
                <li>
                  <a href="">招生在线</a>
                </li>
                <li>
                  <a href="">就业在线</a>
                </li>
                <li>
                  <a href="">专升本</a>
                </li>
                <li>
                  <a href="">继续教育学院</a>
                </li>
                <li>
                  <a href="">国际教育学院</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.rim {
  box-sizing: border-box;
  width: 1336px;
  height: 731px;
  background-image: url("../assets/images/02.jpg");
  
    animation: banner 10s linear infinite;
}

@keyframes banner {
  0% {
    background-image: url(../assets/images/02.jpg);
  }
  25% {
    background-image: url(../assets/images/03.jpg);
  }
  50% {
    background-image: url(../assets/images/04.png);
  }
  //  60% {
  //     background-image: url(../assets/images/05.png);
  // }
  75% {
    background-image: url(../assets/images/06.png);
  }
  100% {
    background-image: url(../assets/images/07.png);
  }
}

.content {
     box-sizing: border-box;
     padding: 20px;
     width: 100%;
     height: 100%;
  }

.top {
     box-sizing: border-box;
     width: 100%;
     height: 75px;
//   background-color: blue;
}

.logo {
     box-sizing: border-box;
     display: inline;
     height: 75px;
     width: 500px;
     box-sizing: border-box;
}

.logo img {
  height: 75px;
  width: 500px;
}
.title {
     box-sizing: border-box;
  width: 779px;
  height: 75px;
  display: inline-block;
//   background-color: aquamarine;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  font-size: 22px;
  font-weight: 450;
}

.nav > li {
  position: relative;
  float: left;
  width: 115px;
  height: 41px;
  text-align: center;
}

.nav li a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 41px;
  color: rgb(196, 185, 185);
}

.nav > li > a:hover {
  background-color: #eee;
}

.nav ul {
//   display: none;
  box-sizing: border-box;
  position: absolute;
  top: 41px;
  left: 0;
  background-color: cadetblue;
  width: 100%;
  padding-inline-start:0;
  border-left: 1px solid #fecc5b;
  border-right: 1px solid #fecc5b;
}
.m2 li{
    display: none;
    color: black;
}
 .m1:hover .m2 li{
     display: block;
 }

.nav ul li {
  border-bottom: 1px solid #fecc5b;
}

.nav ul li a:hover {
  background-color: #fff5da;
}
</style>