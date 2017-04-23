<?php
header("Content-Type:application/json");
$conn = mysqli_connect("127.0.0.1",'root','','xiecheng');
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT t1,t2,t3,t4,t5,t6 FROM xc_model";
$result = mysqli_query($conn,$sql);
$output = [];
while(true){
    $row = mysqli_fetch_assoc($result);
    if($row == null){
        break;
    }
    $output[] = $row;
}
echo json_encode($output);
?>