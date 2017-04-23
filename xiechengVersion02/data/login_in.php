<?php
header("Content-Type:application/json");
$conn = mysqli_connect("127.0.0.1",'root','','xiecheng');
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
@$uname = $_REQUEST['uname'] or die('用户名不能为空');
@$upwd = $_REQUEST['upwd'] or die('密码不能为空');
if(empty($uname) ||empty($upwd))
{
    echo '[]';
    return;
}
$sql = "SELECT * FROM xc_user_list WHERE uname = '$uname' AND upwd = '$upwd'";
$result = mysqli_query($conn,$sql);
$output = [];
if($result!=='NULL'){
    $arr = [];
    $arr['msg'] = 'succ';
    $output[] = $arr;
}
else{
    $arr = [];
    $arr['msg'] = 'error';
    $output[] = $arr;
}
   echo json_encode($output);
?>