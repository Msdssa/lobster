<template>
	<div>
		
		<!-- vant导航栏 -->
		<van-nav-bar style="background-color: #ff0303;">
			
			<template #left>
				<van-icon @click="back" color="white" name="arrow-left" />
			</template>
			
			<template #title>
				<span style="color: white;">新用户注册</span>
			</template>
			
		</van-nav-bar>
		
		<!-- vant表单 -->
		<van-form>
       <van-field
		    v-model="nickname"
		    name="昵称"
		    label="昵称"
		    placeholder="请输入昵称"
		    :rules="[{ required: true, message: '请填写昵称' }]"
		  />
      <van-field
		  <van-field
		    v-model="username"
		    name="账号"
		    label="账号"
		    placeholder="账号"
		    :rules="[{ required: true, message: '请填写账号' },{pattern:/^[0-9a-zA-Z]{6,12}$/ , message: '账号格式不正确'}]"
		  />
      <van-field
		    v-model="password"
		    type="password"
		    name="密码"
		    label="密码"
		    placeholder="密码"
		    :rules="[{ required: true, message: '请填写密码' },{pattern: /^[0-9]{6}$/,message:'密码格式不正确'}]"
		  />
		  <van-field
		    v-model="repwd"
		    type="password"
		    name="密码"
		    label="密码"
		    placeholder="密码"
		    :rules="[{ required: true, message: '请填写密码' },{pattern: /^[0-9]{6}$/,message:'两次输入密码不一致'}]"
		  />
		  <div style="margin: 16px;">
		    <van-button @click="onSubmit" round block color="#ff0303" native-type="submit">
		      注册
		    </van-button>
		  </div>
		</van-form>
		
	</div>
</template>

<style scoped>


</style>
<script>
import '../assets/styles/reg.css'
import Vue from 'vue';
import { Toast } from 'vant';
	Vue.use(Toast);
	export default{
		data(){
			return{
        nickname:'',
				username:'',
        password:'',
        repwd:''
			}
		},
		methods:{
			onSubmit(){ //点击注册
        // 如果不符合注册条件则不会继续执行    
				if(this.username.trim() == ''){
					return
				}
				if(!this.username.match(/^[0-9a-zA-Z]{6,12}$/)){
					return
				}
				if(!this.password.match(/^[0-9]{6}$/)){
					return
        }
        if(!this.repwd.match(/^[0-9]{6}$/)){
					return
        }
        if(this.password===this.repwd){
					let params = `username=${this.username}&password=${this.password}&nickname=${this.nickname}`;
					this.axios.post('/register', params).then((res)=>{
						console.log(res.data)
						if(res.data.code==1){
							Toast.success('用户已存在')
						}else if( res.data.code==0 ){
							Toast.success('注册成功');
							this.$router.push('/login')
						}
					})
				}
			},
			back(){ //返回上一级
				window.history.back()
			}
		}
	}
</script>