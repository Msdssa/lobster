<template>
  <div>
    		<van-nav-bar style="background-color: red;">
			
			<template #left>
				<van-icon @click="back" color="white" name="arrow-left" />
			</template>
			
			<template #title>
				<span style="color: white;">分享</span>
			</template>
      		</van-nav-bar>
    <!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<!-- 优惠券列表 -->
<van-popup
  v-model="showList"
  round
  position="bottom"
  style="height: 90%; padding-top: 4px;"
>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
  </div>
</template>
<script>
import Vue from 'vue';
import { CouponCell, CouponList } from 'vant';
Vue.use(CouponCell);
Vue.use(CouponList);
  const coupon = {
  available: 2,
  condition: '无使用门槛',
  reason: '不能叠加使用',
  value: 1000,
  name: '全场通用',
  startAt: 1579529000,
  endAt: 1595929000,
  valueDesc: '10',
  unitDesc: '元',
}
export default {

  data() {
    return {
      chosenCoupon: -1,
      showList:'',
      coupons: [coupon],
      disabledCoupons: [coupon],
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
       back(){
    setTimeout(()=>{ //一秒后跳转登录页面
			this.$router.push({
			path:'/me'
			})
			},1000)
   }
  },
  
}
</script>