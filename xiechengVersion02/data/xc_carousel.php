<?php
header("Content-Type:application/json");
$conn = mysqli_connect("127.0.0.1",'root','','xiecheng');
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM xc_carousel";
$result = mysqli_query($conn,$sql);
$output = [];
$row = mysqli_fetch_assoc($result);
$output[] = $row;
echo json_encode($output);
?>