<template>
	<div>
		
		<!-- vant导航栏 -->
		<van-nav-bar style="background-color: #ff0303;">
			
			<template #left>
				<van-icon @click="back" color="white" name="arrow-left" />
			</template>
			
			<template #title>
				<span style="color: white;">登录</span>
			</template>
			
		</van-nav-bar>
		
		<!-- vant表单 -->
		<van-form>
		  <van-field
		    v-model="username"
		    name="账号"
		    label="账号"
		    placeholder="账号"
		    :rules="[{ required: true, message: '请填写账号' },{pattern:/^[0-9a-zA-Z]{6,12}$/ , message: '用户不存在'}]"
		  />
      <van-field
		    v-model="password"
		    type="password"
		    name="密码"
		    label="密码"
		    placeholder="密码"
		    :rules="[{ required: true, message: '请填写密码' },{pattern: /^[0-9]{6}$/,message:'密码错误'}]"
		  />
		  <div style="margin: 16px;">
		    <van-button @click="onSubmit" round block color="#ff0303" native-type="submit">
		      立即登录
		    </van-button>
		  </div>
			<router-link to="/register">还没有账户?立即注册</router-link>
		</van-form>
		
	</div>
</template>
<style scoped>

.back-image {
  font-size: 0.18rem;

  text-align: center;
  width: 100%;
  height: 2rem;
  background-image: radial-gradient(248px at center center, rgb(22, 217, 227) 0%, rgb(48, 199, 236) 47%, rgb(70, 174, 247) 100%);
}
.back-image >>> .van-image {
   margin-top: 0.2rem;

}

.h1 {
  background-image:radial-gradient(248px at center center, rgb(22, 217, 227) 0%, rgb(48, 199, 236) 47%, rgb(70, 174, 247) 100%);
  padding: 0.1rem;
  color: #ffffff;
  font-size: 0.25rem;
}
.h1 > span {
  text-align: center;
  padding-left: 0.3rem;
}
.h1 >>> .h2 {
  float: left;
}
.h1 > .h3 {
  color: orange;
  float: right;
  font-size: 0.15rem;
  padding-top: 0.05rem;
  color: black;
}
.van-cell{
  padding:0.1rem 0 0.1rem 0.1rem;
  text-align: left;
}
.van-cell >>> .van-field__label{
  width:0.4rem
}
/* .i1 > .i2 {
  border: 0.02rem solid grey;
  border-radius: 0.2rem;
}
.i1 > .i3 {
  border: 0.02rem solid grey;
  border-radius: 0.2rem;
}
.dbtn1 > .dbtn2 {
  border: 0.02rem solid grey;
  border-radius: 0.2rem;
} */
form a{
	font-size:0.15rem;
	color:#ff4343;
	text-decoration: underline;
	display:inline-block;
	width:100vw;
	text-align: center;
}
</style>
<script>
	import Vue from 'vue';
	import { Toast } from 'vant';
	import {setStorage} from '../libs/utils'
	Vue.use(Toast);
	export default{
		data(){
			return{
				username:'',
        password:'',
			}
		},
		methods:{
			onSubmit(){ 
				if(this.username.trim() == ''){
					return
				}
				if(!this.username.match(/^[0-9a-zA-Z]{6,12}$/)){
					return
				}
				if(!this.password.match(/^[0-9]{6}$/)){
					return
        }
				let params = `username=${this.username}&password=${this.password}`;
				this.axios.post('/login',params).then((res)=>{
					if(res.data.code==0){
						localStorage.setItem('userInfo',JSON.stringify(res.data.userInfo))
						localStorage.setItem('isLogin',1)
						//更新state
						this.$store.dispatch('recordUser',res.data.userInfo)
						//跳转首页
						this.$router.push('/')
					}else{
						this.$toast.fail({
							message:'用户名或密码错误'
						})
					}
				})
				// setStorage({
    		//   userInfo: JSON.stringify(res.data.userInfo),
    		// });
				// setTimeout(()=>{ //一秒后跳转登录页面
				// 	this.$router.push({
				// 		path:'/'
				// 	})
				// },1000)
			},
			back(){ //返回上一级
				window.history.back()
			}
		}
	}
</script>