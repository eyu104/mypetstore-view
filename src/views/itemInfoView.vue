<script setup>

import { ref,watch } from 'vue'
import { onMounted,onBeforeMount } from 'vue'
import { useRouter,useRoute } from "vue-router";
import request from "../utils/request"
import { CartStore } from '../stores/cartN'
import { storeToRefs } from 'pinia';
import {accountStore} from "../stores/account";
import { ElMessage } from 'element-plus'
const route = useRoute()
const id = route.query.itemId

const router = useRouter()
const item = ref([])
const name = ref('')
const price = ref(0)
const des = ref('')
const attr = ref('')
const num = ref(0)
const imageURL = ref('')
const productId = ref('')
const cartStore = CartStore();
let cart = ref(cartStore.cart)
const account = accountStore()
let temName = account.username

console.log(cart)
onMounted(()=>{
  load()
})

const load = () => {
  request.get('/category/findItem',{
    params:{
      itemId: id
    }
  }).then(res => {
    item.value = res.data
    name.value = item.value.product.name
    price.value = item.value.listPrice
    const de = ref([])
    de.value = item.value.product.description.split('>')
    des.value = de.value[1]
    de.value = item.value.product.description.split('\"')
    imageURL.value = de.value[1]
    attr.value = item.value.attribute1
    num.value = item.value.quantity
    productId.value = item.value.product.productId
    console.log(item.value.product)
  })
}
console.log(temName)
console.log(cart)
const addToCart = (item) => {
    request.post('/cart/addToCart/'+ item.itemId + '/' + temName
    ).then((res)=>{
        cartStore.cart = res.data
        cart = res.data
        console.log(cartStore.cart)
        ElMessage({
       message: '添加成功',
        type: 'success',
      })
    })
}

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>

<template>
  <main>
    <div class="demo-image">
    <div class="block">
      <span class="demonstration"></span>
      <el-image style="width: 500px; height: 350px" :src="imageURL"  />
    </div>
    <div class="block">
      <div class="itemInfoTable">
        <el-card class="box-card" :body-style="{background: '#fcf7f1'}">
        <template #header>
        <div class="card-header">
          <span>{{ name }}</span>
        </div>
        </template>
          <div class="text-item">
            <p class="price">￥{{ price }}</p>
          </div>
          <div class="text-item">
            <p class="card-p">产品ID：{{ productId }}</p>
          </div>
          <div class="text-item">
            <p class="card-p">描述：{{ des }}</p>
          </div>
          <div class="text-item">
            <p class="card-p">状况：{{ attr }}</p>
          </div>
          <div class="text-item">
            <p class="card-p">库存：{{ num }}</p>
          </div>
          <el-button class="button" type="danger" @click="addToCart(item)">加入购物车</el-button>

        </el-card>
      </div>
    </div>
  </div>
  </main>
</template>


<style scoped>

.text-item {
  display: flex;
  margin-left: 5px;
  margin-bottom: 10px;
  width: 80%;
  /* border: 1px solid; */
  padding: 0;
}

.text-item .card-p {
  padding: 0 6px;
  line-height: 0px;
}

.text-item .price{
  color: red;
  font-size: 25px;
  line-height: 0px;
}

.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 40%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  padding: 0 auto;
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.block .itemInfoTable {
  margin: 0 10px;

}
</style>
