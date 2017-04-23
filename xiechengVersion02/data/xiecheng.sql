SET NAMES 'utf8';
DROP DATABASE IF EXISTS xiecheng;
CREATE DATABASE xiecheng CHARSET=UTF8;
USE xiecheng;
/*创建用户表*/
CREATE TABLE xc_user_list(
    did INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(64),
    upwd VARCHAR(64),
    tel VARCHAR(32),
    email VARCHAR(64)
);
INSERT INTO xc_user_list VALUES(
    NULL,
    'honghong',
    'hong123',
    '18262629611',
    'hong@163.com'
),
(
    NULL,
        'dongdong',
        'dong123',
        '18262629612',
        'dong@163.com'
),
(
    NULL,
        'meimei',
        'mei123',
        '18262629612',
        'mei@163.com'
);
/*创建携程model表*/
CREATE TABLE xc_model(
    name VARCHAR(32),
    t1 VARCHAR(32),
    t2 VARCHAR(32),
    t3 VARCHAR(32),
    t4 VARCHAR(64),
    t5 VARCHAR(32),
    t6 VARCHAR(32)
);
INSERT INTO xc_model VALUES(
    'hotel',
    '酒店',
    '海外酒店',
    '团购',
    'xc-model-pic-01',
    '特价酒店',
    '民宿.客栈'
),
(
    'plane',
    '机票',
    '火车票.抢票',
    '汽车票.船票',
    'xc-model-pic-02',
    '特价机票',
    '专车.租车'
),
(
    'travel',
    '旅游',
    '目的地攻略',
    '邮轮',
    'xc-model-pic-03',
    '周边游',
    '定制旅游'
),
(
    'play',
    '景点.玩乐',
    '美食林',
    '全球购.换汇',
    '礼品卡',
    'WiFi.电话卡',
    '保险.签证'
);
/*创建携程特卖汇表*/
CREATE TABLE xc_sports(
    pic_big VARCHAR(32),
    pic_s1 VARCHAR(32),
    pic_s2 VARCHAR(32),
    pic_s3 VARCHAR(32),
    pic_s4 VARCHAR(32)
);
INSERT INTO xc_sports VALUES(
    'sports-big.jpg',
    'sports-sm01.jpg',
    'sports-sm02.jpg',
    'sports-sm03.jpg',
    'sports-sm04.jpg'
);
/*创建携程轮播图表*/
CREATE TABLE xc_carousel(
    pic_c1 VARCHAR(32),
    pic_c2 VARCHAR(32),
    pic_c3 VARCHAR(32),
    pic_c4 VARCHAR(32),
    pic_c5 VARCHAR(32),
    pic_c6 VARCHAR(32)
);
INSERT INTO xc_carousel VALUES(
    'phone_casel_01.jpg',
    'phone_casel_02.jpg',
    'phone_casel_03.jpg',
    'phone_casel_04.jpg',
    'phone_casel_05.jpg',
    'phone_casel_06.jpg'
);
/*创建携程subentry图表*/
CREATE TABLE xc_subentry(
    url VARCHAR(32),
    name VARCHAR(32)
);
INSERT INTO xc_subentry VALUES
('xc-icon-01','自由行'),
( 'xc-icon-02','微领队'),
('xc-icon-03','一日游'),
( 'xc-icon-04','高端游'),
('xc-icon-05','酒店+景点'),
('xc-icon-06','亲子+游学'),
('xc-icon-07','外汇兑换'),
('xc-icon-08','加盟合作'),
('xc-icon-09','机场停车'),
('xc-icon-10','行李寄送'),
('xc-icon-11','当季去哪'),
('xc-icon-12','更多服务');