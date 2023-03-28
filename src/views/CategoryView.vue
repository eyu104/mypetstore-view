<script setup>
import { ref,watch } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import request from "../utils/request"

const router = useRouter()
const currentDate = ref(new Date())
const categoryLists = ref([])
const len = ref(0)
onMounted(() => {
 load()
})

const load = () => {
  request.get('/category/findCate').then((res) => {
    categoryLists.value = res.data;
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
  )

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
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
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
