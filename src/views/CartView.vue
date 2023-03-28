<script setup>
import { ref } from 'vue';
import request from '../utils/request'
import { onMounted } from 'vue'
import { getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
import {
  Delete,
} from '@element-plus/icons-vue'
import useCartStore from '../stores/cart.js'
const cartStore = useCartStore();
const cartItems = ref([])
onMounted(()=>{
    const
})

const tableData = [
  {
    
  }
]
</script>

<template>
    <main>
        <div class="main-div">
            <div class="title">
                <span>购物车</span>
            </div>
            <div class="table">
                <el-table :data="tableData"  border stripe style="width: 100%">
                    <el-table-column prop="itemId" label="商品ID" width="100" />
                    <el-table-column prop="productId" label="产品ID" width="120" />
                    <el-table-column prop="attribute1" label="描述" width="186" />
                    <el-table-column prop="inStock" label="是否有现货" width="100" />
                    <el-table-column prop="quantity" label="数量" width="100" >
                        <el-input v-model="input" placeholder="请输入" />
                    </el-table-column>
                    <el-table-column prop="listPrice" label="标价" width="100" />
                    <el-table-column prop="total" label="总价" width="100" />
                    <el-table-column  label="操作" width="60">
                    <template #default>
                        <el-button type="danger" :icon="Delete" circle />
                    </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pay">
                <el-button type="danger" round style="font-size: large;">结算</el-button>
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