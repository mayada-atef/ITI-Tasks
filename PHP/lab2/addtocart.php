<?php
$id = $_GET['id'];
var_dump($id);
$cartFile = fopen("cart.json", "r");
$cartFile_content = fread($cartFile, filesize("cart.json"));
$cart_products = json_decode($cartFile_content, true);
$product = [];
$product["id"] = $id;
$product["quantity"] = 1;
array_push($cart_products, $product);
fclose($cartFile);
$cartFile = fopen("cart.json", "w");
fwrite($cartFile, json_encode($cart_products,true));
header('Location:index.php');



// $product = $products[$id];
var_dump($product);
