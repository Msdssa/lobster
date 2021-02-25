import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Me from "../views/Me.vue";
import Details from "../views/Details.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import AddressEdit from "../views/AddressEdit.vue";
import ShareSheet from "../views/ShareSheet.vue";
import Shop_recommand from "../views/Shop_recommand.vue";
import Payment from "../views/Payment.vue";
import Coupon from "../views/Coupon1.vue";
import Test from '../views/Test.vue'
import Aboutme from '../views/Aboutme.vue'
import Inviting from '../views/Inviting.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/aboutme",
    name: "Aboutme",
    component: Aboutme,
  }, {
    path: "/inviting",
    name: "Inviting",
    component: Inviting,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },

  {
    path: "/set",
    name: "Set",
    component: Set,
  },
  {
    path: "/coupon",
    name: "Coupon",
    component: Coupon,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/lists",
    name: "lists",
    component: () =>
      import(/* webpackChunkName: "Food_list" */ "../views/Food_list.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Shopping_cart.vue"),
  },
  {
    path: "/shop_recommand",
    name: "Shop_recommand",
    component: Shop_recommand,
  },
  {
    path: "/sharesheet",
    name: "ShareSheet",
    component: ShareSheet,
  },
  {
    path: "/addressedit",
    name: "AddressEdit",
    component: AddressEdit,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/me",
    name: "Me",
    component: Me,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.path == "/lists") {
    let isLogin = localStorage.getItem("isLogin");
    if (isLogin == 1) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
