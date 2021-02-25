set names utf8;
#如果存在lobster，丢弃
drop database if exists lobster;
#创建数据库lobster
create database lobster charset=utf8;
use lobster;
/*用户名列表*/
create table lobster_user(
uid int primary key auto_increment,
username varchar(24),  #用户名
password varchar(12),   #密码
nickname varchar(128), #昵称，如花花
avatar varchar(128)  #头像图片路径
);


/**购物车条目**/
create table lobster_shopping_cart(
  lid int primary key auto_increment,
  user_id int,      #用户编号
  shopping_id int,   #商品编号
  count int,        #购买数量
  is_checked boolean #是否已勾选，确定购买
);

/**用户订单**/
create table lobster_order(
  aid int primary key auto_increment,
  user_id int,
  address_id int,
  status int,             #订单状态 
  order_time bigint,      #下单时间
  pay_time bigint        #付款时间
)auto_increment=10000000;

/**用户订单**/
create table lobster_order_detail(
  did int primary key auto_increment,
  order_id int,           #订单编号
  product_id int,         #产品编号
  count int               #购买数量
);
/* 商品推荐表*/
create table Shop_recommand(
   i_id int ,
   i_tag varchar(60),
   i_subject varchar(500) not null, #标题
   i_desc varchar(3000), #详情、简介
   i_image varchar(500) default null,  #图片
   i_price decimal(5,2), #价格
   i_month varchar(400),
   i_like varchar(200)
);
insert into Shop_recommand values(1,"top1","招牌小龙虾", "【每只45克】活虾现做♛浓香四溢☞【色】个大体肥，色泽红润【香】鲜香麻辣，浓香四溢【味】腮净腹白，鲜嫩多汁","http://zzgcode.xyz/shop/shop_list/01.jpg",84.00,"月售999","赞11");
insert into Shop_recommand values(2,"top2","麻辣小龙虾", "【每只45克】活虾现做♛浓香四溢☞【色】个大体肥，色泽红润【香】鲜香麻辣，浓香四溢【味】腮净腹白，鲜嫩多汁","https://s3.ax1x.com/2021/01/26/svptu8.jpg",65.00,"月售999","赞11");
insert into Shop_recommand values(3,"top3","蒜香小龙虾", "【每只45克】活虾现做♛浓香四溢☞【色】个大体肥，色泽红润【香】鲜香麻辣，浓香四溢【味】腮净腹白，鲜嫩多汁","http://zzgcode.xyz/shop/shop_list/04.jpg",65.00,"月售999","赞11");
insert into Shop_recommand values(4,"top4","五香小龙虾", "【每只45克】活虾现做♛浓香四溢☞【色】个大体肥，色泽红润【香】鲜香麻辣，浓香四溢【味】腮净腹白，鲜嫩多汁","http://zzgcode.xyz/shop/shop_list/06.jpg",65.00,"月售999","赞11");
insert into Shop_recommand values(5,"top5","香辣小龙虾", "【每只45克】活虾现做♛浓香四溢☞【色】个大体肥，色泽红润【香】鲜香麻辣，浓香四溢【味】腮净腹白，鲜嫩多汁","https://s3.ax1x.com/2021/01/26/svpfUJ.jpg",65.00,"月售999","赞11");
insert into Shop_recommand values(6,"top6","蒜蓉扇贝", "【每只45克】新鲜扇贝♛浓香四溢☞【色】个大体肥，色泽红润【香】鲜香麻辣，浓香四溢【味】腮净腹白，鲜嫩多汁","https://s3.ax1x.com/2021/01/26/sv9S2t.jpg",45.00,"月售999","赞11");
insert into Shop_recommand values(7,"top7","烤龙虾", "【每只45克】活虾现做♛浓香四溢☞【色】个大体肥，色泽红润【香】鲜香麻辣，浓香四溢【味】腮净腹白，鲜嫩多汁","http://zzgcode.xyz/shop/shop_list/02.jpg",45.00,"月售999","赞11");
insert into Shop_recommand values(8,"top8","碳烤肉串", "【每只45克】新鲜肉串♛密料腌制☞【色】超大肉串，色泽红润【香】鲜香麻辣，浓香四溢【味】唇齿留香，鲜嫩多汁","http://zzgcode.xyz/shop/shop_list/37.jpg",38.00,"月售999","赞11");
insert into Shop_recommand values(9,"top9","红烧龙虾", "【每只45克】活虾现做♛浓香四溢☞【色】个大体肥，色泽红润【香】鲜香麻辣，浓香四溢【味】腮净腹白，鲜嫩多汁","https://s3.ax1x.com/2021/01/26/sv9KMV.jpg",56.00,"月售999","赞11");
/*商品列表*/
create table List_style_details(
   d_id int(10) not null ,
   d_subject varchar(50) not null, #标题
   d_description varchar(300) not null, #详情、简介
   d_image varchar(50) default null, #图片
   d_price decimal(5,2) #价格 
   
);
