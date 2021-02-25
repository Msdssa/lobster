<template>
  <div>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],
    };
  },
  created(){
    this.bus.$on('show_task', this.share.bind(this))
  },
  methods:{
    share(){
      console.log(1)
      this.showShare = true
    }
  }
};
</script>