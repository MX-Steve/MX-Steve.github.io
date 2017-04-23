SET NAMES UTF8;
DROP DATABASE IF EXISTS techuangyi;
CREATE DATABASE techuangyi CHARSET=UTF8;
USE techuangyi;

/**��վ������Ϣ��**/
CREATE TABLE te_site_info(
  ino INT PRIMARY KEY AUTO_INCREMENT,
  logo VARCHAR(64),
  siteName VARCHAR(32),
  adminMail VARCHAR(64),
  icp VARCHAR(64),
  copyright VARCHAR(64)
);
INSERT INTO te_site_info VALUES
(1, 'img/images/logo.png', '�ش���', 'admin@mm.com',
 '��ICP֤060883��', '�����״���Ƽ����޹�˾?��Ȩ����');
/**�û���Ϣ��**/
 CREATE TABLE te_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32) not null default '',
    upwd VARCHAR(32) not null default ''
 );

 /**��������Ŀ��**/
 CREATE TABLE te_navbar(
   nno INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(64),
   url VARCHAR(64),
   title VARCHAR(64)
 );
 INSERT INTO te_navbar VALUES
 (NULL, '�������','/severlist.html','�������'),
 (NULL, 'ƽ̨����','/plateintroduction.html','ƽ̨����'),
 (NULL, '����','/example.html','����'),
 (NULL, '�ͻ�','/custom.html','�ͻ�');

/**�ֲ���Ŀ��**/
CREATE TABLE te_roll(
  cno INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(64),
  url VARCHAR(64),
  title VARCHAR(64),
  finishdate DATETIME,
  lev VARCHAR(64)
);
INSERT INTO te_roll VALUES
(NULL, 'img/picture/pic1.jpg','/movie/bhblw.html','���ʳƷ',now(),'5��');