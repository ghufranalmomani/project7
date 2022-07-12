<?php


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: Post');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With ');




$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$phone = $data->phone;
$email = $data->email;
$password = $data->password;

// $con = mysqli_connect("localhost:3000","root","project-7" ,"");
// mysqli_select_db($con,"users");




$servername = "localhost";
$username   = "root";
$passsword   = "";
$dbname     = "seaneighbor";
// Create connection
$con = new mysqli($servername, $username, $passsword, $dbname);







$sql = "INSERT INTO users(
    name,
    phone,
    email,
    password
)
VALUES(
    '$name',
    '$phone',
    '$email',
    '$password'
    
)";

$result = mysqli_query($con, $sql);
if ($result) {
    $response['data'] = array(
        'status' => 'valid'
    );
    echo json_encode($response);
} else {
    $response['data'] = array(
        'status' => 'invalid'
    );
    echo json_encode($response);
}
?>