<?php
header("content-type:application/json;charset=utf-8");
require('init.php');
@$oid = $_REQUEST['oid'];
@$kid = $_REQUEST['kid'];
$time = time()*1000;
if(empty($oid)||empty($kid)){
    echo '[]';
    return;
}
$sql = "INSERT INTO kt_classlist VALUES(null,'$oid','$kid',now())";
$result = mysqli_query($conn,$sql);
$output = [];
$arr = [];
if($result){
    $arr['oid'] = mysqli_insert_id($conn);
    $arr['msg'] = 'succ';
}else{
    $arr['msg'] = 'error';
}
$output[] = $arr;
echo json_encode($output);
