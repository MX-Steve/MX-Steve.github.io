<?php
header("content-type:application/json;charset=utf-8");
@$n = $_REQUEST['uname'] or die('{"code":-2,"msg":"用户名不能为空"}');
@$p = $_REQUEST['upwd']or die('{"code":-1,"msg":"密码不能为空"}');
require('init.php');
$sql = "INSERT INTO te_user VALUES(null,'$n','$p')";
//echo $sql;
$result = mysqli_query($conn,$sql);
$uid = mysqli_insert_id($conn);
$output = [
  'code'=>1,
  'msg'=>'注册成功',
  'uid'=>$uid
];
if($result===true){
  echo json_encode($output);
}else{
  echo '{"code":-3,"msg":"注册失败"}';
}