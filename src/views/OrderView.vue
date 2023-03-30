<script>
import { ref } from 'vue'
import request from "../utils/request";
import {accountStore} from "../stores/account";
import {CartStore} from "../stores/cartN";
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';

const account = accountStore();

const cartStore = CartStore();

let {
    username,
    orderId,
    orderDate,
    shipAddress1,
    shipAddress2,
    shipCity,
    shipState,
    shipZip,
    shipCountry,
    billAddress1,
    billAddress2,
    billCity,
    billState,
    billZip,
    billCountry,
    courier,
    totalPrice,
    billToFirstName,
    billToLastName,
    shipToFirstName,
    shipToLastName,
    creditCard,
    expiryDate,
    cardType,
    locale,
    status,
    lineItems
  } = storeToRefs(cartStore)
export default {
  onMounted(){
    console.log('hahah')
  },
  
  name: 'edit',
  
  data() {
    return {


      options1: [{
        value: 'Visa',
        label: 'Visa'
      }, {
        value: 'MasterCard',
        label: 'MasterCard'
      },{
        value: 'American Express',
        label: 'American Express'
      }
      ],
      ruleForm: {
        username: username,
        orderId: orderId,
        orderDate: orderDate,
        shipAddress1: shipAddress1,
        shipAddress2: shipAddress2,
        shipCity: shipCity,
        shipState: shipState,
        shipZip: shipZip,
        shipCountry: shipCountry,
        billAddress1: billAddress1,
        billAddress2: billAddress2,
        billCity: billCity,
        billState: billState,
        billZip: billZip,
        billCountry: billCountry,
        courier: courier,
        totalPrice: totalPrice,
        billToFirstName: billToFirstName,
        billToLastName: billToLastName,
        shipToFirstName: shipToFirstName,
        shipToLastName: shipToLastName,
        creditCard: creditCard,
        expiryDate: expiryDate,
        cardType: cardType,
        locale: locale,
        status: status,
        lineItems: lineItems

      },


      rules: {
       
      }
    };
  },

  methods: {



    submitForm() {
      request.post('/cart/confirmOrder',this.ruleForm).then((resp)=>{
        console.log(resp);
        let data = resp.data;
        console.log(data);
        if(resp.code === "0"){
          let orderDatas = resp.data
          cartStore.orderDate = ref(orderDatas.orderDate)
          cartStore.username = ref(orderDatas.username)
          cartStore.orderId = ref(orderDatas.orderId)
          cartStore.orderDate = ref(orderDatas.orderDat)
          cartStore.shipAddress1 = ref(orderDatas.shipAddress1)
          cartStore.shipAddress2 = ref(orderDatas.shipAddress2)
          cartStore.shipCity = ref(orderDatas.shipCity)
          cartStore.shipState = ref(orderDatas.shipState)
          cartStore.shipZip = ref(orderDatas.shipZip)
          cartStore.shipCountry = ref(orderDatas.shipCountry)
          cartStore.billAddress1 = ref(orderDatas.billAddress1)
          cartStore.billAddress2 = ref(orderDatas.billAddress2)
          cartStore.billCity = ref(orderDatas.billCity)
          cartStore.billState = ref(orderDatas.billState)
          cartStore.billZip = ref(orderDatas.billZip)
          cartStore.billCountry = ref(orderDatas.billCountry)
          cartStore.courier = ref(orderDatas.courier)
          cartStore.totalPrice = ref(orderDatas.totalPrice)
          cartStore.billToFirstName = ref(orderDatas.billToFirstName)
          cartStore.billToLastName = ref(orderDatas.billToLastName)
          cartStore.shipToFirstName = ref(orderDatas.shipToFirstName)
          cartStore.shipToLastName = ref(orderDatas.shipToLastName)
          cartStore.creditCard = ref(orderDatas.creditCard)
          cartStore.expiryDate = ref(orderDatas.expiryDate)
          cartStore.cardType = ref(orderDatas.cardType)
          cartStore.locale = ref(orderDatas.locale)
          cartStore.status = ref(orderDatas.status)
          cartStore.lineItems = ref(orderDatas.lineItems)
          
          this.$router.push({
            path:'/orderInfo',
            query:{
              orderId: orderDatas.orderId
            }
          })
        }
      })


    },



    toInfo() {
      // this.$router.push({path:'/info'})
      console.log(cartStore.expiryDate)
    },

  }

}


