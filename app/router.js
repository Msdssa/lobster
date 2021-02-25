//创建路由器对象
const express=require('express')
//引入连接池模块
const r=express.Router()
//添加路由
const pool=require('./pool')
r.post('/register',(req,res)=>{
    let obj=req.body;
    if(!obj.username){
        res.send({code:401,message:'用户名不能为空'})
    }
    if(!obj.password){
        res.send({code:402,message:'密码不能为空'})
    }
    if(!nickname){
        res.send({code:403,message:'昵称不能为空'})
    }
    let sql='insert into lobster_user set where (username,password,nickname) value(?,?,?)';
    pool.query(sql,[obj],(error,result)=>{
        if(error) throw error
        res.send({code:200,message:'注册成功'})
    })
})
    