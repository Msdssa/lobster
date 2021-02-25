import Vue from 'vue'
import {
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_USER_INFO,
} from './mutations-type'
export default {
  // SET_DATA (state, data) {
  //   const { totalPrice, totalMount, cartData } = data;

  //   state.totalPrice = totalPrice;
  //   state.totalMount = totalMount;
  //   state.cartData = cartData;
  // },
  // SET_TOTAL (state, payload) {
  //   console.log(payload)
  //   const { price, type } = payload;

  //   switch (type) {
  //     case 'PLUS':
  //       state.totalPrice += price;
  //       state.totalMount += 1;
  //       break;
  //     case 'MINUS':
  //       state.totalPrice -= price;
  //       state.totalMount -= 1;
  //       break;
  //     default:
  //       break;
  //   }
  // },
  //加入购物车
  // SET_CART (state, payload) {
  //   const {
  //     id, 
  //     price,
  //     name,
  //     type,
  //     img
  //   } = payload;

  //   //判断购物车有没有该产品
  //   const index = state.cartData.findIndex(item => item.name === name);
  //   // console.log(index)
  //   if (index === -1) {
  //     state.cartData.push({
  //       id,
  //       price,
  //       name,
  //       img,
  //       totalMount: 1,
  //       totalPrice: price
  //     })
  //   } else {
  //     switch (type) {
  //       //对应商品数量+
  //       case 'PLUS':
  //         state.cartData[index].totalMount += 1;
  //         state.cartData[index].totalPrice += price;
  //         break;
  //       //对应商品数量-
  //       case 'MINUS':
  //         state.cartData[index].totalMount -= 1;
  //         state.cartData[index].totalPrice -= price;
          
  //         //为0时从购物车清除
  //         if (!state.cartData[index].totalMount) {
  //           state.cartData = state.cartData.filter(item => item.id !== id);
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // },

  [INCREMENT_FOOD_COUNT](state, {food}) {
    if(!food.count) { // 第一次增加
      // food.count = 1  // 新增属性(没有数据绑定)
      /*
      对象
      属性名
      属性值
       */
      Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if(food.count) {// 只有有值才去减
      food.count--
      if(food.count===0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },

  //清空购物车
  [CLEAR_CART](state) {

    // 清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    // 移除购物车中所有购物项
    state.cartFoods = []
  },

  [RECEIVE_USER_INFO](state,{userInfo}) {
    state.userInfo = userInfo;
    state.isLogin = 1;
  }
}