<?php
/**
*接收客户端提交的uname和upwd，验证登录信息，返回{"code":1,"msg":"login succ","uname":"qiangdong", "uid":10 }，或{"code":-2, "msg":"用户名为空"}，或{"code": -1, "msg":"用户名或密码有错误"}
*/
header('Content-Type: application/json');

@$n = $_REQUEST['name'] or die('{"code":-2, "msg":"用户名不能为空"}');
@$p = $_REQUEST['pwd'] or die('{"code":-3, "msg":"密码不能为空"}');

require('init.php');

$sql = "SELECT * FROM kt_user WHERE user_name='$n' AND pwd='$p'";
$result = mysqli_query($conn,$sql);

//此处省略了$result为false(SQL语法错误)的检验

$row = mysqli_fetch_row($result);
if($row===null){	//查询结果集中没有记录
	echo '{"code":-1,"msg":"用户名或密码错误"}';
}else {  //查询结果集中有记录
	$uid = $row[0];
	$output = [
		'code'=>1,
		'msg'=>'登录成功',
		'user-name'=>$n,
		'uid'=>$uid
	];
	echo json_encode($output);
}