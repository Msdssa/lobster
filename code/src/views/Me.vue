<template>
<div>
  
    <!--  头部开始-->
    <van-nav-bar title="个人中心">
      <template #left>
        <van-icon name="arrow-left" size="0.2rem" color="#020202" @click="toleft"/>
      </template>
    </van-nav-bar>
    <div v-if="isLogin == 0">
      <router-link to="null">
         <div class="fail">
        <img src="../assets/ME/null_20210122204342.jpg" alt="">
           <p> 主人  请您先<router-link to="login">登录 </router-link> </p>
          </div>
      </router-link>
    </div>
    <div v-else>
    <div id="head">
      <van-image
        width="1rem"
        height="1rem"
        round
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      ></van-image>
      <p>欢迎回来</p>
    </div>
    <van-grid>
      <van-grid-item icon="orders-o" text="我的订单" to="/test" />
      <van-grid-item icon="share-o" text="分享" />
      <van-grid-item icon="chat-o" text="评论" />
     <router-link to="/coupon"><van-grid-item icon="coupon-o" text="优惠券" /></router-link> 
    </van-grid>
    <van-cell
      icon="label-o"
      is-link
      title="我的收藏"
      link-type="navigateTo"
      url="/pages/dashboard/index"
    />
    <van-cell
      icon="friends-o"
      is-link
      title="关于我们"
      link-type="navigateTo"
      to="/aboutme"
    />
    <van-cell
      icon="diamond-o"
      is-link
      title="邀请有礼"
      link-type="navigateTo"
      to="/inviting"
    />

    <van-cell
      icon="service-o"
      is-link
      title="人工客服"
      link-type="navigateTo"
      url="/pages/dashboard/index"
    />
    <van-cell
      icon="setting-o"
      is-link
      title="设置"
      link-type="navigateTo"
      url="/set"
    />
    <van-button type="info" size="large" @click="out">退出登录</van-button>

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
    </div>
</template>
<script>
import { Locale } from 'vant';
import {setStorage} from '../libs/utils'
export default {
  data() {
    return {
      isLogin:0,
      gutter: 10,
      ws: 3,
      tabactive: "tab-me"
    };
  },
  watch: {
    tabactive(newVal) {
      if (newVal == "tab-van") {
        console.log(this.$router)
        this.$router.push("/");
        // }else if(newVal == 'tab_list'){
        //   this.$router.push('/lists')
      } else if (newVal == "tab-me") {
        this.$router.push("/me");
      }
    },
  },
  methods:{
    toleft(){
      this.$router.replace('/')
    },
    out(){
      console.log(this.$store.state.userInfo)
      if(localStorage.getItem('isLogin') == 1){
        this.$toast.success({
          message:'已退出',
          duration:500,
          onClose:(()=>{
            localStorage.setItem('isLogin',0)
            localStorage.setItem('userInfo',JSON.stringify({}))
            this.$store.state.userInfo=[]
            this.$store.state.isLogin=0
            this.$router.push('/')
          })
        }) 
      }else{
        this.$toast.fail({
          message:'尚未登录,\n正在前往登录',
          duration:1000,
          onClose:(()=>{
            this.$router.push('/login')
          })
        })
      }
    }
  },
  mounted(){
    if(localStorage.getItem('isLogin')){
      this.isLogin =localStorage.getItem('isLogin')
    }else{
      this.isLogin = 0
    }
  }
};
</script>

<style scoped>
.fail{
    margin-top: 1rem;
    text-align: center;
 }
.fail>p>a{
     color: red;
 }
a{
  color: black;
}
.van-tabbar-item--active {
   color: #d81e06;;
  /* background-color: pink; */
}
.van-cell {
  font-size: 0.18rem;
}
.van-grid-item >>> .van-grid-item__text {
  font-size: 0.16rem;
}
.van-grid-item >>> .van-grid-item__icon {
  font-size: 0.5rem;
}
.ban-gird >>> .van-grid-item_icon {
  font-size: 100px;
}
.van-nav-bar >>> .van-icon {
  color:#494949
}
.van-nav-bar>>>.van-nav-bar__arrow{
  font-size:0.25rem
}
.van-nav-bar {
  background-color: #f0f0f0;
  height: 0.4rem;
  text-align: center;
  border-bottom-left-radius: 0.05rem;
  border-bottom-right-radius: 0.05rem;
}
.van-nav-bar >>> .van-nav-bar__title {
  font-weight: bold;
  font-size: 0.2rem;
}
#head >>> .van-image {
  margin-top: 0.15rem;
}
#head > p {
  margin-top: 0.1rem;
  color: white;
  font-size: 0.2rem;
}
#head {
  width: 100%;
  height: 1.7rem;
  /* background-color: #0aa1ed; */
  background-image: linear-gradient( 120deg, rgb(255 12 12) 0%, rgb(230 64 0) 100% );
  color: white;
  text-align: center;
  margin-bottom: 0.15rem;
  border-bottom-left-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;
}
.van-button--info{
  background:#ff0303;
  border:none;
}
</style>