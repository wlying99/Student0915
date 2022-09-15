<template>
  <div class="login-container">
    <div class="a">
      <div class="b"></div>
      <div class="c">
        <div class="d">
          <h1>Login</h1>

          <el-form
            class="inputDeep"
            ref="loginFormRef"
            :rules="loginFormRules"
            :model="loginForm"
          >
            <!-- 用户名 -->
            <el-form-item prop="username">
              <el-input
                type="text"
                class="e"
                required="required"
                placeholder="USER NAME"
                v-model="loginForm.username"
              ></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
              <el-input
                type="password"
                class="e"
                placeholder="PASSWORD"
                required="required"
                v-model="loginForm.password"
              ></el-input>
            </el-form-item>

            <!-- 登录 -->

            <a class="f" @click="registerDialogVisible = true">Register</a>

            <el-button class="g" @click="login">Login</el-button>
          </el-form>
        </div>
      </div>
    </div>
    
    <!-- 注册用户对话框 -->
    <el-dialog
      title="注册用户"
      width="50%"
      :visible.sync="registerDialogVisible"
      :before-close="handleClose"
    >
      <!-- 对话框主体区域 -->
      <el-form ref="addFormRef" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="password"></el-input>
        </el-form-item>
      </el-form>
      <!-- 对话框底部区域 -->
      <span slot="footer">
        <button @click="registerDialogVisible=false" class="btn1">取 消</button>
        <button type="primary" @click="addUser" class="btn2">确 定</button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
      },
      username:'',
      password:'',

      registerDialogVisible: false,
      //这是表单验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    login() {
      // this.$router.push("/home");
      if (this.loginForm.username == "" || this.loginForm.password == "") {
        this.$message.error("请输入用户名或密码");
        return;
      }

      let params = { un: this.loginForm.username, p: this.loginForm.password };
      this.ajax
        .get(this.$store.state.api + "login", params)
        .then((res) => {
          // console.log(res.data);
          if (res.data[0].length > 0) {
            this.$cookies.set("login", "1", -1);
            this.$cookies.set("userInfo", res.data[0][0], -1);
            this.$store.commit("update", ["userInfo", res.data[0][0]]);
            this.$store.commit("update", ["userInfo", true]);
            this.$message.success("登录成功");
            this.$router.push("/home");
            // console.log(res.data);
          } else {
            this.$message.error("账号不存在或密码错误");
          }
        })
        .catch((err) => {
          this.$message.error("账号不存在或密码错误");
          console.error(err);
        });
    },
    
    init(){
      this.username="",
      this.password=""
    },

    handleClose(done) {
      this.init();
      done();
    },
    addUser(){
      if(
        this.username==""||this.password==""
      ){
        this.$message.error("请填写完整信息");
        return;
      }
       let params = [
         {username:this.username,password:this.password},
       ];
       this.ajax.post(this.$store.state.api + "adduser",params).then((res)=>{
         this.init();
         this.registerDialogVisible=false;
         this.$message.success("注册成功");
       })
       .catch((err)=>{
         this.$message.error("注册失败");
         console.error(err);
       })
      
    }
  },
};
</script>

<style scoped>
.login-container {
  /* 设置背景渐变 */
  /* background-image: linear-gradient(to left,
    #9c88ff,#3cadeb); */
  background-image: url("../assets/images/001.jpg");
  height: 100%;
  display: flex;
  justify-content: center;
}

.a {
  position: relative;
  /* top: 100px; */
  width: 1000px;
  height: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.b {
  width: 650px;
  height: 500px;
  background-image: url("../assets/images/006.jpg");
  /* 让图片适应大小 */
  background-size: cover;
}

.c {
  width: 350px;
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.d {
  width: 250px;
  height: 500px;
}

.d h1 {
  font: 900 40px "";
  text-align: center;
  height: 80px;
  line-height: 80px;
}

.e {
  width: 210px;
  margin: 15px 0;
  outline: none;
  border: 0;
  padding: 0 20px 10px;
  border-bottom: 3px solid rgb(80, 80, 170);
  font: 600 16px "";
}

.f {
  float: right;
  margin: 10px 0;
  text-decoration: none;
}

.g {
  position: absolute;
  margin: 20px;
  bottom: 40px;
  display: block;
  width: 200px;
  height: 60px;
  font: 900 30px "";
  text-decoration: none;
  line-height: 50px;
  border-radius: 30px;
  background-image: linear-gradient(to left, #9c88ff, #3cadeb);
  text-align: center;
}
a {
  text-decoration: none;
}
.inputDeep >>> .el-input__inner {
  border: 0;
}
.el-button {
  padding: 0;
}
.btn1{
  width: 70px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  font-size: 14px;
  color: #606266;
  border-radius: 5px;
}
.btn2{
  margin-left: 10px;
  width: 70px;
  height: 40px;
  background-color: #409eff;
  border: 1px solid #dcdfe6;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
}
</style>