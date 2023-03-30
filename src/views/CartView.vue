<script setup>
import { ref } from 'vue';
import request from '../utils/request'
import { onMounted } from 'vue'
import { getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
import {
  Delete,
} from '@element-plus/icons-vue'
import { useRouter,useRoute } from 'vue-router';
import { CartStore } from '../stores/cartN'
import {accountStore} from "../stores/account";

const account = accountStore()
let temName = account.username
let tableData = ref([])
let cartStore = CartStore()
const router = useRouter()
const route = useRoute()
tableData.value = cartStore.cart.cartItems
console.log(tableData.value)

onMounted(()=>{
  load()
})


const load = () =>{
    request.get('/cart/getCart',{
        params:{
            username: temName
        }
    }).then((res)=>{
        tableData.value = res.data.cartItems
        cartStore.cart = res.data
        console.log(tableData.value)
    })
}

const load2 =() => {
      console.log(temName)
      request.get('/cart/newOrder/'+ temName).then((res)=>{
        let orderDatas = res.data
        console.log(orderDatas.orderDate)
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
        console.log(cartStore.expiryDate)
      })
    }

const editQty = (itemId,qty) =>{
    request.post('/cart/update/' + temName + '/' + itemId + '/' + qty).then((res)=>{
        console.log(res)
    })
    load()
}
const isBtn = () => {
    if(tableData.value.length === 0){
        return false
    }else{
        return true
    }
}

const deleteItem = (itemId) => {
    request.delete('/cart/delete/'+ temName + '/' + itemId).then((res)=>{
        console.log(res)
    })
    load()
}

const newOrder = () => {
    load2()
    router.push({
        path: '/orders'
    })
}

</script>

<template>
    <main>
        <div class="main-div">
            <div class="title">
                <span>购物车</span>
            </div>
            <div class="table">
                <el-table :data="tableData"  border stripe style="width: 100%">
                    <el-table-column prop="item.itemId" label="商品ID" width="100" />
                    <el-table-column prop="item.product.productId" label="产品ID" width="120" />
                    <el-table-column prop="item.attribute1" label="描述" width="186" />
                    <el-table-column prop="inStock" label="是否有现货" width="100" />
                    <el-table-column prop="quantity" label="数量" width="100" >
                        <template #default="scope">
                            <div style="display: flex; align-items: center">
                                <el-input @blur="editQty(scope.row.item.itemId,scope.row.quantity)" v-model="scope.row.quantity" placeholder="请输入" />
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="item.listPrice" label="标价" width="100" />
                    <el-table-column prop="total" label="总价" width="100" />
                    <el-table-column  label="操作" width="60">
                    <template #default="scope">
                        <el-button type="danger" @click="deleteItem(scope.row.item.itemId)" :icon="Delete" circle />
                    </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pay">
                
                <el-button v-if="isBtn()" type="danger" @click="newOrder" round style="font-size: large;">结算</el-button>
            </div>
            
        </div>
        <div class="banner">

        </div>
    </main>
</template>


<style scoped>
.main-div {
    width: 60vw;
    
}

.title {
    font-size: 40px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 2px auto;
    text-align: center;
    color: #14616b;
    
}

.pay {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;

}

.banner {
    width: 95vw;
    height: 50vh;
    margin: 5px auto;
}

</style>