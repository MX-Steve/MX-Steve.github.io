<?php
header('content-type:application/json;charset=utf-8');
@$start = $_REQUEST['start'];
if(empty($start)){
    $start = 0;
};
$count = 4;
require('init.php');
$sql = "SELECT kid,name,price,img_sm,detail FROM kt_kind LIMIT $start,$count";
$result = mysqli_query($conn,$sql);
$output = [];
while(true){
    $row = mysqli_fetch_assoc($result);
    if(!$row){
       break;
    }
    $output[] = $row;
};
echo json_encode($output);
?>