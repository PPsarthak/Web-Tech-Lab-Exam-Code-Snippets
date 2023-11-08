<?php

$server = "localhost";
$username = "root";
$password = "";
$db_name = "dbms_cp";

// $conn = new mysqli($servername, $username, $password);

$conn = mysqli_connect($server, $username, $password,$db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = uniqid();

$sql = "INSERT INTO dbms_cp.ongoingcases(user_name, user_mobile, user_email, user_age, victim_name, victim_gender, victim_age, crime, clocation, cdate, proof, eyew, cdescription) VALUES ('$user_name', '$user_mobile','$user_email',$user_age, '$victim_name', '$victim_gender', '$victim_age', '$crime', '$clocation', '$cdate', '$proof', '$eyew', '$cdescription')";

$rs1 = mysqli_query($conn, $sql2);

if($rs2){
    echo "Complaint Registered!";
    echo ("Your complaint id is : ");
    $row = mysqli_fetch_column($rs3);
    print_r($row);
}

?>