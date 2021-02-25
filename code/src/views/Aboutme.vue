<template>
  <div class="container">
    <div class="header">
      <router-link slot="left" to="/me">
        <van-icon name="arrow-left" class="iconstyle" />
      </router-link>
     <div class="top">关于我们</div>
     <!-- <div class="item"></div> -->
       <div class="desc">
     <div class="list">小龙虾行业领导、践行者 </div>
     <!-- <div class="list"><img src="../assets/images/back.png" ></div> -->
       </div>
     <div class="desc">
     <div class="list">关于我们: </div>
     <div class="list">版本号：V1.1.2</div>
    </div>
      <div class="desc">
       <div class="list">联系我们:</div> 
        <div class="list">1047130467@qq.com</div>

    </div>
    </div>
     
  </div>
</template>
<style scoped>
.container{
height: 100vh;
background-color:rgba(242, 242, 242);
position: relative;
}
.container>>>.header{
  height: 35%;
  background-color: #fff;
}

.iconstyle {
  position: absolute;
  left: -2px;
  top: 10px;
  color:#ccc;
}
.container>>>.top{
  height:.4rem;
  line-height: .4rem;
  text-align: center;
  background-color: #fff;
  font-size: .25rem;
  border: 1px solid #fff;
  border-radius: 5px;
}

.container>>>.desc{
   height: .6rem;
  line-height: .6rem;
  background-color:#fff ;
  font-size: .2rem;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  display: flex;
  justify-content:space-between;
}
.desc>>>.list{
  height: .4rem;
  line-height: .4rem;
  font-size: .2rem;
  padding: 10px;
  border-radius: 2px;
 

}



</style>
