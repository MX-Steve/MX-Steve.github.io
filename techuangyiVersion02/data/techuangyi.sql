SET NAMES UTF8;
DROP DATABASE IF EXISTS techuangyi;
CREATE DATABASE techuangyi CHARSET=UTF8;
USE techuangyi;

/**网站基本信息表**/
CREATE TABLE te_site_info(
  ino INT PRIMARY KEY AUTO_INCREMENT,
  logo VARCHAR(64),
  siteName VARCHAR(32),
  adminMail VARCHAR(64),
  icp VARCHAR(64),
  copyright VARCHAR(64)
);
INSERT INTO te_site_info VALUES
(1, 'img/images/logo.png', '特创易', 'admin@mm.com',
 '京ICP证060883号', '北京易创意科技有限公司?版权所有');
/**用户信息表**/
 CREATE TABLE te_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32) not null default '',
    upwd VARCHAR(32) not null default ''
 );

 /**导航条栏目表**/
 CREATE TABLE te_navbar(
   nno INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(64),
   url VARCHAR(64),
   title VARCHAR(64)
 );
 INSERT INTO te_navbar VALUES
 (NULL, '服务分类','/severlist.html','服务分类'),
 (NULL, '平台介绍','/plateintroduction.html','平台介绍'),
 (NULL, '案例','/example.html','案例'),
 (NULL, '客户','/custom.html','客户');

/**轮播条目表**/
CREATE TABLE te_roll(
  cno INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(64),
  url VARCHAR(64),
  title VARCHAR(64),
  finishdate DATETIME,
  lev VARCHAR(64)
);
INSERT INTO te_roll VALUES
(NULL, 'img/picture/pic1.jpg','/movie/bhblw.html','波妞食品',now(),'5星');