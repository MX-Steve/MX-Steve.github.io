CREATE TABLE kt_kind(
    kid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64),
    price FLOAT(6,2),
    img_sm VARCHAR(64),
    img_lg VARCHAR(64),
    detail VARCHAR(2048)
);
INSERT INTO kt_kind VALUES
(   null,
    '【小学教育】',
    3000.00,
    'p1.jpg',
    'p1-lg.jpg',
    '小学辅导教育,预习新学期的知识脉络,抢占先机,环境好/老师好/成绩提的快小学辅导教育,个性定制提升方案,针对性强'
),
(   null,
    '【初中教育】',
    5000.00,
    'm1.jpg',
    'm1-lg.jpg',
    '针对辅导,多年研究经验,真题考点剖析,模拟强化演练,提高可能性!1V1教学系统学习,及时答疑,短时间解决学科所有问题!'
),
(   null,
    '【高中教育】',
    8000.00,
    'h1.jpg',
    'h1-lg.jpg',
    '针对辅导，多年研究经验，真题考点剖析，模拟强化演练，提高可能性!1V1教学系统学习，及时答疑，短时间解决学科所有问题!'
),
(   null,
    '【大学教育】',
    10000.00,
    'c1.jpg',
    'c1-lg.jpg',
    '国家公立，国家承认学历，上课地点，时间自由，可2.5年拿毕业证.E学贷，学费0首付轻松入学，学历提升更简单。'
),
(   null,
    '【成人教育】',
    10000.00,
    'a1.jpg',
    'a1-lg.jpg',
    '成人教育，国家承认学历，上课地点，时间自由，可2.5年拿毕业证.E学贷，学费0首付轻松入学，学历提升更简单。'
);

##SELECT * FROM kt_kind;

CREATE TABLE kt_user(
    oid INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(16),
    pwd VARCHAR(16),
    sex INT,    /*1:男  2:女*/
    phone VARCHAR(16),
    addr VARCHAR(256)
);

##SELECT * FROM kt_user;

CREATE TABLE kt_classlist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    oid INT, /*用户的id*/
    kid INT, /*用户购买课程的id*/
    time datetime
);