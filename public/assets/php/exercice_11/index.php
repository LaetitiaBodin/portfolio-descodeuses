<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 11</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 11</h1>
    <p>Comptons de 12 en 12 de 200 à 0.</p>
    <p>
        <?php
            for ($i = 200; $i > 0; $i -= 12) {
                if ($i == 8) {
                    echo "$i.";
                } else {
                    echo "$i, ";
                }
            }
        ?>
    </p>
</body>
</html>