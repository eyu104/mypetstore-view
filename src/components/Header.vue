<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    activeIndex.value = key
  console.log(key, keyPath)
}
</script>

<template>
    <div class="header">
        <el-affix :offset="0">
            <div style="width: 96vw;">
                <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#14616B"

                text-color="#fff"
                active-text-color="#ffd04b"
                @select="handleSelect"

                router
            >
                <div class="block1">
                    <el-menu-item index="home" ><b style="font-size: x-large">PetStore</b></el-menu-item>
                </div>
                

                <div class="block2">

                </div>

                <div class="block2-1">
                    <el-menu-item index="2" >Cart</el-menu-item>
                </div>
                <div class="block3">

                
                    <el-menu-item index="about" >About</el-menu-item>
                   
                </div>
                
                <div class="block4">
                    <el-menu-item index="4">Search</el-menu-item>
                </div>
                    
                <div class="block5">
                    
                    <el-sub-menu index="5">
                    <template #title>Account</template>
                    <el-menu-item index="5-1">个人信息</el-menu-item>
                    <el-menu-item index="5-2">切换账号</el-menu-item>
                    <el-menu-item index="login">退出登录</el-menu-item>
                    </el-sub-menu>
                </div>
                
                
            </el-menu>
            </div>
                
            
            
            
    </el-affix>
    </div>

    

</template>

<style scoped>
.header {
    display: flex;
    width: 100%;

}

.block1 {
    width: 20vw;
    display: flex;
    margin: 0 0;
}
.block2 {
    width: 45vw;
    display: flex;
    margin: 0 0;
}

.block2-1 {
    width: 6vw;
    display: flex;
    margin: 0 0;
}
.block3 {
    width: 6vw;
    display: flex;
    margin: 0 0;
}
.block4 {
    width: 6vw;
    display: flex;
    margin: 0 0;
}
.block5 {
    width: 6vw;
    display: flex;
    margin: 0 0;
}
.flex-grow {
  flex-grow: 2;
}

/* .header>.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid var(--el-menu-active-color);
    color: #295187;
} */
</style>