<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Thank you for filling form!</h2>
    <h3>Here is your unique registration id. Please note it down</h3>
    <?php 
        session_start();
        $regid = $_SESSION["regid"];
        echo $regid;

        echo "<h4>Here are your other filled details (Valid only for 15 secs):</h4> ";
        $name = "Not available anymore";
        $age = "Not available anymore";
        $id = "Not available anymore";
        $mobile = "Not available anymore";

        if(isset($_COOKIE["id"])){
            $id = $_COOKIE["id"];
        }
        if(isset($_COOKIE["name"])){
            $name = $_COOKIE["name"];
        }
        if(isset($_COOKIE["age"])){
            $age = $_COOKIE["age"];
        }
        if(isset($_COOKIE["mobile"])){
            $mobile = $_COOKIE["mobile"];
        }
        echo "<br>".$name;
        echo "<br>".$age;
        echo "<br>".$id;
        echo "<br>".$mobile;
    ?>
</body>
</html>