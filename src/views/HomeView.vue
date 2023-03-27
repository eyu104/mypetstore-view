<script>

export default {

  mounted() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'src/btn.js';
    document.body.appendChild(script);
  },


  name:'index',
  data(){
    return {
      imgList: [
        {id:0,idView: "src/assets/images/1.gif"},
        {id:1,idView: "src/assets/images/2.gif"},
        {id:2,idView: "src/assets/images/3.gif"},
        {id:3,idView: "src/assets/images/4.gif"},
        {id:4,idView: "src/assets/images/5.gif"}
      ]
    };
  },
  methods: {
    begin() {this.$router.push({path:'/category'})
    }
  }
}
</script>

<template>


<div style="width: 95vw;padding: 10px">

  <div style="padding: 10px;height: 25vh;background-image: url('src/assets/images/background.gif');" >

    <el-row :gutter="20">

      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <div style="margin: 10px 0">
          <el-space direction="vertical" style="width: 50vh;">
          <el-text class="mx-1" tag="b" style="font-size: 80px;color: #ffffff;">PET</el-text>
          <el-text class="mx-1" style="font-size: 50px;color: white;" tag="i">Store</el-text>
        </el-space>
        </div>

      </el-col>

      <el-col :span="12"><div class="grid-content ep-bg-purple" /></el-col>

      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <div style="margin: 15px">
        <div style="margin: 10px 10px">

          <div><el-text class="mx-1" style="font-size: 40px;color: white;">进入商店，</el-text></div>
          <div><el-text class="mx-1" style="font-size: 40px;color: white;">选购心仪的宠物吧！</el-text></div>

        </div>

        <div style="margin: 10px 10px">

          <a @click="begin" class="btn" >
            <b><span>从此开始</span></b>
          </a>

        </div>
        </div>
      </el-col>

    </el-row>

  </div>

<div class="index"  style="margin-top: 30px">
    <el-carousel :interval="4000" type="card" height="600px" pause-on-hover:ture>
      <el-carousel-item v-for="item in imgList" :key="item.id" style="height: 100%;">
        <img :src=item.idView class="image" style="object-fit: scale-down;width:100%;height: 100%">
      </el-carousel-item>
    </el-carousel>
</div>
</div>

</template>


<style scoped>

.btn{
  display:flex;
  text-align:center;
  font-size: 30px;
  width: 15vh;
  height: 5vh;
  position: relative;
  padding: 20px 30px;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  background-image: linear-gradient(rgb(255, 255, 255), rgb(253, 253, 254));
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  transition: .5s;
  overflow: hidden;
}

.btn:hover{
  color: #fff;
  text-decoration: underline;
}

.btn::before{
  content: "";
  position: absolute;
  left: var(--xPos);
  top: var(--yPos);
  /*left: 50%;*/
  /*top: 50%;*/
  transform: translate(-50%,-50%);
  width: 0px;
  height: 0px;
  background-color: #115760CC;
  border-radius: 50%;
  transition: width 0.7s,height 0.7s;
}

.btn:hover::before{
  width: 600px;
  height: 600px;
}

.btn span{
  position: relative;
  z-index: 1;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}



.index{

  width: 100%;
  text-align: center;
  margin : 0 auto;
  background-color: #F9F0E1EC;

}

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
