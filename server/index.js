//加载express模块
const express=require('express');
//创建web服务器
const server=express();
//制定web服务器的监听端口
server.listen(3000)
//配置body-parser解析
const bodyParser=require('body-parser')
server.use(bodyParser.urlencoded({extended:false}))
//配置数据库连接池
const mysql=require('mysql')
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'',
    database:'lobster',
    charset:'utf8',
    createConnection:30
})
//配置CORS，指定放行的域名，防止出现跨域问题
const cors=require('cors')
server.use(cors({
    origin:['http://localhost:8080']
}))
/* 注册接口*/ 
server.post('/register',(req,res)=>{
    let username=req.body.username
    let password=req.body.password
    let nickname=req.body.nickname
    let sql='select * from lobster_user where username=?'
    pool.query(sql,[username],(error,results)=>{
        if(error) throw error
        if(results.length){
            res.send({code:1,message:'账号已存在'})
        }else{
            let sql='insert into lobster_user(username,password,nickname) value(?,?,?)'
            pool.query(sql,[username,password,nickname],(error,results)=>{
                if(error) throw error
                console.log(results)
                res.send({code:0,message:'ok'})
            })
        }
    })
})

server.post('/login',(req,res)=>{
    console.log(1)
    let username=req.body.username;
    let password=req.body.password;
    console.log(username,password)
    let sql='select * from lobster_user where username=? and password=?'
    pool.query(sql,[username,password],(error,results1)=>{
        if(error) throw error
        if(results1.length==0){
            res.send({code:1,message:'账号或密码输入有误，请重新输入'})
        }else{
            res.send({code:0,message:'ok'})
        }
    })
})
server.get('/shop_recommand',(req,res)=>{
    // let i_id=req.query.i_id
    // console.log(i_id)
    // if(!i_id){
    //     res.send({code:1,message:'no i-id',data:null})
    //     return;
    // }
    let sql='select * from Shop_recommand'
    pool.query(sql,(error,results)=>{
        //console.log(results)
        if(error) throw error
        res.send({code:0,message:'ok',data:results})
    })
})
server.post('/shop_recommand',(req,res)=>{
    let i_id=req.body.i_id
    console.log(i_id)
    if(!i_id){
        res.send({code:1,message:'no i-id',data:null})
        return;
    }
    let sql='select * from Shop_recommand where i_id=?'
    pool.query(sql,[i_id],(error,results)=>{
        //console.log(results)
        if(error) throw error
        res.send({code:0,message:'ok',data:results[0]})
    })
})
// server.post('/shop',(req,res)=>{
//     let i_id=req.body.i_id
//     console.log(i_id)
//     if(!i_id){
//         res.send({code:1,message:'no i-id',data:null})
//         return;
//     }
//     let sql='select * from Shop_recommand where i_id=?'
//     pool.query(sql,[i_id],(error,results)=>{
//         //console.log(results)
//         if(error) throw error
//         res.send({code:0,message:'ok',data:results[0]})
//     })
// })


