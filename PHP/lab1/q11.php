<?php
function numberToString($num){
    settype($num,"string");
    var_dump($num);
}
numberToString(999);
echo "<br>";
numberToString(123);