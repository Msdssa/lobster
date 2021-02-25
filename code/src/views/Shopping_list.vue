<template>
  <div>
    <product></product>
    <cart-list></cart-list>
  </div>
</template>
<script>
import CartList from '../components/Cartfoot'
import Product from '../components/Product'
export default {
  components:{
    CartList,
    Product
  }
}
</script>