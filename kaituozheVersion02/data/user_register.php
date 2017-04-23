<?php
/**
*接收客户端提交的uname和upwd，验证登录信息，返回{"code":1,"msg":"login succ","uname":"qiangdong", "uid":10 }，或{"code":-2, "msg":"用户名为空"}，或{"code": -1, "msg":"用户名或密码有错误"}
*/
header('Content-Type: application/json;charset=utf-8');

require('init.php');
@$addr = $_REQUEST['addr'] or die('{"code":-5, "msg":"地址不能为空"}');
@$name = $_REQUEST['name'] or die('{"code":-2, "msg":"用户名不能为空"}');
@$phone = $_REQUEST['phone'] or die('{"code":-5, "msg":"手机号码不能为空"}');
@$pwd = $_REQUEST['pwd'] or die('{"code":-3, "msg":"密码不能为空"}');
@$sex = $_REQUEST['sex'] or die('{"code":-4, "msg":"性别不能为空"}');
$sql = "INSERT INTO kt_user VALUES(null,'$name','$pwd',$sex,'$phone','$addr')";
$result = mysqli_query($conn,$sql);
$oid = mysqli_insert_id($conn);
$arr = [];
$output = [];
if($result){
	$arr['msg'] = 'succ';
	$arr['oid'] = $oid;
}else {
	$arr['msg'] = 'error';
}
$output[] = $arr;
echo json_encode($output);