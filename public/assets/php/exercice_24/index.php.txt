<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 24</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 24</h1>
    <?php
        $name = isset($_GET["name"]) ? $_GET["name"] : "aucun";
        $surname = isset($_GET["surname"]) ? $_GET["surname"] : "aucun";
        
        echo   "<p>Paramètres&nbsp;:</p>
                <p>Nom&nbsp;: $name</p>
                <p>Prénom&nbsp;: $surname</p>";

        if ($name == "aucun" || $surname == "aucun") {
            echo '<a href="index.php?name=Toto&amp;surname=Titi">Voir le résultat pour "nom" = "Toto" et "prénom = "Titi"</a>';
        }
    ?>
</body>
</html>