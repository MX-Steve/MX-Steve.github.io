<?php
header("Content-Type:application/json");

@$phone = $_REQUEST['phone'];
if(empty($phone))
{
    echo '[]';
    return;
}

require('init.php');

$sql = "select kt_classlist.id,kt_kind.name,kt_kind.img_sm,kt_kind.price,kt_classlist.time";
$sql .= " FROM kt_classlist,kt_kind,kt_user";
$sql .= " where kt_kind.kid=kt_classlist.kid AND kt_classlist.oid=kt_user.oid AND kt_user.phone='$phone'";
$result = mysqli_query($conn,$sql);
$output = [];
while(true){
    $row = mysqli_fetch_assoc($result);
    if(!$row){
        break;
    }
    $output[] = $row;
}

echo json_encode($output);
?>