<?php
$id = $_GET['id'];
var_dump($id);
require("./connection.php");
$query="INSERT INTO addtocard (`user_id`,`product_id`) VALUES(1,$id)";
$sql=$con->prepare($query);
$sql->execute();
header('Location:index.php');



