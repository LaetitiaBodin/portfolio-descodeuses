<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 10</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 10</h1>
    <p>Comptons de 15 en 15 de 0 à 100.</p>
    <p>
        <?php
            for ($i = 0; $i < 100; $i += 15) {
                if ($i == 90) {
                    echo "$i.";
                } else {
                    echo "$i, ";
                }
            }
        ?>
    </p>
</body>
</html>