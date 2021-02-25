<template>
  <div class="cartList" v-show="totalCount">
    <!-- 购物车弹出 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <div class="header">
        <span>已选商品</span>
        <div><van-icon name="delete-o" size="0.18rem" color="#333" /><span @click="clearCart">清空购物车</span></div>
      </div>
      <div class="cart-list">
        <van-card 
        v-for="(food,index) in cartFoods"
        :key="index"
        :price="food.price"
        :title="food.name"
        :thumb="'https://img.yzcdn.cn/vant/ipad.jpeg'">
          <template #footer>
            <!-- <van-button icon="minus" color="#ff0303" size="mini" plain @click="minus(item,'MINUS')" />
              <span>{{item.count}}</span>
            <van-button @click="add(item,'PLUS')" icon="plus" color="#ff0303" size="mini" /> -->
            <CartControl :food="food"/>
          </template>
        </van-card>
      </div>
    </van-popup>
    <van-goods-action class="goodsAction">
      <van-goods-action-icon icon="cart-o" :badge="totalCount" text=" 购物车" @click="onClickIcon" />
      <button class="btn" @click="gotolink">已选好</button>
      <h1>总金额：￥{{totalPrice.toFixed(2)}}</h1>
    </van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters} from 'vuex';
import { setStorage } from '@/libs/utils';
import CartControl from '../components/Cartcontrol'
export default {
  components:{
    CartControl
  },
  data(){
    return {
      show:false,
      // 加入购物车的商品
      selectFoods:[]
    }
  },
  computed:{
    ...mapState(['totalCount','cartFoods','totalPrice']),
    ...mapGetters(['totalCount', 'totalPrice']),
  },
  updated(){
    setStorage({
      // 更新购物车图标
      totalCount: this.totalCount,
      totalPrice: this.totalPrice,
      cartFoods: this.cartFoods
    });
    //解决从购物车减少数量为0时,show为ture,弹出依然会自动弹出的情况
    if(this.totalCount == 0){this.show = false}
  },
  methods: {
    gotolink(){
      this.$router.replace('./payment')
    },
    onClickIcon() {
     this.show = !this.show;
    },
    onClickButton() {
      console.log('已选好')
    },
    clearCart(){
      this.$dialog.confirm({
        title: '提醒',
        message: '确定清空购物车吗',
      }).then((action)=>{
        if(action == 'confirm'){
          //清空购物车
          this.$store.dispatch('clearCart')
        }
      }).catch(()=>{})
    },
  },
}
</script>
<style>
.cartList .header{
  width:100%;
  height: 0.28rem;
  background:#e6e6e6;
  font-size:0.13rem;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  position:fixed;
  z-index:2
}
.cartList .header span{
  font-size:0.15rem;
  line-height: 0.28rem;
  vertical-align: middle;
  padding:0 0.1rem 0 0.1rem;
  vertical-align: middle;
}
.cartList .header span:nth-child(2){
  font-size:0.12rem;
  padding-left:0;
}
.cartList .header i{
  height: 100%;
  vertical-align: -webkit-baseline-middle;
}
.cartList .cart-list{
  position: relative;
  margin-top:0.25rem;
  margin-bottom:0.43rem;
  overflow: hidden;
  z-index:0.1
}
.cartList .van-card__num{
  font-size: 0.15rem;
  margin-right:0.2rem
}
.cartList .van-card__footer{
  position:absolute;
  right:0.1rem; 
  bottom:0.08rem;
}
.cartList .van-card__footer .van-button{
  margin:0
}
.cartList .van-card__footer span{
  vertical-align: middle;
  display: inline-block;
  height:100%;
  width:0.2rem;
  text-align: center;
  font-size: 0.13rem;
}


.cartList .goodsAction{
  position: fixed;
  z-index:2030
}
.cartList .btn{
  height:100%;
  position: absolute;
  right:0;
  font-size:0.15rem;
  width:1.2rem;
  background: #ff0303;
  color:white;
}
.cartList h1{
  font-size:0.15rem;
  color:#ff0303
}
::-webkit-scrollbar {
/*隐藏滚轮*/
display: none;
}
</style>
