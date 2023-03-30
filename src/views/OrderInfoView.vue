<template>
  <main>
  <div class="info-container" >
    <el-descriptions title="支付明细" direction="vertical" :column="4" border style="margin-bottom: 30px">
      <el-descriptions-item label="订单信息" :span="4">订单 &nbsp;#{{orderId}} &nbsp; {{ orderDate }}</el-descriptions-item>
      
      <el-descriptions-item label="支付卡类型" :span="4">{{cardType}}</el-descriptions-item>
      <el-descriptions-item label="卡号" :span="4">{{creditCard}}</el-descriptions-item>
      <el-descriptions-item label="送达日期" :span="4">{{expiryDate}}</el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="账单地址" direction="vertical" :column="4" border style="margin-bottom: 30px">
      <el-descriptions-item label="名" width="25%">{{billToFirstName}}</el-descriptions-item>
      <el-descriptions-item label="姓" width="25%">{{billToLastName}}</el-descriptions-item>
      <el-descriptions-item label="地址1" width="25%">{{billAddress1}}</el-descriptions-item>
      <el-descriptions-item label="地址2" width="25%">{{billAddress2}}</el-descriptions-item>
      <el-descriptions-item label="城市" :span="2">{{billCity}}</el-descriptions-item>
      <el-descriptions-item label="省份">{{billState}}</el-descriptions-item>
      <el-descriptions-item label="邮编">{{billZip}}</el-descriptions-item>
      <el-descriptions-item label="国家" :span="2">{{billCountry}}</el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="收货地址" direction="vertical" :column="4" border style="margin-bottom: 30px">
      <el-descriptions-item label="名" width="25%">{{shipToFirstName}}</el-descriptions-item>
      <el-descriptions-item label="姓" width="25%">{{shipToLastName}}</el-descriptions-item>
      <el-descriptions-item label="地址1" width="25%">{{shipAddress1}}</el-descriptions-item>
      <el-descriptions-item label="地址2" width="25%">{{shipAddress2}}</el-descriptions-item>
      <el-descriptions-item label="城市" :span="2">{{shipCity}}</el-descriptions-item>
      <el-descriptions-item label="省份">{{shipState}}</el-descriptions-item>
      <el-descriptions-item label="邮编">{{shipZip}}</el-descriptions-item>
      <el-descriptions-item label="国家" :span="2">{{shipCountry}}</el-descriptions-item>
      <el-descriptions-item label="快递公司" :span="2">{{courier}}</el-descriptions-item>
      <el-descriptions-item label="进度" :span="2">{{status}}</el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="购买商品" direction="vertical" :column="4" border style="margin-bottom: 30px">
      <el-descriptions-item label="总价" :span="2">{{totalPrice}}</el-descriptions-item>
    </el-descriptions>
    <div class="table" style="text-align: center;">
                <el-table :data="tableData"  border stripe style="width: 100%">
                    <el-table-column prop="item.itemId" label="商品ID" width="100" />
                    <el-table-column prop="item.product.productId" label="产品ID" width="120" />
                    <el-table-column prop="item.attribute1" label="描述" width="250" />
                    <el-table-column prop="quantity" label="数量" width="100" />
                    <el-table-column prop="item.listPrice" label="标价" width="103" />
                    <el-table-column prop="total" label="总价" width="150" />
                </el-table>
                <el-button type="success" @click="success()">Success</el-button>
      </div>

  </div>
</main>
</template>

<script setup>
import { ref,onMounted,toRaw } from "vue";
import {accountStore} from "../stores/account";
import { useRoute, useRouter } from 'vue-router'
import {storeToRefs} from "pinia";
import {CartStore} from "../stores/cartN";
import request from "../utils/request";
const account = accountStore();
const cartStore = CartStore();
let tableData = ref([])

let username = ref()
let orderId = ref()
let orderDate = ref()
let shipAddress1 = ref()
let shipAddress2 = ref()
let shipCity = ref()
let shipState = ref()
let shipZip = ref()
let shipCountry = ref()
let billAddress1 = ref()
let billAddress2 = ref()
let billCity = ref()
let billState = ref()
let billZip = ref()
let billCountry = ref()
let courier = ref()
let totalPrice = ref()
let billToFirstName = ref()
let billToLastName = ref()
let shipToFirstName = ref()
let shipToLastName = ref()
let creditCard = ref('')
let expiryDate = ref()
let cardType = ref()
let locale = ref()
let status = ref()
let lineItems = ref()
const router = useRouter()
const route = useRoute()
const temId = route.query.orderId
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

onMounted(()=>{
  load()
})

const success = () => {
  cartStore.$reset()
  router.push({
    path: '/home'
  })
}

const load = () => {
  request.get('/cart/getOrder/' + temId ).then(resp => {
    console.log(resp);
        let data = resp.data;
        console.log(data);
        if(resp.code === "0"){
          let orderDatas = resp.data
          
          cartStore.$reset()
          orderDate.value = ref(orderDatas.orderDate).value
          username.value = ref(orderDatas.username).value
          orderId.value = ref(orderDatas.orderId).value
          orderDate.value = ref(orderDatas.orderDate).value
          shipAddress1.value = ref(orderDatas.shipAddress1).value
          shipAddress2.value = ref(orderDatas.shipAddress2).value
          shipCity.value = ref(orderDatas.shipCity).value
          shipState.value = ref(orderDatas.shipState).value
          shipZip.value = ref(orderDatas.shipZip).value
          shipCountry.value = ref(orderDatas.shipCountry).value
          billAddress1.value = ref(orderDatas.billAddress1).value
          billAddress2.value = ref(orderDatas.billAddress2).value
          billCity.value = ref(orderDatas.billCity).value
          billState.value = ref(orderDatas.billState).value
          billZip.value = ref(orderDatas.billZip).value
          billCountry.value = ref(orderDatas.billCountry).value
          courier.value = ref(orderDatas.courier).value
          totalPrice.value = ref(orderDatas.totalPrice).value
          billToFirstName.value = ref(orderDatas.billToFirstName).value
          billToLastName.value = ref(orderDatas.billToLastName).value
          shipToFirstName.value = ref(orderDatas.shipToFirstName).value
          shipToLastName.value = ref(orderDatas.shipToLastName).value
          creditCard.value = ref(orderDatas.creditCard).value
          expiryDate.value = ref(orderDatas.expiryDate).value
          cardType.value = ref(orderDatas.cardType).value
          locale.value = ref(orderDatas.locale).value
          status.value = ref(orderDatas.status).value
          lineItems.value = ref(orderDatas.lineItems).value
          
          tableData.value = orderDatas.lineItems
          console.log(orderDate)

        }
  })

}

</script>


<style scoped>
.info-container{
  border-radius:15px;
  background-clip:padding-box;
  margin:1% auto;
  width:60%;
  padding: 35px 35px 15px 35px;
  background:#fff;
  border:1px solid #eaeaea;
  box-shadow:0 0 25px #cac6c6;
}
</style>