<?php
  //1:获取用户参数
  //  uname/upwd
  header("content-type:text/plain;charset=utf-8");
  $uname = $_REQUEST['uname'];
  $upwd = $_REQUEST['upwd'];

  //2:连接数据库，设置编码
  require('init.php');
  //3:创建插入语句
  $sql = "INSERT INTO tt_user VALUES
          (null, '$uname', '$upwd')";
  //4:执行查询
  $result = mysqli_query($conn,$sql);
  if($result){
    echo 'success';
  }else{
    echo 'error';
  }