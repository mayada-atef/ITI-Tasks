<?php
class Db{
 public function __construct($dbType,$host,$dbName)
 {
    $db="$dbType:host=$host;dbname=$dbName";
    $this->con= new PDO($db,'root','');
 }
 public function insert($table,$data)
 {
        $columns=[];
        $values=[];
        $query = "INSERT INTO $table (";
        foreach($data as $key =>$value){
           array_push($columns,"`$key`");
           array_push($values,"'$value'");
        }
        print_r($values);
        var_dump(implode(',',$values));
        $query.=implode(',',$columns).") VALUES (". implode(',', $values).")";
        $sql = $this->con->prepare($query);
        $sql->execute();
        return $sql->fetchAll(PDO::FETCH_ASSOC);
 }
 public function getAll($table)
 {
        $query = "SELECT * FROM $table;";
        $sql = $this->con->prepare($query);
        $sql->execute();
        return $sql->fetchAll(PDO::FETCH_ASSOC);

 }
 public function getOne($table,$id)
 {
        $query = "SELECT * FROM $table where id=$id;";
        $sql = $this->con->prepare($query);
        $sql->execute();
        return $sql->fetch(PDO::FETCH_ASSOC);
 }
 public function update($table,$condition,$data)
 {
        $query="UPDATE $table SET ";
        foreach($data as $key=>$value){
            $query.="$key='$value',";
        }
        $query=rtrim($query,',');
        $query.=" WHERE ";
        foreach($condition as $key=>$value){
            $query.="$key='$value'";
        }
        $sql = $this->con->prepare($query);
        $sql->execute();
    
 }
 public function delete($table,$id)
 {
        $query = "DELETE FROM $table where id=$id;";
        $sql = $this->con->prepare($query);
        $sql->execute();
        return $sql->fetch(PDO::FETCH_ASSOC);
    
 }

}
$con1=new Db("mysql","localhost","ecommerce");
// print_r($con1->getAll("products")) ;
// var_dump($con1->insert("products",["id"=>1000,"name"=>"p1","price"=>50]));
// $con1->update("products",["id"=>1000], [ "amount" => 70]);
