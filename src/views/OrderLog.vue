<template>
  <div class="info-container">
  <h3 class="register_title">
    订单日志
  </h3>
  <el-table
      :data="tableData"
      border
      height=65vh
      >
    <el-table-column
        prop="orderId"
        label="订单编号">
    </el-table-column>
    <el-table-column
        prop="orderData"
        label="日期"
        width="180">
    </el-table-column>
    <el-table-column
        prop="totalPrice"
        label="价格">
    </el-table-column>

  </el-table>
  </div>
</template>

<script>
import request from "../utils/request";
import {accountStore} from "../stores/account";
import {storeToRefs} from "pinia";
const account=accountStore();
let {username} = storeToRefs(account);
export default {
  data() {
    return {
      ruleForm: {
        username,
        password: '',
        email: '',
        firstName:'',
        lastName:'',
        status:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        country:'',
        phone:'',
        favouriteCategoryId:'',
        languagePreference:'',
        listOption:false,
        bannerOption:false,
        bannerName:'',
        checkPass: ''
      },

      tableData: []
    }
  },
  created() {
    this.load();
    console.log(this.ruleForm.username);
  },

  methods:{
    load()
    {
      request.post('/cart/orderList',this.ruleForm).then((resp)=>{

        console.log(resp);
        console.log(resp.data);
        this.tableData=resp.data;
        console.log(this.tableData);
      })
    }

  }
}
</script>
<style>
.register_title {
  margin: 0px auto 0px auto;
  text-align: left;
  color: white;
  background-color: #14616B;
}

.info-container{
  border-radius:15px;
  background-clip:padding-box;
  margin:3% auto;
  width:70%;
  height: 70vh;
  padding: 35px 35px 15px 35px;
  background:#fff;
  border:1px solid #eaeaea;
  box-shadow:0 0 25px #cac6c6;
}


</style>