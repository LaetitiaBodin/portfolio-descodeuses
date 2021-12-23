<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 20</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 20</h1>
    <?php
        $langs = [
            1 => 'javascript',
            2 => 'php',
            3 => 'css',
            4 => 'html',
            5 => 'python'
        ];

        function listLangs () {
            global $langs;
            for ($i = 1; $i <= 5; $i++) {
                if ($i == 5) {
                    echo "\"$langs[$i]\".";
                } else {
                    echo "\"$langs[$i]\", ";
                }
            }
        }
    ?>
    <p>Voici 5 langages web : <?= listLangs() ?></p>
</body>
</html>