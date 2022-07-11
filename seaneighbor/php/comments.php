<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$dsn='mysql:host=localhost;dbname=seaneighbor';

try {
    $db=new PDO($dsn,'root','');
    // echo 'connected';
} catch (PDOException $err) {
    echo "error accoured, erros message is :". $err->getMessage();
}

if ($_REQUEST) {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $rate=$_REQUEST['rate'];
    $message=$_REQUEST['message'];
    $set = $db -> prepare("INSERT INTO comments(user_id,user_email,body,rating) VALUES('$name','$email','$message','$rate')");
    $set -> execute();
}
else{
$read=$db->prepare("SELECT * FROM comments");
$read->execute();
$info=$read->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($info));
}
?>