<template>
  <div>
    <van-nav-bar title="付款" left-arrow  @click-left="onClickLeft"></van-nav-bar>
    <div>
      <div class="price">
        <p>你需要支付：</p>
        <p>{{totalPrice.toFixed(2)}}元</p>
      </div>
      <p class="other">选择支付方式</p>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="支付宝" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="微信" clickable @click="radio = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
          <van-cell title="银行卡" clickable @click="radio = '3'">
            <template #right-icon>
              <van-radio name="3" />
            </template>
          </van-cell>
          <van-cell title="余额" clickable @click="radio = '4'">
            <template #right-icon>
              <van-radio name="4" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <van-button size="large" type="danger" @click="handle()">付款</van-button>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
import { mapState,mapGetters} from 'vuex'
export default {
  data() {
    return {
      radio: "",
    };
  },
  computed:{
    ...mapGetters(['totalPrice'])
  },
  methods: {
    handle() {
      let radio = this.radio;
      if (radio === "") {
        Dialog.alert({
          message: "请先付款",
        }).then(() => {});
      } else {
        Dialog.alert({
          message: "支付成功",
        }).then(() => {
          this.$router.replace('/')
        });
      }
    },
    onClickLeft() {
      this.$router.replace('/lists')
    },
  },
};
</script>
<style scoped>
.van-nav-bar {
  background-color: #ee0000;
  color: white;
}
.van-nav-bar >>> .van-nav-bar__title {
  color: white;
  font-size: 0.22rem;
  font-weight: normal;
}
.van-nav-bar >>> .van-icon {
  font-size: 0.25rem;
  color: white;
}
.price {
  margin-left: 0.1rem;
}
.price > p:first-child {
  font-size: 0.18rem;
  margin-top: 0.1rem;
}
.price > p:last-child {
  margin-top: 0.12rem;
  color: #ee0000;
  font-weight: 600;
}
.other {
  margin-top: 0.1rem;
  background: #cfcfcf;
  font-size: 0.2rem;
  padding: 0.2rem 0.1rem 0.1rem;
  font-weight: 600;
}
</style>