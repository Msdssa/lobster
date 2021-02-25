<template>
  <div>
    <div class="clss">
      <van-nav-bar title="邀请有礼活动">
        <template #left>
          <van-icon
            name="arrow-left"
            size="0.18rem"
            color="white"
            @click="toleft"
          />
        </template>
      </van-nav-bar>
    </div>

    <van-image
      width="4rem"
      height="2rem"
      fit="contain"
      src="https://ae01.alicdn.com/kf/Ubb29045af5204a508da623c02d36d743z.jpg"
    />
    <h3 class="zixi">邀请好友越多,获得的奖励就越多!</h3>
    <div class="to">
      ----------------------------------------------------
      <p>
        邀请1位好友奖励
        <van-button round type="danger" @click="showShare = true"
          >10元红包</van-button
        >
      </p>
      ----------------------------------------------------
      <p>
        邀请6位好友奖励
        <van-button round type="danger" @click="showShare = true"
          >20元红包</van-button
        >
      </p>
      -----------------------------------------------------
      <p>
        邀请10位好友奖励
        <van-button round type="danger" @click="showShare = true"
          >30元红包</van-button
        >
      </p>
      -----------------------------------------------------
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
    </div>

    <van-goods-action-button
      type="danger"
      text="立即邀请"
      @click="showShare = true"
    >
    </van-goods-action-button>
  </div>
</template>

<style scoped>
.van-nav-bar {
  background-color: #ff0303;
}
.van-nav-bar >>> .van-nav-bar__title {
  color: white;
  font-size: 0.2rem;
}
.to {
  width: 3.5rem;
  height: 3.2rem;
  font-size: 0.25rem;
  text-align: center;
}

.zixi {
  color: red;
  font-size: 0.2rem;
  text-align: center;
}
.clss {
  height: 0.2rem;
}
.p {
  text-align: center;
}
</style>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  methods: {
    toleft() {
      this.$router.push("/me");
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
</script>
