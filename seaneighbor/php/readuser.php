<?php
// include_once "./connection.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$dsn='mysql:host=localhost;dbname=project-7';

try {
    $db=new PDO($dsn,'root','');
    // echo 'connected';
} catch (PDOException $err) {
    echo "error accoured, erros message is :". $err->getMessage();
}


$read=$db->prepare("SELECT * FROM users");
$read->execute();
$info=$read->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($info));

// $sql = "select * from users";
// $result = mysqli_query($con, $sql);

// if(!$result){
//     http_response_code();
//     die(mysqli_error($con));
// }





// for($i=0;$i<mysqli_num_rows($result);$i++){
// echo($i>0?',':'').json_encode(mysqli_fetch_assoc($result));
// }

?>