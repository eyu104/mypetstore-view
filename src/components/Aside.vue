<template>
<div>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo">

    <el-sub-menu index="1">
      <template #title>
        <el-icon><el-image src="src/assets/images/dog.gif"></el-image> </el-icon>
        <span>宠物狗</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <el-icon><el-image src="src/assets/images/cat.gif"></el-image> </el-icon>
        <span>宠物猫</span>
      </template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>
        <el-icon><el-image src="src/assets/images/fish.gif"></el-image> </el-icon>
        <span>宠物鱼</span>
      </template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="4">
      <template #title>
        <el-icon><el-image src="src/assets/images/bird.gif"></el-image> </el-icon>
        <span>宠物鸟</span>
      </template>
      <el-menu-item index="4-1">item one</el-menu-item>
      <el-menu-item index="4-2">item two</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="5">
      <template #title>
        <el-icon><el-image src="src/assets/images/reptile.gif"></el-image> </el-icon>
        <span>宠物爬行类</span>
      </template>
      <el-menu-item index="5-1">item one</el-menu-item>
      <el-menu-item index="5-2">item two</el-menu-item>
    </el-sub-menu>

  </el-menu>

</div>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>

</style>