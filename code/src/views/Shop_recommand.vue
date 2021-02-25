<template>
  <div id="container">
    <div class="header">
      <router-link slot="left" to="/">
        <van-icon name="arrow-left" class="iconstyle" />
      </router-link>
      <!-- <span>小龙虾必吃榜TOP6</span> -->
    </div>
    <!-- 循环开始 -->

    <div
      v-for="(shop, index) of shop_recommand"
      :key="index"
      class="shoping"
      @click="me(index)"
    >
      <van-card
        class="van-vard"
        :tag="shop.i_tag"
        num=""
        :price="(shop.i_price).toFixed(2)"
        :title="shop.i_subject"
        :desc="shop.i_desc"
        :thumb="shop.i_image"
      >
        <template #tags>
          <van-tag>{{ shop.i_month }}</van-tag>
          <van-tag>{{ shop.i_like }}</van-tag>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shop_recommand: {},
      sos: "12",
    };
  },
  methods: {
    me(index) {
      // this.$router.push({
      //   path:`/details?${index}`})
      // this.$router.push({
      //   path:'/details',
      //   name:'Details',
      //   params:{id:index}
      // })
      console.log(index);
      this.$router.push({
        path: "/details",
        name: "Details",
        params: { id: index },
      });
    },
  },
  mounted() {
    this.axios.get("/shop_recommand").then((res) => {
      // console.log(res);
      this.shop_recommand = res.data.data;
      // console.log(res.data.data);
      this.shop_recommand.forEach((item) => {
        console.log(item);
      });
    });
  },
};
</script>
<style scoped>
#container {
  background-color: #f6f6f6;
  height: 100vh;
  border-radius: 0.2rem;
}
#container >>> .header {
  background-color: #f00;
  height: 30%;
  text-align: center;
  margin: 0 auto;
  padding: 2px;
  border-radius: 0.2rem;
  color: #f00;
  font: bold 微软雅黑;
  background-image: url(../assets/images/小龙虾必吃榜.png);
  margin-bottom: 2px;
}
.iconstyle {
  position: absolute;
  left: -2px;
  top: 10px;
  color: #fff;
}

.van-card {
  margin-bottom: 2px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
}
</style>
