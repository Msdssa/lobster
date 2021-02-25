<template>
  <div class="cartcontrol">
    <van-button icon="minus" color="#ff0303" size="mini" plain @click="updateFoodCount(false)" v-show="food.count > 0"/>
    <span v-show="food.count > 0" >{{food.count}}</span>
    <van-button @click="updateFoodCount(true)" icon="plus" color="#ff0303" size="mini" />
  </div>
</template>
<script>
export default {
  props:{
    food:Object
  },
  methods:{
    updateFoodCount (isAdd) {
      this.$store.dispatch('updateFoodCount',{isAdd, food: this.food})
    }
  }
}
</script>