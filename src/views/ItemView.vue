<script setup>

</script>

<template>
  <main>
    <el-row :gutter="20">
      <el-col
        v-for="(o, index) in 10"
        :key="o"
        :span="6"
        :offset="0"
      >
        <div class="item">
          <el-card shadow="hover" :body-style="{ padding: '0px', margin: '5px 0' }">
            <div class="itemInfo">
              <div>商品名</div>
              <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              />
            </div>
            <div style="padding: 14px;text-align: center; ">
              <table class="itemTable">
                <tr>
                  <td>商品ID</td>
                  <td>123</td>
                </tr>
                <tr>
                  <td>性别</td>
                  <td>男孩</td>
                </tr>
                <tr>
                  <td>价格</td>
                  <td>114元</td>
                </tr>
              </table>
              <div class="bottom">
                <el-button text class="button" style="border: #545c64 solid 1px; width: 60px; margin: 0 auto;">View</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
  </el-row>
  </main>
</template>


<style scoped>

.itemInfo {
  text-align: center;

}

.image {
  border-radius: 50%;
  padding-top: 10px;
  padding-left: 14px;
}

.item {

  margin-top: 20px;
  align-items: center;
}

.itemTable {
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
}

.itemTable td {
  border: 1px solid #545c64;
}

.itemTable tr {
  border: 1px solid #545c64;
}

.bottom {

  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
</style>
