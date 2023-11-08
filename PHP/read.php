<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            overflow-x: auto;
            overflow-y: auto;
        }
        th, td{
            border-bottom: 1px solid #ddd;
        }
        td{
            height: 50px;
            vertical-align: center;
        }
        tr:nth-child(even) {background-color: #f2f2f2;}
    </style>
</head>
<body>
    <div class="container">
        <table width="100%">
            <thead>
            <tr>
                <td> Registration Id </td> 
                <td> Name </td>
                <td> Age </td>
                <td> Id </td>
                <td> Mobile Number</td>
            </tr>
            </thead>
            <tbody>
                <?php
                    $server = "localhost";
                    $username = "root";
                    $password = "";
                    $db_name = "wt";
                    
                    $conn = mysqli_connect($server, $username, $password,$db_name);

                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    $regid = $_POST["regid"];

                    $sql_query = "SELECT regid, name, age, id, mobile FROM wt.tut WHERE regid = '$regid'";
                    
                    $rs = mysqli_query($conn,$sql_query);
                    $row = mysqli_fetch_assoc($rs);
                ?>
                <tr>
                <td><?php echo $row['regid']; ?></td>
                <td><?php echo $row['name']; ?></td>
                <td><?php echo $row['age']; ?></td>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['mobile']; ?></td>
                </tr>
                <?php $conn->close(); ?>
            </tbody>
        </table>
    </div>
</body>
</html>