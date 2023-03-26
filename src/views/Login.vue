<template>
  <main>
    <div id="poster">
        <el-form class="login-container" label-position="left"  label-width="0px">
            <h3 class="login_title">
                系统登陆
            </h3>
            <el-form-item label="">
                <el-input  type="text" v-model="loginForm.username" autocomplete="off" placeholder="账号" class="my-input"></el-input>
            </el-form-item>
                       <el-form-item label="">
                <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码" class="my-input"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;background:#505458;border:none" v-on:click="Login()">登陆</el-button>
                <el-link :underline="false" @click="toRegister" type="warning">没账号？点我注册</el-link>
            </el-form-item>
        </el-form>
    </div>
  </main>
</template>

<script>
import request from "../utils/request";
import {accountStore} from "../stores/account";
const account=accountStore();
export default {
  name: 'Login',
  data() {


      return {
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      Login() {
        console.log('submit!',this.loginForm);
        request.post('/account/login',this.loginForm).then((resp)=>{
          let data = resp.data;
          console.log(resp);
          console.log(data);
          if(resp.code !== "404")
          {
            this.loginForm= {};

            account.$patch({
              username: data.username,
              password: data.password,
              email: data.email,
              firstName:data.firstName,
              lastName:data.lastName,
              status:data.status,
              address1:data.address1,
              address2:data.address2,
              city:data.city,
              state:data.state,
              zip:data.zip,
              country:data.country,
              phone:data.phone,
              favouriteCategoryId:data.favouriteCategoryId,
              languagePreference:data.languagePreference,
              listOption:data.listOption,
              bannerOption:data.bannerOption,
              bannerName:data.bannerName,
            })
            this.$message({
              message: '登陆成功!!!',
              type: 'success'
            });
            this.$router.push({path:'/info'})
          }
          else
            {
              this.$message(
                  {
                    type:"error",
                    message:resp.msg
                  }
              )
            }
        })


      },
      toRegister(){
        this.$router.push({path:'/Register'})
      }
    }

}
</script>

<style>
    #poster{
        background-position:center;
        height:75vh;
        width:100%;
        background-size:cover;
    }
    body{
        margin:0px;
        padding:0px;
    }
    .login-container{
        border-radius:15px;
        background-clip:padding-box;
        margin:90px auto;
        width:350px;
        padding: 35px 35px 15px 35px;
        background:#fff;
        border:1px solid #eaeaea;
        box-shadow:0 0 25px #cac6c6;
    }
    .login_title{
        margin : 0px auto 40px auto;
        text-align:center;
        color:#505458;
    }

    .my-input{
      border: 2px solid #ffd04b;
      border-radius: 6px;
    }
</style>