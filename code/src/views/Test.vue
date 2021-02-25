<template>
  <div>
      		<!-- vant导航栏 -->
		<van-nav-bar style="background-color: #ff0303;">
			
			<template #left>
				<van-icon  color="white" size="0.2rem" name="arrow-left" @click="toleft" />
			</template>
			
			<template #title>
				<span style="color: white; font-size:0.2rem;font-weight:600;">订单管理</span>
			</template>

      <template #right>
        <van-icon name="wap-nav" color="white" />
			</template>
		</van-nav-bar>

    <van-tabs >
  <van-tab title="全部"></van-tab>
  <van-tab title="待付款"></van-tab>
  <van-tab title="代使用"></van-tab>
  <van-tab title="待评价"></van-tab>
  <van-tab title="退款/售后"></van-tab>
   </van-tabs>
  <van-card>

  </van-card>
  
  
  
  <div class="order-item">
    <div class="item-image">
       <img :src="test.i_image">
    </div>
      <div class="order">
        <div class=orders>{{test.i_subject}}</div>
        <div class="desc">{{test.i_desc}}</div>
        <!-- <div class="item">下单时间：2021-01-13 23:57</div> -->
        <div class="item">价格：{{test.i_price}}</div>
    </div>
    <!-- <div class="dan">
      订单完成
    </div> -->
  </div>

  </div>
 
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      test:{},
      i_id:0
    };
  },
  methods: {
  toleft(){
    this.$router.push('/details')
  }
  },
  mounted(){
    let i_id = this.$route.params.id
    console.log(i_id)
    this.axios.post(`/shop_recommand,i_id=${i_id}`).then((res) => {
        this.test = res.data.data
        console.log(this.test);
    })
   },

};
</script>
<style scoped>
.desc{
font-size: 0.16rem;
}
.order-item{
  padding-top: 0.1rem;
  padding-left:0.2rem ;
  display: flex;
  justify-content:space-between;
}
.order-item .order >.orders{
  /* margin-top:0.2rem ; */
  font-size: 22px; 
}
.order-item .order >.item{
  font-size:16px ;
}
.item-image img{
  width: 0.46rem;
}
.dan{
  padding-right: 0.1rem;
  padding-top: 0.15rem;
  font-size: 16px;
}
</style>