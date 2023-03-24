<script setup>
import { RouterLink, RouterView } from 'vue-router'
import  Header  from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
 
    <div class="common-layout">
    <el-container>
       <el-header><Header /></el-header>
      <el-main>

        <div class="main">
            <RouterView />
        </div>

      </el-main>
      <el-footer>
        <div class="footer">
          <Footer />
        </div>
      </el-footer>
    </el-container>
  </div>

  
  
</template>

<style scoped>


</style>
