<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 4</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 4</h1>
    <?php
        $age = rand(0, 120);
        if ($age < 10) {
            echo "J'ai {$age} ans. Je ne devrais pas être là.";
        } elseif ($age >= 10 && $age < 18) {
            echo "J'ai {$age} ans. Je suis mineur(e).";
        } else {
            echo "J'ai {$age} ans. Je suis majeur(e).";
        }
    ?>
</body>
</html>