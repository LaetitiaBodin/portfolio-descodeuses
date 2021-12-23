<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 38</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 38</h1>
    <?php

    if (isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["age"])) {
        $_SESSION["name"] = $_POST["name"];
        $_SESSION["surname"] = $_POST["surname"];
        $_SESSION["age"] = $_POST["age"];
        echo
    "<p>Bonjour {$_SESSION["name"]} {$_SESSION["surname"]}&nbsp;!<br>
        Vous avez {$_SESSION["age"]} ans.</p>";

    } else {
        header("location:index.html");
    }
        
    ?>
    
</body>
</html>