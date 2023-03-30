<template>
  <div class="info-container" >
    <el-descriptions title="支付明细" direction="vertical" :column="4" border style="margin-bottom: 30px">
      <el-descriptions-item label="支付卡类型" :span="4">{{username}}</el-descriptions-item>
      <el-descriptions-item label="卡号" :span="4">{{email}}</el-descriptions-item>
      <el-descriptions-item label="送达日期" :span="4">{{phone}}</el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="账单地址" direction="vertical" :column="4" border style="margin-bottom: 30px">
      <el-descriptions-item label="名" width="25%">{{firstName}}</el-descriptions-item>
      <el-descriptions-item label="姓" width="25%">{{lastName}}</el-descriptions-item>
      <el-descriptions-item label="地址1" width="25%">{{address1}}</el-descriptions-item>
      <el-descriptions-item label="地址2" width="25%">{{address2}}</el-descriptions-item>
      <el-descriptions-item label="城市" :span="2">{{city}}</el-descriptions-item>
      <el-descriptions-item label="省份">{{state}}</el-descriptions-item>
      <el-descriptions-item label="邮编">{{zip}}</el-descriptions-item>
      <el-descriptions-item label="国家" :span="2">{{country}}</el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="收货地址" direction="vertical" :column="4" border style="margin-bottom: 30px">
      <el-descriptions-item label="名" width="25%">{{firstName}}</el-descriptions-item>
      <el-descriptions-item label="姓" width="25%">{{lastName}}</el-descriptions-item>
      <el-descriptions-item label="地址1" width="25%">{{address1}}</el-descriptions-item>
      <el-descriptions-item label="地址2" width="25%">{{address2}}</el-descriptions-item>
      <el-descriptions-item label="城市" :span="2">{{city}}</el-descriptions-item>
      <el-descriptions-item label="省份">{{state}}</el-descriptions-item>
      <el-descriptions-item label="邮编">{{zip}}</el-descriptions-item>
      <el-descriptions-item label="国家" :span="2">{{country}}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {accountStore} from "../stores/account";
import { useRoute, useRouter } from 'vue-router'
import {storeToRefs} from "pinia";
const router = useRouter()
const route = useRoute()
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


<style scoped>

.info-container{
  border-radius:15px;
  background-clip:padding-box;
  margin:1% auto;
  height: 80vh;
  width:60%;
  padding: 35px 35px 15px 35px;
  background:#fff;
  border:1px solid #eaeaea;
  box-shadow:0 0 25px #cac6c6;
}
</style>