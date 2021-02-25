 <template>
      <div>
    <div class="a"><span>购物车</span></div>
    <van-cell-group>
      <van-cell title="购物车共件商品">
        <van-tag type="primary" size="large">清除购物车</van-tag>
      </van-cell>
    </van-cell-group>             
      <div>          
        <div class="clooc">
          <van-radio name="1"></van-radio>
            <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
                       
              <template #tags>
                         <van-tag plain type="danger">标签</van-tag>
                         <van-tag plain type="danger">标签</van-tag>
                       </template>
                       <template #footer>
                         <van-button size="mini">-</van-button>
                         <van-button size="mini">1</van-button>
                         <van-button size="mini">+</van-button>
                       </template>
                       </van-card>
              </div> 
                       <van-radio name="1"></van-radio>
                        <van-card
                       num="2"
                       price="2.00"
                       desc="描述信息"
                       title="商品标题"
                       thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
                      
                       <template #tags>
                         <van-tag plain type="danger">标签</van-tag>
                         <van-tag plain type="danger">标签</van-tag>
                       </template>
                       <template #footer>
                         <van-button size="mini">-</van-button>
                         <van-button size="mini">1</van-button>
                         <van-button size="mini">+</van-button>
                       </template>
                       </van-card>
                          <van-radio name="1"></van-radio>
                        <van-card
                       num="2"
                       price="2.00"
                       desc="描述信息"
                       title="商品标题"
                       thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
                        <van-radio name="1"></van-radio>  
                       <template #tags>
                         <van-tag plain type="danger">标签</van-tag>
                         <van-tag plain type="danger">标签</van-tag>
                       </template>
                       <template #footer>
                         <van-button size="mini">-</van-button>
                         <van-button size="mini">1</van-button>
                         <van-button size="mini">+</van-button>
                       </template>
                       </van-card>

                        
                       
                  </div>         
                  
      <div>
    <div>
      <van-submit-bar :price="3050" button-text="合计">
        <van-checkbox v-model="checkbox">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
  </div>
</template>
 
<style scoped>
     
    .a{
      width: 100%;
      text-align: center;
    }
    .looc>.van-radio {
         margin-top: 50px;
         margin-right: 3rem;
    }  
    .van-radio{
       margin-left: 10px;
    }
    .van-radio{
      margin: 10px;
    }
</style>

 
 