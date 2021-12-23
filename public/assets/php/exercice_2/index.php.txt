<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 2</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 2</h1>
    <?php
        $num = rand(0, 4);
        $names = array("Arthur", "Merlin", "Lancelot", "Perceval", "Léodagan");
        $nicknames = array("Sanglier de Cournouaille", "Toto l'Asticot", "Beau Trouvé", "Provençal le Gaulois", "le Sanguinaire");

        echo   "<p>Bonjour, mon nom est {$names[$num]}.<br>
                   Mais... Vous pouvez m'appeler <i>{$nicknames[$num]}</i>.<br>
                   C'est vous qui voyez.</p>";
    ?>
</body>
</html>