<?php 
$x=5;
$y='welcome';
$z=true;
const NAME="ITI";
echo "gettype() result for all variables <br>";
echo "x :" . gettype($x). " ";
echo "y :" . gettype($y) . " ";
echo "z :" . gettype($z) . " ";
echo "NAME :" . gettype(NAME) . " ";
echo "<br> <br>";


echo "isset() result for all variables <br>";
echo "x :".(isset($x)) . " ";
echo "y :".(isset($y)) . " ";
echo "z :" . (isset($z)) . " ";
echo "NAME: ";
var_dump(defined(NAME));
// echo "NAME :" . (isset(NAME)) . " ";

echo "<br> <br>";

echo "empty() result for all variables <br>";
echo empty($x);
var_dump(empty($x));
var_dump(empty($y));
var_dump(empty($z));
var_dump(empty(NAME));

// echo false . "false";
// echo "x :" . (empty($x)) . " ";
// echo "y :" . (empty($y)) . " ";
// echo "z :" . (empty($z)) . " ";
// echo "NAME :" . (empty(NAME)) . " ";