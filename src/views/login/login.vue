<template>
  <div class='login-page'>
    <div class="loginbox" :class="[count===0? 'init' : 'showLogin']">
        <p class='init-text' @click='showLogin'>登录</p>
        <h3>登录</h3>
        <el-form :model="form" :rules="rules" ref='userForm'>
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码"  prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
        <div class='operation-group'>
          <el-button type="primary" @click="checkForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </div>
      </div>
  </div>
</template>
<style lang="less" src="./login.less"></style>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import {Form as ElForm} from 'element-ui'


@Component
export default class Login extends Vue {
  $refs!: {
    userForm: ElForm,
  }
  count = 0
  form = {
    username: '',
    password: '',
  }
  rules = {
    username: [
      { required: true, message: '请输入用户名称', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
  }
  resetForm() {
    const ref: ElForm = this.$refs.userForm;
    ref.resetFields();
  }
  checkForm() {
    const ref: ElForm = this.$refs.userForm;
    ref.validate((valid: boolean) => {});
      // ajax 是否登录成功
  }
  showLogin() {
    !this.count && this.count++
  }
}
</script>