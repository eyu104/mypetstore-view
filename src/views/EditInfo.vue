<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="info-container">
    <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        label-position="left"
        class="register-container">
      <h3 class="register_title">
        信息修改
      </h3>
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item title="基本信息" name="1" >
          <el-form-item label="用户名" label-width="100px" prop="username">
            <el-input
                type="text"
                autocomplete="off"
                v-model="ruleForm.username"
                placeholder="请输入用户名"
                prefix-icon="el-icon-user-solid"
                class="my-input"
            ></el-input>
          </el-form-item>

          <el-form-item label="密码" label-width="100px" prop="password">
            <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                class="my-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" label-width="100px" prop="checkPass">
            <el-input
                type="password"
                v-model="ruleForm.checkPass"
                placeholder="请输入确认密码"
                prefix-icon="el-icon-lock"
                autocomplete="off"
                class="my-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" label-width="100px" prop="email">
            <el-input
                type="text"
                autocomplete="off"
                v-model="ruleForm.email"
                prefix-icon="el-icon-user-solid"
                placeholder="请输入邮箱"
                class="my-input"
            ></el-input>
          </el-form-item>

        </el-collapse-item>


        <el-collapse-item title="详细信息" name="2">
          <el-row :gutter="1">
            <el-form-item label="名" label-width="60px" prop="firstName">

              <el-col :span="25"><div class="grid-content bg-purple">
                <el-input
                    type="text"
                    v-model="ruleForm.firstName"
                    placeholder="请输入你的名字"
                    prefix-icon="el-icon-lock"
                    autocomplete="off"
                    class="my-input"
                ></el-input>
              </div></el-col>
            </el-form-item>
            <el-form-item label="姓" label-width="60px" prop="lastName">
              <el-col :span="25"><div class="grid-content bg-purple">
                <el-input
                    type="text"
                    v-model="ruleForm.lastName"
                    placeholder="请输入你的姓氏"
                    prefix-icon="el-icon-lock"
                    autocomplete="off"
                    class="my-input"
                ></el-input>
              </div></el-col>
            </el-form-item>
          </el-row>

          <el-form-item label="电话" label-width="60px" prop="phone">
            <el-input
                type="text"
                v-model="ruleForm.phone"
                placeholder="请输入你的电话号码"
                prefix-icon="el-icon-lock"
                autocomplete="off"
                class="my-input"
                style="width: 90%"
            ></el-input>
          </el-form-item>

          <el-row :gutter="1">
            <el-form-item label="地址1" label-width="60px" prop="address1">
              <el-col :span="25"><div class="grid-content bg-purple">
                <el-input
                    type="text"
                    v-model="ruleForm.address1"
                    placeholder="请输入一号地址"
                    prefix-icon="el-icon-lock"
                    autocomplete="off"
                    class="my-input"
                ></el-input>
              </div></el-col>
            </el-form-item>
            <el-form-item label="地址2" label-width="60px"  prop="address2">
              <el-col :span="25"><div class="grid-content bg-purple">
                <el-input
                    type="text"
                    v-model="ruleForm.address2"
                    placeholder="请输入二号地址"
                    prefix-icon="el-icon-lock"
                    autocomplete="off"
                    class="my-input"
                ></el-input>
              </div></el-col>
            </el-form-item>
          </el-row>

          <el-row :gutter="1">
            <el-form-item label="城市" label-width="60px"  prop="city">
              <el-col :span="25"><div class="grid-content bg-purple">
                <el-input
                    type="text"
                    v-model="ruleForm.city"
                    placeholder="请输入你居住的城市"
                    prefix-icon="el-icon-lock"
                    autocomplete="off"
                    class="my-input"
                ></el-input>
              </div></el-col>
            </el-form-item>
            <el-form-item label="省份" label-width="60px"  prop="state">
              <el-col :span="25"><div class="grid-content bg-purple">
                <el-input
                    type="text"
                    v-model="ruleForm.state"
                    placeholder="请输入你居住的省份"
                    prefix-icon="el-icon-lock"
                    autocomplete="off"
                    class="my-input"
                ></el-input>
              </div></el-col>
            </el-form-item>
          </el-row>

          <el-row :gutter="1">
            <el-form-item label="邮政编码" label-width="80px"  prop="zip">
              <el-col :span="25"><div class="grid-content bg-purple">
                <el-input
                    type="text"
                    v-model="ruleForm.zip"
                    placeholder="请输入邮政编码"
                    prefix-icon="el-icon-lock"
                    autocomplete="off"
                    class="my-input"
                ></el-input>
              </div></el-col>
            </el-form-item>
            <el-form-item label="国家" label-width="60px"  prop="country">
              <el-col :span="25"><div class="grid-content bg-purple">
                <el-input
                    type="text"
                    v-model="ruleForm.country"
                    placeholder="请输入你的国家"
                    prefix-icon="el-icon-lock"
                    autocomplete="off"
                    class="my-input"
                ></el-input>
              </div></el-col>
            </el-form-item>
          </el-row>

        </el-collapse-item>

        <el-collapse-item title="主页信息" name="3">

          <el-form-item label="语言偏好" label-width="80px" prop="languagePreference">
            <el-select v-model="ruleForm.languagePreference" placeholder="请选择">
              <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="宠物偏好" label-width="80px" prop="favouriteCategoryId">
            <el-select v-model="ruleForm.favouriteCategoryId" placeholder="请选择">
              <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>


          <el-form-item label="启用MyList" label-width="120px" prop="favouriteCategoryId">
            <el-switch
                v-model="ruleForm.listOption"
                active-color="#ffd04b"
                inactive-color="#505458">
            </el-switch>
          </el-form-item>

          <el-form-item label="启用MyBanner" label-width="120px" prop="favouriteCategoryId">
            <el-switch
                v-model="ruleForm.bannerOption"
                active-color="#ffd04b"
                inactive-color="#505458">
            </el-switch>
          </el-form-item>

        </el-collapse-item>
      </el-collapse>

      <el-form-item>
        <el-button type="primary" color="#505458" @click="submitForm(ruleForm)">修改完成</el-button>
        <el-button type="primary" color="#505458" @click="toInfo">取消修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from "../utils/request";
