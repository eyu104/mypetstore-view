<script setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<template>
  <main>
    <el-row :gutter="20">
      <el-col
        v-for="(o, index) in 10"
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
          <span>Yummy hamburger</span>
          <div class="bottom">
            <el-button text class="button" style="border: #545c64 solid 1px; width: 60px;">View</el-button>
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
