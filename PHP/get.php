<!-- create a form and connect it here -->
<?php
   $name = $_GET["fullName"];
   $mobile = $_GET["mobile"];
   $address = $_GET["address"];
   $email = $_GET["email"];
   $tech = $_GET["tech"];
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