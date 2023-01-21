<?php
require('./connection.php');
// get id
$query="SELECT COUNT(*) as id FROM products";
$sql=$con->prepare($query);
$sql->execute();
$idArr=$sql->fetch(PDO::FETCH_ASSOC);
// insert product data
$id= $idArr["id"]+1;
$imageName= $_FILES["image"]["name"];
$temp=$_FILES["image"]["tmp_name"];
$folder= "./images/".$imageName;
move_uploaded_file($temp,$folder);
$query = "INSERT INTO products (`id`,`name`,`price`,`amount`,`description`,`image`) 
           VALUES ($id,'$_POST[name]',$_POST[price],$_POST[amount],
           '$_POST[description]','$imageName');";
$sql = $con->prepare($query);
$result=$sql->execute();
header('Location:index.php');

