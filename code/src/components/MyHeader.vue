<template>
<div class="header">
<van-nav-bar title="龙虾烧烤点餐">
  <template #left>
    <van-icon name="arrow-left" size="0.2rem" color="#020202" @click="toleft"/>
  </template>
  <template #right>
    <van-icon name="share" size="0.2rem" color="#020202" @click="share"/>
  </template>
</van-nav-bar>
</div>
</template>
<script>
export default {
  data(){
    return{
      showShare:true
    }
  },
  methods:{
    share(){
      //控制分享弹窗
      this.bus.$emit('show_task', this.showShare)
    },
    toleft(){
      this.$router.replace('/')
    }
  }
}
</script>