<?php
session_start();
if(isset($_POST["name"])){
    $server = "localhost";
    $username = "root";
    $password = "";
    $db_name = "wt";
    
    $conn = mysqli_connect($server, $username, $password,$db_name);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST["name"];
    $age = $_POST["age"];
    $id = $_POST["id"];
    $mobile = $_POST["mobile"];
    $regid = uniqid();

    $_SESSION["regid"] = $regid;


    setcookie("id", $id, time() + (15));
    setcookie("name", $name, time() + (15));
    setcookie("age", $age, time() + (15));
    setcookie("mobile", $mobile, time() + (15));

    $sql = "INSERT INTO wt.lab4 VALUES('$regid', '$name', '$age', '$id', '$mobile')";

    $res = mysqli_query($conn, $sql);

    if($res){
        header("Location: sessionCookie2.php");
    }
}
?>