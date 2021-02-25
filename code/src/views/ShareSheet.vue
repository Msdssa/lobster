<template>
  <div>
    <div class="h1">
      <router-link left-arrow to="me"> <van-icon name="arrow-left" class="h2" /></router-link>
          <span>AddressEdit</span>
    </div>
    <div>
<van-cell title="显示分享面板" @click="showShare = true" />
<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>
    </div>
  </div>

</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
</script>
<style scoped>
.h1{
  background-color: red;
  padding: 0.1rem;
  font-size: 0.25rem;
  margin-bottom: 0.05rem;
}
 .h1>span{
  text-align: center;
padding-right: 0.2rem;
} 
.h1>>>.h2{
  float: left;
}
.h1>.h3{
  color: orange;
  float: right;
  font-size: 0.15rem;
  padding-top: 0.05rem;
  color: black;
}
</style>