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
import AdCard from '../components/AdCard.vue';

const account = accountStore()
let temName = account.username
let tableData = ref([])
let cartStore = CartStore()
const myList = ref(false)
const router = useRouter()
const route = useRoute()

const productList = ref([])

tableData.value = cartStore.cart.cartItems
console.log(tableData.value)
myList.value = account.listOption
onMounted(()=>{
  load()
  getFavorite()
})


const load = () =>{
    myList.value = account.listOption
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



const getFavorite = () => {
  let name = account.favouriteCategoryId
  request.get('/category/findProd',{
    params:{
      categoryId: name
    }
  }).then(res => {
    let datas = res.data
    datas.forEach(item => {
      var b = item.description.split("\"");
      var c = item.description.split(">")
      item.description = []
      item.description.push(b[1])
      item.description.push(c[1])
    });
    productList.value = datas
    console.log(productList.value)
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

const goToDetail = (id) =>{
    router.push(
      {
      path: '/item',
      query: {
        productId: id
      }
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
            <div v-if="myList === true" class="ad">
                <h2 style="text-align: center;">猜你喜欢</h2>
                <el-carousel trigger="click" height="31.5vh">
                    <el-carousel-item v-for="item in productList" :key="item" style="border-radius: 10px;">
                        <AdCard 
                        :name="item.categoryId"
                        :descn="item.description[1]"
                        :product-id="item.productId"
                        :imgsrc="item.description[0]"
                        @cilck="goToDetail(item.productId)"
                        />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </main>
</template>


<style scoped>
.main-div {
    position: relative;
    display: inline-flexbox;
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
    display: inline-flexbox;
    position: absolute;
    width: 30vw;
    height: 50vh;
    top: 0px;
    right: 50px;
    margin-top: 10vh;
    color: #14616b;
}

</style>