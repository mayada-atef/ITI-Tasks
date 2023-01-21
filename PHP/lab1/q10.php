<?php 
$Arr=["salary of  mr.A is"=>1000, "salary of  mr.B is"=>2000, "salary of  mr.C is"=>3000];
$table= "<table border=1>";
foreach ($Arr as $key =>$value){
    $table.= "<tr><td>$key</td> <td> $value</td></tr>";
}
$table.="</table>";
echo $table;
?>
