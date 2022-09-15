<template>
  <div class="rim">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新生报到</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input 
          placeholder="请输入要查询的学号" 
          v-model="number" 
          clearable    
          @clear="getData">
            <!-- <el-button icon="el-icon-search" @click="getData"></el-button> -->
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getData"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="addD">添加学生 </el-button>
        </el-col>
      </el-row>

      <!-- 用户列表(表格)区域 -->
      <el-table border stripe :data="tableData">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="学号" prop="number"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="电话" prop="phone"></el-table-column>
        <el-table-column label="专业" prop="major"></el-table-column>
        <el-table-column label="班级" prop="class"></el-table-column>
        <el-table-column label="学院" prop="college"></el-table-column>
        <el-table-column label="籍贯" prop="place"></el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <el-button @click="update(scope.row)" type="primary" size="small"
              >修改</el-button
            >
            <el-button
              @click="handleDelete(scope.row.id)"
              type="primary"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 添加用户对话框 -->
    <el-dialog
      title="编辑"
      :visible.sync="addDialogVisible"
      width="500px"
      :before-close="handleClose"
    >
      <!-- 对话框主体区域 -->
      <el-form label-width="70px">
        <el-form-item label="学号" prop="StudentNumber">
          <el-input v-model="StudentNumber"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="username">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="mobile"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input v-model="major"></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="class">
          <el-input v-model="classA"></el-input>
        </el-form-item>
         <el-form-item label="学院" prop="college">
          <el-input v-model="college"></el-input>
        </el-form-item>
        <el-form-item label="籍贯" prop="place">
          <el-input v-model="place"></el-input>
        </el-form-item>
      </el-form>
      <!-- 对话框底部区域 -->
      <span slot="footer" class="dialog-footer" >
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addData" v-if="id == ''"
          >确 定</el-button
        >
        <el-button type="primary" @click="updateData" v-else>修 改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addDialogVisible: false,
      id:"",
      StudentNumber: "",
      username: "",
      mobile: "",
      major: "",
      classA: "",
      college:"",
      place: "",
      tableData: [],
      number: "",
      // isloading: false,
    };
  },
  methods: {
    //获取学生信息数据
    getData() {
      // this.isloading = true;
      let params = { n: this.number };
      this.ajax
        .get(this.$store.state.api + "getStudent",params)
        .then((res) => {
          console.log(res.data);
          // this.isloading = false;
          if (res.data[0].length > 0) {
            this.tableData = res.data[0];
          }
        })
        .catch((err) => {
          // this.isloading = false;
          console.error(err);
        });
    },
    init() {
      this.StudentNumber = "";
      this.username = "";
      this.mobile = "";
      this.major = "";
      this.classA = "";
      this.college ="";
      this.place = "";
      this.id = "";
    },
    handleClose(done) {
      this.init();
      done();
    },
    addD() {
      this.init();
      this.addDialogVisible = true;
    },
    addData() {
      if (
        this.StudentNumber == "" ||
        this.username == "" ||
        this.mobile == "" ||
        this.major == "" ||
        this.classA == "" ||
        this.college == ""||
        this.place == ""
      ) {
        this.$message.error("请填写完整信息");
        return;
      }
      let params = [
        {
          num: this.StudentNumber,
          n: this.username,
          p: this.mobile,
          m: this.major,
          c: this.classA,
          col:this.college,
          pla: this.place,
        },
      ];
      this.ajax
        .post(this.$store.state.api + "addstudent", params)
        .then((res) => {
          this.init();
          this.addDialogVisible = false;
          this.$message.success("添加成功");
          this.getData();
        })
        .catch((err) => {
          this.$message.success("添加失败");
          console.error(err);
        });
    },

    
    update(res) {
      this.id = res.id;
      this.StudentNumber = res.number;
      this.username = res.name;
      this.mobile = res.phone;
      this.major = res.major;
      this.classA = res.class;
      this.college=res.college;
      this.place = res.place;
      this.addDialogVisible = true;
    },

    //修改学生信息
    updateData() {
      if (
        this.StudentNumber == "" ||
        this.username == "" ||
        this.mobile == "" ||
        this.major == "" ||
        this.classA == "" ||
        this.college == "" ||
        this.place == ""
      ) {
        this.$message.error("请填写完整信息");
        return;
      }
      let params = [
        {
          id: this.id,
          num: this.StudentNumber,
          n: this.username,
          p: this.mobile,
          m: this.major,
          c: this.classA,
          col:this.college,
          pla: this.place,
        },
      ];
      this.ajax
        .post(this.$store.state.api + "updateStudent", params)
        .then((res) => {
          this.init();
          this.addDialogVisible = false;
          this.$message.success("修改成功");
          this.getData();
        })
        .catch((err) => {
          this.$message.success("修改失败");
          console.error(err);
        });
    },
    //删除学生
    handleDelete(id) {
      let params = [
        {
          id: id,
        },
      ];
      this.$confirm("确定删除此学生吗?", "提示", {
        confirmButtonText: "确定删除",
        cancelButtonText: "取消删除",
        type: "warning",
      })
        .then(() => {
          this.ajax
            .post(this.$store.state.api + "deleteStudent", params)
            .then((res) => {
              this.$message.success("删除成功");
              this.getData();
            })
            .catch((err) => {
              console.error(err);
              // console.log(err);
            });
        })
        .catch(() => {});
    },
  },
  created() {
    this.getData();
  },

};
</script>

<style lang="less" scoped>
 .rim{
   padding: 20px;
 }
</style>