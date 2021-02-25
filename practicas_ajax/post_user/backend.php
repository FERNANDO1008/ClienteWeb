<?php
    if(isset($_POST)){
        echo "Me envias el usuario " . $_POST['username'];
        echo " y la contraseña " . $_POST['password'];
    }

?>