<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 19</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 19</h1>
    <?php
        $months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

        function listMonth () {
            global $months;
            for($i = 0; $i < count($months); $i++) {
                if ($i == count($months) - 1) {
                    echo "\"$months[$i]\".";
                } else {
                    echo "\"$months[$i]\", ";
                }
            }
        };

        function randomMonth () {
            global $months;
            return $months[rand(0, 11)];
        }
        
    ?>
    <p>Les 12 mois de l'année sont : <?= listMonth() ?></p>
    <p>Un mois au hasard : <?= randomMonth() ?>.</p>
</body>
</html>