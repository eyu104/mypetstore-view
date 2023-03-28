<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}
</script>

<template>
    <main>
        <div class="main-div">
            <div class="demo-collapse">
                <el-collapse v-model="activeNames" border @change="handleChange">
                <el-collapse-item title="支付明细" name="1">
                    <div>
                        <table>
                            <tr>
                                <td>支付卡类型</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>卡号</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>送达时间</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="账单地址" name="2">
                    <div>
                        <tr>
                            <td>名</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>姓</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>地址一</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>地址二</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>城市</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>省份</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>邮编</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>国家</td>
                            <td></td>
                        </tr>
                    </div>
                    
                </el-collapse-item>
                <el-collapse-item title="收货地址" name="3">
                    <div>
                        <tr>
                            <td>名</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>姓</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>地址一</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>地址二</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>城市</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>省份</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>邮编</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>国家</td>
                            <td></td>
                        </tr>
                    </div>
                </el-collapse-item>
               
                </el-collapse>
            </div>
            <div class="continue">
                <el-button type="warning" round>继续</el-button>
            </div>
        </div>
    </main>

</template>

<style scoped>
.main-div {
    padding: 20px 20vw;
}
</style>