<?php
header('content-type:application/json;charset=utf-8');
@$kw = $_REQUEST['kw'];
if(empty($kw)){
    echo '[]';
    return;
};
require('init.php');
$sql = "SELECT kid,name,price,img_sm,detail FROM kt_kind WHERE  name like '%$kw%' or detail like '%$kw%'";
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