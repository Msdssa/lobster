//创建服务器
const  express=require('express')
const  app=express()
//引入第三方插件
const bodyParser=require(body-parser)
//端口号
app.listen(3030);
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use('/user',userRouter)

