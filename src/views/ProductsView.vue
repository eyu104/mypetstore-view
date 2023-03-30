<script setup>
import { assert } from '@vue/compiler-core';
import { ref,watch,onMounted,onBeforeUpdate } from 'vue'
import { useRouter,useRoute } from 'vue-router';
import request from "../utils/request"
const url = ref([]
)

const srcList = ref([[
'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d1a20cf431adcbef927ec91aa1af2edda3cc9f60.jpg',
'https://ts1.cn.mm.bing.net/th/id/R-C.5a4502c9ae240005df8fdcd9456ca04e?rik=vGqGMuvvbmgsvQ&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f013dea5542b3660000019ae973cc39.jpg%401280w_1l_2o_100sh.jpg&ehk=TIHSFWtFyomJQEPrXchC8QthvMCcgoAAY3A4CsEx04Q%3d&risl=&pid=ImgRaw&r=0'
]])


const router = useRouter()
const route = useRoute()
const categoryId = route.query.categoryId
const productList = ref([])
const len = ref(0)

onMounted(() => {
 load()
})



const load = () => {
  request.get('/category/findProd',{
    params:{
      categoryId: categoryId
    }
  }).then(res => {
    let datas = res.data
    datas.forEach(item => {
      var b = item.description.split("\"");
      item.description = b[1]
      url.value.push(b[1])
      console.log(b[1])
    });
    productList.value = datas
    console.log(productList.value)
  })
console.log(categoryId)
}

const interItem = (o) => {
  const id = o.productId
  
    router.push(
      {
      path: '/item',
      query: {
        productId: id
      }
    }
    )
}
</script>


<template>
<main>
    <el-row :gutter="20">
      <el-col
        v-for="(o, index) in productList"
        :key="index"
        :span="24"
        :offset="0"
      >
        <div class="product">
          <el-card shadow="hover" :body-style="{ padding: '0px', margin: '5px 0' }">
          <div class="image">
            <el-image
            style=" width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    padding-left: 0px;"
            :src="url[index]"
            :zoom-rate="1.2"
            :preview-src-list="o.description"
            :initial-index="4" />
          <div style="margin-top: 10px;">
            <span>产品ID：  </span>
            <span>{{ o.productId }}</span>
          </div>
          <div style="margin-top: 10px;">
            <span>产品名称：  </span>
            <span>{{ o.name }}</span>
          </div>
          </div>
        <div style="padding: 14px">
          
          <div class="bottom">
            <div style="display: flex; width: 80vw;"></div>
            <el-button text class="button" @click="interItem(o)" style="border: #545c64 solid 1px; width: 80px; margin-top: 10px;">View</el-button>
          </div>
        </div>
      </el-card>
        </div>
      </el-col>
  </el-row>
  </main>
    
</template>

<style scoped>

.image {
  
  padding-left: 14px;
}

.product {

  margin-top: 20px;

}


.bottom {

  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>