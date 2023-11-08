<?php
if(isset($_POST["regid"])){
    $server = "localhost";
    $username = "root";
    $password = "";
    $db_name = "wt";
    
    $conn = mysqli_connect($server, $username, $password,$db_name);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $regid = $_POST["regid"];
    $mobile = $_POST["mobile"];

    $sql = "UPDATE wt.tut SET mobile = '$mobile' WHERE regid = '$regid'";

    $res = mysqli_query($conn, $sql);

    if($res){
        echo '<script>alert("Data updated successfully")</script>';
    }
}
?>