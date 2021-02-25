<template>
  <div>
    <div class="h1">
      <router-link left-arrow to="me"> <van-icon name="arrow-left" class="h2" /></router-link>
          <span>AddressEdit</span>
    </div>
    <div>
      <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
    </div>
  </div>

</template>
<script>
import Vue from 'vue';
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);
import { Toast } from 'vant';
export default {
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
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