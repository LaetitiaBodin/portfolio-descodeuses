<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 12</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 12</h1>
    <label for="month-select">Choisir un mois&nbsp;:</label>
    <select name="months" id="month-select">
    <?php
        $months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
        foreach($months as $month) {
            echo "<option value='$month'>$month</option>";
        }
    ?>
    </select>
</body>
</html>