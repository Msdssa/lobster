import  {
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_USER_INFO,
} from './mutations-type'

export default {
  // setData ({ commit }) {
    // let phoneData = JSON.parse(localStorage.getItem('phoneData') || '[]');
    // const totalPrice = Number(localStorage.getItem('totalPrice') || '0'),
    //       totalMount = Number(localStorage.getItem('totalMount') || '0'),
    //       cartData = JSON.parse(localStorage.getItem('cartData') || '[]');

    // phoneData = phoneData.map((item) => {
    //   const picsData = JSON.parse(item.pics);
    //   item.img = picsData[0][0][0];
    //   return item;
    // });

  //   commit('SET_DATA', {
  //     totalPrice,
  //     totalMount,
  //     cartData
  //   })
  // },
  
  // setTotal ({ commit }, payload) {
  //   commit('SET_TOTAL', payload);
  // },

  // setCart ({ commit }, payload) {
  //   commit('SET_CART', payload);
  // },

  // delCart({ commit }){
  //   commit('DEL_CART')
  // },

  //同步更新food中的count值
  updateFoodCount({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },

  // 同步清空购物车
  clearCart({commit}) {
    commit(CLEAR_CART)
  },

  //接受用户信息
  // getUserInfo({commit}){
  //   commit(RECEIVE_USER_INFO,{userInfo})
  // },

  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
}