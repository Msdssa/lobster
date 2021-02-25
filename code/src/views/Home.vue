<template>
  <div class="home">
  
 
    <!-- 头部 -->
    <div class="header">
      <h1>小龙虾点餐</h1>
      <van-image
          round
          width="0.5rem"
          height="0.5rem"
          src="https://s3.ax1x.com/2021/01/25/sqBpsP.jpg"
        />
      <div class="login">
        <div v-if="isLogin == 0">
          <span> <router-link to="/login">登录 / </router-link> </span>
          <span> <router-link to="/register">注册</router-link></span>
        </div>
        <div v-else>
          <span> 欢迎 :{{nickname}}</span>
        </div>
      </div>
      
    </div>
    <!-- 地址导航 -->
    <div class="map">
     <h1>离你最近：南阳路天旺广场店</h1>
     <div class="icon">
       <van-icon name="location" color="#ff0303" size="mini"/>
       <p>郑州市金水区南阳路天旺广场(一)楼(C02)号/室商铺</p>
       <van-button round type="info" color="#ff0303">更换门店</van-button>
     </div>
    </div>
    <div class="buut">
      <van-button class="but" size="large" icon="shop-collect" to="lists">立即下单</van-button>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="#ff4343">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播结束 -->
    <div class="c1">
      <span>有机食品&健康生活</span>
    </div>
    <!-- 图片 -->
    <router-link to="/shop_recommand">
      <van-image
        class="i1"
        :style="{ height: imgHeight }"
        width="100%"
        height="461px"
        lazy-load
        :src="img"
    /></router-link>
    <!-- 图片结束 -->
    <!-- 底部选项卡开始 -->
    <van-tabbar v-model="tabactive">
      <van-tabbar-item name="tab-van">
        <img
          slot="icon"
          v-if="tabactive == 'tab-van'"
          src="../assets/images/common/main_1.png"
        />
        <img slot="icon" v-else src="../assets/images/common/main_0.png" />
        首页
      </van-tabbar-item>
      <!-- <van-tabbar-item name="tab-list">
           <img slot="icon" v-if="tabactive=='tab-list'" src="../assets/images/common/cart_1.png"> 
          <img slot="icon" v-else src="../assets/images/common/cart_0.png">
         商品
        </van-tabbar-item> -->
      <van-tabbar-item name="tab-me">
        <img
          slot="icon"
          v-if="tabactive == 'tab-me'"
          src="../assets/images/common/me_1.png"
        />
        <img slot="icon" v-else src="../assets/images/common/me_0.png" />
        我的
      </van-tabbar-item>
      <!-- 底部选项卡结束 -->
    </van-tabbar>
  </div>
</template>
<style  scoped>
.header{
  height: 1.3rem;
  background-color:#ff0303;
  color: rgb(48, 46, 46);
  font-size: 0.2rem;
  text-align: center;
  border-bottom-left-radius:0.2rem;
  border-bottom-right-radius:0.2rem;
  position: relative
}
.header>h1{
  padding-top:0.2rem;
  color:rgb(54, 52, 52);
  font-size: 0.15rem;
}
.header>span{
  display: inline-block;
  font-size: 0.15rem;
  color:rgb(49, 45, 45);
  height:10px;
  top:0.1rem
}
.header .login{
  display: inline-block;
  margin-top:0.30rem;
  margin-left:-1rem;
  font-size:0.15rem;
  color:white
}
.header .login a{
  font-size:0.15rem;
  color:white
}
.header .van-image{
  position: absolute;
  top:0.5rem;
  left:0.3rem;
}
.home .icon{
  display: flex;
}
.home .icon .van-button{
  font-size:0.12rem;
  height:0.25rem;
  border-radius:0.08rem;
  margin-right:0.03rem
}
.home .map h1{
  font-size:0.15rem;
  margin-left:0.3rem;
  margin-top:0.2rem;
  margin-bottom: 0.1rem;
}
.home .map .icon p{
  font-size:0.13rem;
  color:rgb(116, 116, 116);
  margin-top:0.12rem;
  margin-bottom:0.15rem;
  width:70vw
}
.van-cell-group >>> .van-cell {
  color: white;
  font-size: 0.2rem;
  text-align: center;
  height: 1.2rem;
  line-height: 0.8rem;
  /* border-bottom-left-radius: 0.2rem; */
  /* border-bottom-right-radius: 0.2rem; */
}
.van-tabbar-item--active {
  color: #ff0303;
/* background-color:	#EE0000;*/} 
.swipe{
  width:95vw;
  height:1.96rem;
  text-align: center;
  margin:0 auto;
  /* border:1px solid red; */
  border-radius: 0.1rem;
}
.swipe img {
  width: 100%;
}
.c1 {
  padding: 0.1rem;
  text-align: center;
}
.c1 span {
  font-size: 0.2rem;
  color:rgb(15, 14, 14);
}
.home {
  background-color:white;
}
.d1 {
  height: 0.1rem;
}
.buut{
  text-align:center;
}
.but {
  background-color:#ff0303;   
  color: white;
  width:96vw;
  border-radius:0.1rem;
  box-shadow:2px 5px 10px #c53d7d;
  border:none;
  margin-bottom:0.2rem
}
</style>
<script>
export default {
  data() {
    return {
      isLogin:0,
      nickname:'',
      images: [
        require("../assets/images/swipe/01.png.jpg"),
        require("../assets/images/swipe/02.png.jpg"),
        require("../assets/images/swipe/03.png.jpg"),
      ],
      img: require("../assets/images/common/08.png.jpg"),
      imgHeight: "2.2rem",
      tabactive: "tab-van",
    };
  },
  watch: {
    tabactive(newVal) {
      if (newVal == "tab-van") {
        this.$router.push("/");
      } else if (newVal == "tab-me") {
        this.$router.push("/me");
      }
    },
  },
  mounted() {
    if(localStorage.getItem('isLogin')){
      this.isLogin =localStorage.getItem('isLogin')
    }else{
      this.isLogin = 0
    }
    
    console.log(this.isLogin)
    if(this.isLogin == 1){
      this.username = JSON.parse(localStorage.getItem('userInfo')).username
    }
    let screenWidth = window.screen.width;
    // console.log(screenWidth)
    //图片宽高
    let picwidth = 820;
    let picheight = 461;
    //轮播图的高度=图片高*屏幕宽/图片宽
    this.swipeHeight = (picheight * screenWidth) / picwidth + "px";
  }
};
</script>