import {accountStore} from "../stores/account";
import { storeToRefs } from 'pinia'
const account = accountStore();
let {username,
  password,
  email,
  firstName,
  lastName,
  status,
  address1,
  address2,
  city,
  state,
  zip,
  country,
  phone,
  favouriteCategoryId,
  languagePreference,
  listOption,
  bannerOption,
  bannerName} = storeToRefs(account)
export default {
  name: 'edit',
  data() {

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    var validatePass3 = (rule, value, callback) => {
      request.post('/account/isExist',this.ruleForm).then((resp)=>{
        let data = resp.data;
        if(resp.code=='1'){
          callback(new Error('该账号已存在'));
        }
      })
    };

    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (value==='') {
        return callback(new Error("邮箱不能为空"));
      }
      if (mailReg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的邮箱格式"));
      }
    };


    return {

      options1: [{
        value: '中文',
        label: '中文'
      }, {
        value: 'English',
        label: 'English'
      },{
        value: 'Japanese',
        label: 'Japanese'
      }
      ],

      options2: [{
        value: 'FISH',
        label: 'FISH'
      }, {
        value: 'DOGS',
        label: 'DOGS'
      }, {
        value: 'REPTILES',
        label: 'REPTILES'
      }, {
        value: 'CATS',
        label: 'CATS'
      }, {
        value: 'BIRDS',
        label: 'BIRDS'
      }],


      ruleForm: {
        username: username,
        password:'',
        email: email,
        firstName:firstName,
        lastName:lastName,
        status:status,
        address1:address1,
        address2:address2,
        city:city,
        state:state,
        zip:zip,
        country:country,
        phone:phone,
        favouriteCategoryId:favouriteCategoryId,
        languagePreference:languagePreference,
        listOption:listOption,
        bannerOption:bannerOption,
        bannerName:bannerName,
        checkPass: '',
      },


      rules: {
        username: [
          { required: true,message:"请输入你的名称", trigger: 'blur' },
          { min: 2,max:9,message:"长度2到9个字符", trigger: 'blur' },
          {validator:validatePass3,trigger: 'blur'}
        ],
        email: [
          { validator:checkEmail,trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },

  methods: {

    submitForm() {
      request.post('/account/edit',this.ruleForm).then((resp)=>{
        console.log(resp);
        let data = resp.data;
        console.log(data);
        if(resp.code === "0"){
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
            message: '修改成功',
            type: 'success'
          });
          this.$router.push('/info')
        }
      })


    },



    toInfo() {
      this.$router.push({path:'/info'})
    },

  }

}
</script>


<style>


.register_title{
  margin : 0px auto 40px auto;
  text-align:left;
  color:#505458;
}

.my-input{
  border: 2px solid #ffd04b;
  border-radius:6px;
}
.info-container{
  border-radius:15px;
  background-clip:padding-box;
  margin:5% auto;
  width:60%;
  padding: 35px 35px 15px 35px;
  background:#fff;
  border:1px solid #eaeaea;
  box-shadow:0 0 25px #cac6c6;
}

</style>