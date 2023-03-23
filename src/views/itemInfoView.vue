<script setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<template>
  <main>
    <div class="demo-image">
    <div class="block">
      <span class="demonstration"></span>
      <el-image style="width: 350px; height: 350px" :src="url" :fit="full" />
    </div>
    <div class="block">
      <div class="itemInfoTable">
        <el-card class="box-card" :body-style="{background: '#fcf7f1'}">
        <template #header>
        <div class="card-header">
          <span>商品名</span>
        </div>
        </template>
          <div class="text-item">
            <p class="price">￥62.4</p>
          </div>
          <div class="text-item">
            <p class="card-p">产品ID：</p>
          </div>
          <div class="text-item">
            <p class="card-p">描述：</p>
          </div>
          <div class="text-item">
            <p class="card-p">状况：</p>
          </div>
          <div class="text-item">
            <p class="card-p">库存：</p>
          </div>
          <el-button class="button" type="danger" >加入购物车</el-button>

        </el-card>
      </div>
    </div>
  </div>
  </main>
</template>


<style scoped>

.text-item {
  display: flex;
  margin-left: 5px;
  margin-bottom: 10px;
  width: 80%;
  /* border: 1px solid; */
  padding: 0;
}

.text-item .card-p {
  padding: 0 6px;
  line-height: 0px;
}

.text-item .price{
  color: red;
  font-size: 25px;
  line-height: 0px;
}

.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 40%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  padding: 0 auto;
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.block .itemInfoTable {
  margin: 0 10px;

}
</style>
