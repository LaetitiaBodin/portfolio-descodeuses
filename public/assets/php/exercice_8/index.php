<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 8</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 8</h1>
    <?php
        $randomNum = rand(1, 100);
        echo "<p>Multiplication de 0 à 20 de $randomNum.</p>";
        for ($i = 0; $i < 21; $i++) {
            $product = $randomNum * $i;
            echo "<p>$i * $randomNum = $product</p>";
        }
    ?>
</body>
</html>