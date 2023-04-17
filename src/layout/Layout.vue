<template>
  <el-container>

    <el-header>
      <Header />
    </el-header>

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


</template>

<script>

import  Header  from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Layout",
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>
.main {
  min-height: 78vh;
}
</style>