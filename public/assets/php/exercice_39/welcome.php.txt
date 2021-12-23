<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 39</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 39</h1>
    <?php
    $_SESSION["name"] = isset($_POST["name"]) ? $_POST["name"] : "";
    $_SESSION["password"] = isset($_POST["password"]) ? $_POST["password"] : "";
    
    if ($_SESSION["name"] == "" || $_SESSION["password"] == "") {
        header("location:index.html");
    } else {
        echo
    "<p>Bonjour !</p>
    <p>Voici vos identifiants&nbsp;:</p>
    <p>Pseudo&nbsp;: ".$_SESSION["name"]."</p>
    <p>Mot de passe&nbsp;: ".$_SESSION["password"]."</p>
";
    }
    ?>
</body>
</html>