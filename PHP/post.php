<?php
   $name = $_POST["fullName"];
   $mobile = $_POST["mobile"];
   $address = $_POST["address"];
   $email = $_POST["email"];
   $tech = $_POST["tech"];
?>
<html>  
   <body>  
      <p>Hey, <?php echo $name ?> thank you for filling form</p> 
      <p>Here are the details you provided: <br>
         <?php
            echo "\nMobile: ".$mobile;
            echo "<br>Address: ".$address;
            echo "<br>Email: ".$email;
            echo "<br>Favourite JS Tech: ".$tech;
         ?>
      </p>
  
   </body>  
</html>  