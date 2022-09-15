<template>
  <el-container class="home_container">
    <!-- 侧边栏区域 -->
    <el-aside width="200px">
      <div>
        <img src="../assets/images/logo1.png" width="50px" height="50px" />
      </div>
      <div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="2" @click="Intro">
            <i class="el-icon-menu"></i>
            <span slot="title">学校简介</span>
          </el-menu-item>
          <el-menu-item index="3" @click="Add">
            <i class="el-icon-document"></i>
            <span slot="title">新生报到</span>
          </el-menu-item>
          <el-menu-item index="4" @click="Visual">
            <i class="el-icon-setting"></i>
            <span slot="title">新生统计</span>
          </el-menu-item>
           <el-menu-item index="5" @click="Source">
            <i class="el-icon-location"></i>
            <span slot="title">来源展示</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div>
          <span>新生报到统计系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <!-- 主体内容区 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      //   this.$router.push("/login");
      this.$cookies.remove("login");
      this.$cookies.remove("userInfo");
      // $store.commit 提交
      this.$store.commit("update", ["isLogin", false]);
      this.$store.commit("update", ["userInfo", {}]);
      this.$message({
        message: "退出成功",
        type: "success",
      });
      this.$router.push("/login");
    },
    Intro(){
      this.$router.push("/intro")
    },
    Add() {
      this.$router.push("/add");
    },
    Visual() {
      this.$router.push("/visual");
    },
    Source(){
      this.$router.push("/source")
    },

    isLogin() {
      var _isLogin = this.$cookies.get("login");
      var userInfo = this.$cookies.get("userInfo");
      if (_isLogin == "1" && userInfo) {
        this.$store.commit("update", ["isLogin", true]);
        // var info = JSON.parse(window.sessionStorage.getItem("userInfo"));
        this.$store.commit("update", ["userInfo", userInfo]);
      } else {
        this.$store.commit("update", ["isLogin", false]);
        this.$message({
          message: "未登录，请登录",
          type: "warning",
        });
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      }
    },
  },
  created() {
      this.isLogin();
  },
};
</script>

<style lang='less' scoped>
.home_container {
  height: 100%;
}

.el-aside {
  background-color:  #B1B1AF;

  img {
    padding-left: 40px;
    padding-top: 5px;
  }
  .el-menu {
    border-right: none;
    background-color: rgb(73, 66, 104);
  }
}
.el-header {
  background-color:#9496A5;
  height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 35px;
  color: #fff;
  line-height: 60px;
}
.el-main {
  background-color: #fff;
  padding: 0;
}
.el-menu-item{
  background-color: #9496A5;
}
</style>