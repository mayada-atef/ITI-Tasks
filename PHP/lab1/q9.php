<?php
function sum ($num1,$num2){
    $result=$num1+$num2;
    if($result>50){

        echo "$result accepted <br>";
    }
    else{
        echo "$result not accepted <br>";
    }
}
sum(10,5);
sum(50,10);