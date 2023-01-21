<?php
$productFile = fopen("products.json", "r");
$productFile_content = fread($productFile, filesize("products.json"));
$productFile_content = json_decode($productFile_content,true);
$product = $_POST;
$product["id"] = count($productFile_content);
$product["image"] = base64_encode(file_get_contents($_FILES["image"]["tmp_name"]));
array_push($productFile_content, $product);
fclose($productFile);
$productFile = fopen("products.json", "w");
fwrite($productFile, json_encode($productFile_content));
// print_r($productFile_content);
// print_r(json_encode($productFile_content));
header('Location:index.php');

