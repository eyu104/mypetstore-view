<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute} from 'vue-router'
import {accountStore} from "../stores/account";
import {storeToRefs} from "pinia";
import request from '../utils/request';
const account = accountStore()
let {username,
  password,
  email,
  firstName,
  lastName,
  status,
  address1,
  address2,
  city,
  state,
  zip,
  country,
  phone,
  favouriteCategoryId,
  languagePreference,
  listOption,
  bannerOption,
  bannerName} = storeToRefs(account)

const router = useRouter()
const route = useRoute()

const state1 = ref('')

interface LinkItem {
  value: string
  link: string
}

const links = ref<LinkItem[]>([])


let timeout = 500
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {

    links.value = []
    request.get('/category/productAuto',{
        params: {
            keyword: queryString
        }
    }).then((res)=>{
        let datas = res.data
        datas.forEach(i => {
            let tem = ref<LinkItem>()
            tem.value = {
                value: i.categoryId + '\: ' + i.name,
                link: i.productId
            }
            links.value.push(tem.value)
        });
    })
    const results = links.value

    clearTimeout(timeout)
    timeout = setTimeout(() => {
        cb(results)
    }, 3000 * Math.random())
}

const loginReset = () => {
  account.$reset()
  localStorage.clear()
}

const handleSelect1 = (item: LinkItem) => {
  const id = item.link
  
    router.push(
      {
      path: '/item',
      query: {
        productId: id
      }
    }
    )
}

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  activeIndex.value = key
  console.log(key, keyPath)
}
</script>

<template>
  <div class="header">
    <el-affix :offset="0">
      <div style="width: 95vw;">
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
          <!-- <div class="block1"> -->
          <el-menu-item index="home"><b>Pet</b>&nbspStore</el-menu-item>
          <!-- </div> -->


          <div class="block2">
            
          </div>

          <div class="block3">
            <el-autocomplete
            v-model="state1"
            :fetch-suggestions="querySearchAsync"
            placeholder="Please input"
            @select="handleSelect1"
          />
          </div>

          <!-- <div class="block2-1"> -->
          <el-menu-item index="cart" >
            Cart<el-icon><ShoppingCart /></el-icon>
          </el-menu-item>
          <!-- </div> -->
          <!-- <div class="block3"> -->


          <el-menu-item index="about" class="l">
            About<el-icon><InfoFilled /></el-icon>
          </el-menu-item>

          <!-- </div> -->

          <!-- <div class="block4"> -->
          
          <!-- </div> -->

          <!-- <div class="block5"> -->

          <el-sub-menu index="5">
            <template #title>
              <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
            </template>

            <div v-if="username===''">
              <el-menu-item index="login">登录</el-menu-item>
            </div>

            <div v-else>
            <el-menu-item index="info">个人信息</el-menu-item>
            <el-menu-item index="login" @click="loginReset()">退出登录</el-menu-item>
            </div>
          </el-sub-menu>

          <!-- </div> -->


        </el-menu>
      </div>




    </el-affix>
  </div>


</template>

<style scoped>

.header {
  display: flex;
  width: 100vh;

}

.block2 {
  width: 48vw;
  display: flex;
  margin: 0 0;

}
.block3 {
  width: 13vw;
  display: inline-block;
  padding-top: 13px;
}


</style>