<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 40</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 40</h1>
    <?php

    if (isset($_POST["name"]) && isset($_POST["password"])) {
        $_COOKIE["name"] = $_POST["name"];
        $_COOKIE["password"] = $_POST["password"];
       
        setcookie("name", $_COOKIE["name"], time() + (86400 * 30), null, null, null, true);
        setcookie("password", $_COOKIE["password"], time() + (86400 * 30), null, null, null, true);

        echo
    "<p>Bonjour {$_POST["name"]} {$_POST["password"]}&nbsp;!</p>
    <p>Un cookie a été créé avec les valeurs <i>{$_COOKIE["name"]}</i> et <i>{$_COOKIE["password"]}</i></p>";

    } else {
        header("location:index.html");
    }
        
    ?>
</body>
</html>