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

if (isset($_REQUEST['date'])) {
    $date=$_REQUEST['date'];
    $datee=$_REQUEST['datee'];
    $place=$_REQUEST['place'];
    $table=$_REQUEST['table'];

    $st=$db->prepare("INSERT INTO reservation (from_date,to_date,place,tablee) VALUES('$date','$datee','$place','$table')");
    $st->execute();
}
else{
    $read=$db->prepare("SELECT * FROM reservation");
    $read->execute();
    $info=$read->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode($info));
}
?>