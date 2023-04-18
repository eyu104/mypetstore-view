<script >
import {accountStore} from "./stores/account";
export default {
  name:"App",
  data() {
    return {
      lastTime: null, // 鼠标最后一次点击时间
      timeOut:60*60*1000, // 六十分钟未检测到鼠标点击就退出
    }
  },
  created() {
    this.lastTime = new Date().getTime()
  },
  methods: {
    isTimeOut () {
      let currentTime = new Date().getTime()
      if (currentTime - this.lastTime > this.timeOut) {
        accountStore().$reset()
        localStorage.clear()
        this.$router.push({path: '/'})
        this.$message({
          message: '您太久未操作，请重新登陆',
          type: 'warning'
        });
        this.lastTime = new Date().getTime()
      } else {
        this.lastTime = new Date().getTime()
      }
    }
  }
}

</script>

<template>
    <div class="common-layout" @click="isTimeOut">

      <RouterView :key="$route.fullPath" />

    </div>

</template>

<style scoped>

.common-layout{
  background-color: #1F8D94B3;
}

</style>
