<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 9</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 9</h1>
    <?php
        for ($i = 15; $i > 0; $i--) {
            echo "<p>Il reste encore $i pas.</p>";
        }
        echo "<p>Ca y est&nbsp;! On est arrivés&nbsp;!</p>";
    ?>
</body>
</html>