<template>
  <div class="header">
    <van-nav-bar title="商品详情">
      <template #left>
        <van-icon
          name="arrow-left"
          size="0.23rem"
          color="white"
          @click="toleft"
        />
      </template>
      <template #right>
        <van-icon name="like-o" color="white" size="0.23rem" />
      </template>
    </van-nav-bar>
    <div class="floor1">
      <img
        :src="details.i_image"
        style="width: 100%; height: 100%"
        alt="哦，加载失败了"
      />
    </div>
    <div class="floor2">
      <span>{{ details.i_subject }}</span>
      <!-- <van-stepper value="1" integer min="1" max="10"></van-stepper> -->
    </div>
    <div class="floor3">
      <span>{{ details.i_desc }}</span>
      <p>价格：{{ details.i_price }}</p>
    </div>
    <div>
      <van-button type="danger" size="large" @click="join" >加入订单</van-button>
    </div>
  </div>
</template>
<script>
import {getDetails } from "../assets/js/product.js";
import { get } from 'http';
export default {
  data() {
    return {
      details: {},
      i_id:1,

    };
  },
  methods: {
    toleft() {
      this.$router.push("/shop_recommand");
      onload(){
      getDetails(this.lid).then(res=>{
        this.product=res.product;
      })
    }
    },
    created(){ //只会在首次加载组件时，执行一次。
    this.onload();
  },
  watch:{
    "$route"(){
      this.onload();
    }
  },
  beforeRouteLeave(to, from, next){
    console.log(`路由离开details...`);
    if(to.name=="products"){
      to.meta.keepAlive=true;
    }
    next();
  },
  beforeRouteEnter(to, from,next){
    console.log(`路由进入detais...`);
    next();
  }
}
    join(lid){
      this.$router.push({
        path: "/test",
        name: "Test",
        params: {id: lid},
        
      });
    }
  },
  mounted() {
    // this.$store.state.detail = this.$route.params.id;
    // console.log(this.$store.state.detail);
    // let i_id = this.$store.state.detail
    let i_id=this.$route.params.id
    if(i_id==0){
      i_id=0;
    }
    this.axios.post("/shop_recommand",`i_id=${i_id+1}`).then((res) => {
      this.details = res.data.data;
      console.log(this.details);
    });
  },
  computed: {},
};
</script>
<style scoped>
.floor3 > p {
  float: right;
  margin-right: 0.15rem;
  margin-top: 0.2rem;
  color: firebrick;
  font-size: 0.2rem;
  margin-bottom: 0.15rem;
}
.floor3 {
  font-size: 0.2rem;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 0.2rem;
}
.floor2 {
  margin-top: 0.1rem;
  font-size: 0.2rem;
  margin: left 0.15rem;
  margin-bottom: 0.1rem;
}
.floor2 > .van-stepper {
  float: right;
  margin-right: 10px;
}
.van-stepper >>> button {
  width: 30px;
  height: 30px;
}
.van-stepper >>> .van-stepper__input {
  font-size: 25px;
}
.floor1 {
  width: 100%;
  height: 2.5rem;
  border: 1px solid red;
  box-sizing: border-box;
}

.van-nav-bar {
  background-color: #ff0303;
  border-bottom-left-radius: 0.05rem;
  border-bottom-right-radius: 0.05rem;
}

.van-nav-bar >>> .van-nav-bar__title {
  color: white;
  font-size: 0.15rem;
}
</style>