  <template>
    <div class="content" @mousewheel.prevent>
      <!-- 左侧导航-->
      <div class="left" ref="left">
        <ul>
          <li v-for="(item, index) in left" :key="index" :class="{current: currentIndex == index}" @click="selectItem(index, $event)">
            <p>{{item}}</p>
          </li>
        </ul>
      </div>
      <!-- 右侧内容 -->
      <div class="right" ref="right">
        <ul>
          <li class="right-item right-item-hook" v-for="(good,i) in goods" :key="i">
            <h2>{{good.name}}</h2>
            <hr>
            <ul :name="good.name" :key="good.id">
              <li v-for="(food,index) in good.content" :key="index">
                <div class="image">
                  <div class="img">
                    <img v-lazy="require('../assets/images/FoodList/01.jpg')" />
                  </div>
                </div>
                <div class="main">
                  <div class="title">{{food.name}}</div>
                  <div class="price">
                    <span>￥</span><span>{{food.price}}</span>    
                    <div class="btn_h">
                      <cartcontrol :food="food"></cartcontrol>
                      <!-- 按钮组件 -->
                      <!-- <van-button icon="minus" color="#ff0303" size="mini" plain @click="minus(menu,'MINUS')" v-show="menu.count > 0"/>
                      <span v-show="menu.count > 0" >{{menu.count}}</span>
                      <van-button @click="add(menu,'PLUS')" icon="plus" color="#ff0303" size="mini" /> -->
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import Vue from 'vue'
import { mapState,mapGetters} from 'vuex'
import { setStorage } from '@/libs/utils'; 
import Cartcontrol from './Cartcontrol.vue';
export default {
  components:{
    Cartcontrol,
  },
  data () {
    return {
      left: ['秘制虾尾','招牌龙虾','木炭烧烤','秘制闸蟹','招牌川菜','主食小吃','酒水饮料'],
      // right: [
      //    {
      //     id:2,
      //     name:'秘制虾尾',
      //     content:[
      //       {
      //         id:1,
      //         name:'招牌虾尾',
      //         price:29.9,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:2,
      //         name:'秘制麻辣虾尾',
      //         price:19.8,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:3,
      //         name:'秘制蒜香虾尾',
      //         price:1111,
      //         img:'1233.jpg',
      //       }
      //     ]
      //   },{
      //     id:3,
      //     name:'招牌龙虾',
      //     content:[
      //       {
      //         id:1,
      //         name:'爆款麻辣小龙虾',
      //         price:29.9,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:2,
      //         name:'蒜香麻辣小龙虾',
      //         price:19.8,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:3,
      //         name:'十三香麻辣小龙虾',
      //         price:1111,
      //         img:'1233.jpg',
      //       }
      //     ]
      //   },{
      //     id:4,
      //     name:'木炭烧烤',
      //     content:[
      //       {
      //         id:1,
      //         name:'招牌虾尾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:2,
      //         name:'秘制麻辣扇贝肉',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:3,
      //         name:'麻辣小龙虾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:4,
      //         name:'碳烤羊肉串',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:5,
      //         name:'爆出麻辣花甲',
      //         price:1111,
      //         img:'1233.jpg',
      //         count:1
      //       },
      //       {
      //         id:6,
      //         name:'爆炒田螺',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //     ]
      //   },{
      //     id:5,
      //     name:'秘制闸蟹',
      //     content:[
      //       {
      //         id:1,
      //         name:'招牌虾尾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:2,
      //         name:'秘制麻辣扇贝肉',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:3,
      //         name:'麻辣小龙虾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:4,
      //         name:'碳烤羊肉串',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:5,
      //         name:'爆出麻辣花甲',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:6,
      //         name:'爆炒田螺',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //     ]
      //   },{
      //     id:6,
      //     name:'招牌川菜',
      //     content:[
      //       {
      //         id:1,
      //         name:'招牌虾尾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:2,
      //         name:'秘制麻辣扇贝肉',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:3,
      //         name:'麻辣小龙虾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:4,
      //         name:'碳烤羊肉串',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:5,
      //         name:'爆出麻辣花甲',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:6,
      //         name:'爆炒田螺',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //     ]
      //   },{
      //     id:7,
      //     name:'主食小吃',
      //     content:[
      //       {
      //         id:1,
      //         name:'招牌虾尾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:2,
      //         name:'秘制麻辣扇贝肉',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:3,
      //         name:'麻辣小龙虾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:4,
      //         name:'碳烤羊肉串',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:5,
      //         name:'爆出麻辣花甲',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:6,
      //         name:'爆炒田螺',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //     ]
      //   },{
      //     id:8,
      //     name:'酒水饮料',
      //     content:[
      //       {
      //         id:1,
      //         name:'招牌虾尾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:2,
      //         name:'秘制麻辣扇贝肉',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:3,
      //         name:'麻辣小龙虾',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:4,
      //         name:'碳烤羊肉串',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:5,
      //         name:'爆出麻辣花甲',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //       {
      //         id:6,
      //         name:'爆炒田螺',
      //         price:1111,
      //         img:'1233.jpg',
      //       },
      //     ]
      //   }
      // ],
      listHeight: [],
      scrollY: 0, //实时获取当前y轴的高度
      clickEvent: false,
    }
  },
  methods: {
    _initScroll () {
      //better-scroll的实现原理是监听了touchStart,touchend事件，所以阻止了默认的事件（preventDefault）
      //所以在这里做点击的话，需要在初始化的时候传递属性click,派发一个点击事件
      //在pc网页浏览模式下，点击事件是不会阻止的，所以可能会出现2次事件，所以为了避免2次，可以在绑定事件的时候把$event传递过去
      this.lefts = new BScroll(this.$refs.left, {
        click: true
      })
      this.rights = new BScroll(this.$refs.right, {
        probeType: 3  //探针的效果，实时获取滚动高度
      })
      //rights这个对象监听事件，实时获取位置pos.y
      this.rights.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _getHeight () {
      let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
      let height = 0
      this.listHeight.push(height)
      for(let i = 0; i < rightItems.length; i++){
        let item = rightItems[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectItem(index,event){
      // console.log(event.srcElement)
      this.clickEvent = true
      //在better-scroll的派发事件的event和普通浏览器的点击事件event有个属性区别_constructed
      //浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性的时候return掉
      if(!event._constructed){
        return
      }else{
        let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
        let r_el = rightItems[index]
        this.rights.scrollToElement(r_el, 300);
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
      this._getHeight()
    })
  },
  computed: {
    ...mapState(['cartData','totalCount','totalPrice','goods']),
    ...mapGetters(['totalCount', 'totalPrice']),
    currentIndex () {
      for(let i = 0; i < this.listHeight.length; i++){
        let height = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        //当height2不存在的时候，或者落在height和height2之间的时候，直接返回当前索引
        //>=height，是因为一开始this.scrollY=0,height=0
        if(!height2 || (this.scrollY >= height && this.scrollY < height2)){
          return i
        }
        if(this.listHeight[this.listHeight.length - 1] - this.$refs.right.clientHeight <= this.scrollY){
          if(this.clickTrue){
            return this.currentNum
          }else{
            return (this.listHeight.length - 1)
          }
        }
      }
      //如果this.listHeight没有的话，就返回0
      return 0
    },

  },
  // updated () {
  //   // if(this.totalCount>0){
  //     setStorage({
  //       totalCount: this.totalCount,
  //       totalPrice: this.totalPrice,
  //       cartData: this.cartData
  //     });
  //   // } 
  // }
}
</script>
<style>
.content{
  display: flex;
  height:95vh;
  margin-top:0.01rem;
  margin-bottom:0.3rem
}
/* **********************左侧导航样式********* */
.content .left{
  flex:1.5;
  width:100px;
  height:100%;
  font-size:0.15rem;
  background-color:rgb(243 235 235 / 96%);
}
.content .left ul{
  height:90vh;
  display: flex;
  flex-direction:column;

  /* justify-content: space-between; */
}
.content .left li{
  height:0.5rem;
  /* line-height: 0.5rem; */
  /* display:table-cell; */
  /* display:table-cell; */
  vertical-align: bottom;
  /* flex:1; */
  padding-left:0.1rem;
  /* background-color:rgb(243 235 235 / 96%); */
  display: table;
  /* border: 1px solid; */
}
.content .left li p{
  height:100%;
  vertical-align: middle;
  display: table-cell;
}
/* 选中高亮 */
.content .left li.current{
  background-color:white;
}
.content .br_border{
  border-bottom-right-radius:15px;
}
.content .tr_border{
  border-top-right-radius:15px;
}
/* ************************右侧内容*********** */
.content .right{
  flex: 5;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
}
.content .right-item h2{
  margin:0 auto;
  font-size:0.15rem;
  font-weight: 600;
  width:0.9rem;
  text-align: center;
  padding-top:0.08rem;
  padding-bottom:0.04rem;
  border-bottom:1px solid #c5baba
}
.content .right-item hr{
    width: 90px;
    margin: 3px auto;
}
.content .right-item li{
  padding:0.2rem 0 0.2rem 0.1rem;
  display: flex;
  border-bottom:1px solid #c5baba;
}
/* .content .right .image{
  flex:1;
} */
.content .right .img{
  width:0.7rem;height:0.7rem;
  border-radius: 5px;
  /* border:1px solid red; */
  overflow: hidden;
}
.content .right .img img{
  height:100%;
  width:100%
}
.content .right .main{
 margin-left:0.1rem;
 margin-top:3px;
 text-align: left;
 flex:2;
 display: flex;
 flex-flow:column;
 justify-content: space-between;
}
.content .right .main .title{
  font-size:0.15rem;
  line-height: 0.18rem;
  width:1.8rem;
  font-weight:600; 
}
.content .right .main span{
  display: inline-block;
  vertical-align: bottom;
}
.content li span:first-child{
  font-size:0.15rem;
}
.content .right .main .price{
  position:relative;
  font-size:0.2rem;
  color:#ff0303;  
}
.content .right .main .btn_s{
  display: inline-block;
  position:absolute;
  right:0.2rem;
  top:-0.05rem
}
.content .right .main .btn_h{
  display: inline-block;
  position:absolute;
  right:0.2rem;
  top:-0.05rem
}
.content .right .main .btn_h span{
  display: inline-block;
  width:0.35rem;height:100%;
  text-align: center;
  font-size:0.2rem;
  background-color:transparent;
}
/* .content .right .main .btn{
  display: absolute;
  margin-left:0.3rem;
  touch-action: none; 
}
.content .right .main .btn span span{
  
} */

</style>