</script>

<template>
    <main>
        <div class="info-container">
            <el-form
                :model="ruleForm"
                ref="ruleForm"
                label-position="right"
            >
            <h3 class="register_title">
                确认订单
            </h3>
            <el-collapse accordion>
                <el-collapse-item title="支付明细" name="1" >
                
                <el-form-item label="支付类型" label-width="80px" prop="cardType">
                    <el-select v-model="ruleForm.cardType" placeholder="请选择">
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="卡号" label-width="100px" prop="creditCard">
                    <el-input
                        type="creditCard"
                        v-model="ruleForm.creditCard"
                        placeholder="请输入"
                        prefix-icon="el-icon-lock"
                        class="my-input"
                    ></el-input>
                </el-form-item>
                
                <el-form-item label="送达时间" label-width="100px" prop="expiryDate">
                    <el-input
                        type="text"
                        autocomplete="off"
                        v-model="ruleForm.expiryDate"
                        prefix-icon="el-icon-user-solid"
                        placeholder="请输入"
                        class="my-input"
                    ></el-input>
                </el-form-item>

                </el-collapse-item>


                <el-collapse-item title="账单地址" name="2">
                <el-row :gutter="1">
                    <el-form-item label="名" label-width="100px" prop="billToFirstName">

                    <el-col :span="25"><div class="grid-content bg-purple">
                        <el-input
                            type="text"
                            v-model="ruleForm.billToFirstName"
                            placeholder="请输入你的名字"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            class="my-input"
                        ></el-input>
                    </div></el-col>
                    </el-form-item>
                    <el-form-item label="姓" label-width="100px" prop="billToLastName">
                    <el-col :span="25"><div class="grid-content bg-purple">
                        <el-input
                            type="text"
                            v-model="ruleForm.billToLastName"
                            placeholder="请输入你的姓氏"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            class="my-input"
                        ></el-input>
                    </div></el-col>
                    </el-form-item>
                </el-row>

                

                <el-row :gutter="1">
                    <el-form-item label="地址1" label-width="100px" prop="billAddress1">
                    <el-col :span="25"><div class="grid-content bg-purple">
                        <el-input
                            type="text"
                            v-model="ruleForm.billAddress1"
                            placeholder="请输入一号地址"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            class="my-input"
                        ></el-input>
                    </div></el-col>
                    </el-form-item>
                    <el-form-item label="地址2" label-width="100px"  prop="billAddress2">
                    <el-col :span="25"><div class="grid-content bg-purple">
                        <el-input
                            type="text"
                            v-model="ruleForm.billAddress2"
                            placeholder="请输入二号地址"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            class="my-input"
                        ></el-input>
                    </div></el-col>
                    </el-form-item>
                </el-row>

                <el-row :gutter="1">
                    <el-form-item label="城市" label-width="100px"  prop="billCity">
                    <el-col :span="25"><div class="grid-content bg-purple">
                        <el-input
                            type="text"
                            v-model="ruleForm.billCity"
                            placeholder="请输入你居住的城市"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            class="my-input"
                        ></el-input>
                    </div></el-col>
                    </el-form-item>
                    <el-form-item label="省份" label-width="100px"  prop="billState">
                    <el-col :span="25"><div class="grid-content bg-purple">
                        <el-input
                            type="text"
                            v-model="ruleForm.billState"
                            placeholder="请输入你居住的省份"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            class="my-input"
                        ></el-input>
                    </div></el-col>
                    </el-form-item>
                </el-row>

                <el-row :gutter="1">
                    <el-form-item label="邮政编码" label-width="100px"  prop="billZip">
                    <el-col :span="25"><div class="grid-content bg-purple">
                        <el-input
                            type="text"
                            v-model="ruleForm.billZip"
                            placeholder="请输入邮政编码"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            class="my-input"
                        ></el-input>
                    </div></el-col>
                    </el-form-item>
                    <el-form-item label="国家" label-width="100px"  prop="billCountry">
                    <el-col :span="25"><div class="grid-content bg-purple">
                        <el-input
                            type="text"
                            v-model="ruleForm.billCountry"
                            placeholder="请输入你的国家"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            class="my-input"
                        ></el-input>
                    </div></el-col>
                    </el-form-item>
                </el-row>

                </el-collapse-item>

                <el-collapse-item title="收货地址" name="3">
                  <el-row :gutter="1">
                        <el-form-item label="名" label-width="100px" prop="shipToFirstName">

                        <el-col :span="25"><div class="grid-content bg-purple">
                            <el-input
                                type="text"
                                v-model="ruleForm.shipToFirstName"
                                placeholder="请输入你的名字"
                                prefix-icon="el-icon-lock"
                                autocomplete="off"
                                class="my-input"
                            ></el-input>
                        </div></el-col>
                        </el-form-item>
                        <el-form-item label="姓" label-width="100px" prop="shipToLastName">
                        <el-col :span="25"><div class="grid-content bg-purple">
                            <el-input
                                type="text"
                                v-model="ruleForm.shipToLastName"
                                placeholder="请输入你的姓氏"
                                prefix-icon="el-icon-lock"
                                autocomplete="off"
                                class="my-input"
                            ></el-input>
                        </div></el-col>
                        </el-form-item>
                    </el-row>

                    

                    <el-row :gutter="1">
                        <el-form-item label="地址1" label-width="100px" prop="shipAddress1">
                        <el-col :span="25"><div class="grid-content bg-purple">
                            <el-input
                                type="text"
                                v-model="ruleForm.shipAddress1"
                                placeholder="请输入一号地址"
                                prefix-icon="el-icon-lock"
                                autocomplete="off"
                                class="my-input"
                            ></el-input>
                        </div></el-col>
                        </el-form-item>
                        <el-form-item label="地址2" label-width="100px"  prop="shipAddress2">
                        <el-col :span="25"><div class="grid-content bg-purple">
                            <el-input
                                type="text"
                                v-model="ruleForm.shipAddress2"
                                placeholder="请输入二号地址"
                                prefix-icon="el-icon-lock"
                                autocomplete="off"
                                class="my-input"
                            ></el-input>
                        </div></el-col>
                        </el-form-item>
                    </el-row>

                    <el-row :gutter="1">
                        <el-form-item label="城市" label-width="100px"  prop="shipCity">
                        <el-col :span="25"><div class="grid-content bg-purple">
                            <el-input
                                type="text"
                                v-model="ruleForm.shipCity"
                                placeholder="请输入你居住的城市"
                                prefix-icon="el-icon-lock"
                                autocomplete="off"
                                class="my-input"
                            ></el-input>
                        </div></el-col>
                        </el-form-item>
                        <el-form-item label="省份" label-width="100px"  prop="shipState">
                        <el-col :span="25"><div class="grid-content bg-purple">
                            <el-input
                                type="text"
                                v-model="ruleForm.shipState"
                                placeholder="请输入你居住的省份"
                                prefix-icon="el-icon-lock"
                                autocomplete="off"
                                class="my-input"
                            ></el-input>
                        </div></el-col>
                        </el-form-item>
                    </el-row>

                    <el-row :gutter="1">
                        <el-form-item label="邮政编码" label-width="100px"  prop="shipZip">
                        <el-col :span="25"><div class="grid-content bg-purple">
                            <el-input
                                type="text"
                                v-model="ruleForm.shipZip"
                                placeholder="请输入邮政编码"
                                prefix-icon="el-icon-lock"
                                autocomplete="off"
                                class="my-input"
                            ></el-input>
                        </div></el-col>
                        </el-form-item>
                        <el-form-item label="国家" label-width="100px"  prop="shipCountry">
                        <el-col :span="25"><div class="grid-content bg-purple">
                            <el-input
                                type="text"
                                v-model="ruleForm.shipCountry"
                                placeholder="请输入你的国家"
                                prefix-icon="el-icon-lock"
                                autocomplete="off"
                                class="my-input"
                            ></el-input>
                        </div></el-col>
                        </el-form-item>
                    </el-row>
              
                </el-collapse-item>
            </el-collapse>

            <el-form-item>
                <el-button type="primary" color="#505458" @click="submitForm(ruleForm)">确认订单</el-button>
                <el-button type="primary" color="#505458" @click="toInfo">取消订单</el-button>
            </el-form-item>
            </el-form>
        </div>
    </main>
</template>

<style scoped>
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