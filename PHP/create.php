<?php
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

    $sql = "INSERT INTO wt.tut VALUES('$regid', '$name', '$age', '$id', '$mobile')";

    $res = mysqli_query($conn, $sql);

    if($res){
        echo '<script>alert("Data Added to DB")</script>';
        echo "<script>alert('$regid');</script>";
    }
}
?>