<template>
  <div>
    <my-header></my-header>
    <van-notice-bar
      left-icon="volume-o"
      :scrollable="true"
      text="小店温馨提醒各位顾客，喝酒不开车，开车不喝酒。现在充值会员即赠送22点后青岛啤酒无限畅饮券"
    />
    <food-list></food-list>
    <cart-list></cart-list>
    <share-sheet></share-sheet>
  </div>
</template>
<script>
import CartList from '../components/Cartfoot'
import FoodList from '../components/FoodList'
import MyHeader from '../components/MyHeader'
import ShareSheet from '../components/ShareSheet'
export default {
  components:{
    CartList,
    FoodList,
    MyHeader,
    ShareSheet
  }
}
</script>