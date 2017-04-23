<?php
header("content-type:application/json;charset=utf-8");
require('init.php');
@$id = $_REQUEST['id'];
if(empty($id)){
    echo '[]';
    return;
}
$sql = "SELECT kid,name,img_lg,price,detail FROM kt_kind WHERE kid = $id";
$result = mysqli_query($conn,$sql);
$output=[];
$arr=[];
$row = mysqli_fetch_assoc($result);
if($row !== null){
    $output[]=$row;
}else{
    $arr['msg'] = '没有找到你要的信息';
    $output[]=$arr;
}
echo json_encode($output);