<template>
  <div class="info-container" >
  <el-descriptions title="用户个人信息" direction="vertical" :column="4" border>
    <el-descriptions-item label="用户名" :span="4">{{username}}</el-descriptions-item>
    <el-descriptions-item label="邮箱" :span="4">{{email}}</el-descriptions-item>
    <el-descriptions-item label="电话" :span="4">{{phone}}</el-descriptions-item>
    <el-descriptions-item label="名" width="25%">{{firstName}}</el-descriptions-item>
    <el-descriptions-item label="姓" width="25%">{{lastName}}</el-descriptions-item>
    <el-descriptions-item label="地址1" width="25%">{{address1}}</el-descriptions-item>
    <el-descriptions-item label="地址2" width="25%">{{address2}}</el-descriptions-item>
    <el-descriptions-item label="城市" :span="2">{{city}}</el-descriptions-item>
    <el-descriptions-item label="省份">{{state}}</el-descriptions-item>
    <el-descriptions-item label="邮编">{{zip}}</el-descriptions-item>
    <el-descriptions-item label="国家" :span="2">{{country}}</el-descriptions-item>
    <el-descriptions-item label="语言偏好">{{languagePreference}}</el-descriptions-item>
    <el-descriptions-item label="宠物偏好">{{favouriteCategoryId}}</el-descriptions-item>
    <el-descriptions-item label="启用MyList" :span="2">{{listOption}}</el-descriptions-item>
    <el-descriptions-item label="启用MyBanner" :span="2">{{bannerOption}}</el-descriptions-item>

  </el-descriptions>
    <el-button @click="toEdit">修改个人信息</el-button>
    <el-button @click="toLog">查看订单日志</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {accountStore} from "../stores/account";
import { useRoute, useRouter } from 'vue-router'
import {storeToRefs} from "pinia";
const router = useRouter()
const route = useRoute()
const account = accountStore()
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
const toEdit = () => {
  router.push({
    path:'/edit',
    query: {
      ...route.query
    }
  })
}
const toLog = () => {
  router.push({
    path:'/OrderLog',
    query: {
      ...route.query
    }
  })
}

</script>

<!--<script>-->
<!--import {accountStore} from "../stores/account";-->
<!--const account = accountStore();-->
<!--const {username,-->
<!--  email,-->
<!--  firstName,-->
<!--  lastName,-->
<!--  status,-->
<!--  address1,-->
<!--  address2,-->
<!--  city,-->
<!--  state,-->
<!--  zip,-->
<!--  country,-->
<!--  phone,-->
<!--  favouriteCategoryId,-->
<!--  languagePreference,-->
<!--  listOption,-->
<!--  bannerOption,-->
<!--  bannerName}=accountStore();-->
<!--export default {-->
<!--    name: "AccountInform",-->
<!--    setup()-->
<!--    {-->
<!--      const account = accountStore();-->
<!--      const {username,-->
<!--        email,-->
<!--        firstName,-->
<!--        lastName,-->
<!--        status,-->
<!--        address1,-->
<!--        address2,-->
<!--        city,-->
<!--        state,-->
<!--        zip,-->
<!--        country,-->
<!--        phone,-->
<!--        favouriteCategoryId,-->
<!--        languagePreference,-->
<!--        listOption,-->
<!--        bannerOption,-->
<!--        bannerName}=accountStore();-->
<!--      return {-->
<!--        size: '',-->
<!--        username,-->
<!--        email,-->
<!--        firstName,-->
<!--        lastName,-->
<!--        status,-->
<!--        address1,-->
<!--        address2,-->
<!--        city,-->
<!--        state,-->
<!--        zip,-->
<!--        country,-->
<!--        phone,-->
<!--        favouriteCategoryId,-->
<!--        languagePreference,-->
<!--        listOption,-->
<!--        bannerOption,-->
<!--        bannerName,-->
<!--        account-->
<!--      };-->
<!--    },-->
<!--  data () {-->
<!--    return {-->
<!--        size: '',-->
<!--        username,-->
<!--        email,-->
<!--        firstName,-->
<!--        lastName,-->
<!--        status,-->
<!--        address1,-->
<!--        address2,-->
<!--        city,-->
<!--        state,-->
<!--        zip,-->
<!--        country,-->
<!--        phone,-->
<!--        favouriteCategoryId,-->
<!--        languagePreference,-->
<!--        listOption,-->
<!--        bannerOption,-->
<!--        bannerName-->
<!--      };-->
<!--    },-->

<!--    methods: {-->
<!--      toEdit() {-->
<!--        this.$router.push({path:'/edit'})-->

<!--      }-->
<!--    }-->

<!--};-->

<!--</script>-->

<style scoped>

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