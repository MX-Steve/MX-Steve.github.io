SET NAMES UTF8;
DROP DATABASE IF EXISTS tt;
CREATE DATABASE tt CHARSET=UTF8;
USE tt;

/**用户信息表**/
CREATE TABLE tt_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO tt_user VALUES
(null, 'hanhan', 'han123'),
(null, 'meimei', 'mei123'),
(null, 'chengcheng', 'cheng123');