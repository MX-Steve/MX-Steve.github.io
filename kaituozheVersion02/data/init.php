<?php

$conn = mysqli_connect(
	SAE_MYSQL_HOST_M,
	SAE_MYSQL_USER,
	SAE_MYSQL_PASS,
	SAE_MYSQL_DB,
	SAE_MYSQL_PORT
);
mysqli_query($conn,"SET NAMES UTF8");