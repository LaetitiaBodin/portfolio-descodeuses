<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 5</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 5</h1>
    <?php
        $genders = ["un homme", "une femme"];
        $gender = $genders[rand(0, 1)];
        $age = rand(18, 100);

        echo "<p>Le patient X est {$gender} et a {$age} ans.</p>";
    ?>
</body>
</html>