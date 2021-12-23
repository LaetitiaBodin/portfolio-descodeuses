<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 37</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 37</h1>
    <?php
    $_SESSION["name"] = isset($_POST["name"]) ? $_POST["name"] : "";
    $_SESSION["surname"] = isset($_POST["surname"]) ? $_POST["surname"] : "";
    
    if ($_SESSION["name"] == "" || $_SESSION["surname"] == "") {
        echo
    '<form action="index.php" method="post">
        <label for="name">PRENOM</label>
        <input type="text" name="name" id="name">
        <label for="surname">NOM</label>
        <input type="text" name="surname" id="surname">
        <button type="submit" value="submit">ENVOYER</button>
    </form>
';
    } else {
        echo 
    "<p>Bonjour ".$_SESSION["name"]." ".$_SESSION["surname"]." !</p>
";
    }
    ?>
</body>
</html>