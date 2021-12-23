<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 7</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 7</h1>
    <p>Les nombres de 1 à 10&nbsp;:</p>
    <p>
        <?php
            for ($i = 1; $i < 11; $i ++) {
                if ($i == 10) {
                    echo "$i.";
                } else {
                    echo "$i, ";
                }
            }
        ?>
    </p>
    <p>Les nombres impairs compris entre 1 et 10&nbsp;:</p>
    <p>
        <?php
            for ($i = 1; $i < 11; $i ++) {
                if ($i % 2 == 1) {
                    if ($i == 9) {
                        echo "$i.";
                    } else {
                        echo "$i, ";
                    }
                }
            }
        ?>
    </p>
    <p>Les nombres pairs compris entre 1 et 10&nbsp;:</p>
    <p>
        <?php
            for ($i = 1; $i < 11; $i ++) {
                if ($i % 2 == 0) {
                    if ($i == 10) {
                        echo "$i.";
                    } else {
                        echo "$i, ";
                    }
                }
            }
        ?>
    </p>
</body>
</html>