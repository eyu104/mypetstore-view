<script setup>
import { ref,watch } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import request from "../utils/request"

const router = useRouter()
const currentDate = ref(new Date())
const categoryLists = ref([])
const len = ref(0)
let images = ref([])
onMounted(() => {
 load()
})

const load = () => {
  request.get('/category/findCate').then((res) => {
    let datas = res.data
    datas.forEach(item => {
      var b = item.description.split("\"");
      item.description = b[1]
      images.value.push(b[1])
    });
    categoryLists.value = datas;
    len.value = categoryLists.value.length
    console.log(categoryLists.value.length)
  })
}


const interCategory = (o) => {
  let name = categoryLists.value[o].categoryId
  router.push(
    {
      path: '/product',
      query: {
        categoryId: name
      }
    }
  ).catch((err)=>{
    
  })

}

</script>

<template>
  <main>
    <el-row :gutter="20">
      <el-col
        v-for="(categoryItem,o) in categoryLists"
        :key="o"
        :span="8"
        :offset="0"
      >
        <div class="category">
          <el-card shadow="hover" :body-style="{ padding: '0px', margin: '5px 0',background: '#fcf7f1' }">
        <el-image
          :src=categoryItem.description
          :fit="fill"
          style="width: 30vw;height: 30vh;"
          class="image"
          lazy
        />
        <div style="padding: 14px">
          <span>{{ categoryItem.categoryId }}</span>
          <div class="bottom">
            <el-button text class="button" @click="interCategory(o)" style="border: #545c64 solid 1px; width: 60px;">View</el-button>
          </div>
        </div>
      </el-card>
        </div>
      </el-col>
  </el-row>
  </main>
</template>


<style scoped>

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.category {
  margin: 0 0 2vh 0;
  /* width: 50vw; */
  /* display: flex; */
}
</style>
