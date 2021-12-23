<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 45</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 45</h1>
    <p><?php setlocale(LC_TIME, 'fr_FR','fra'); ?>Date du jour : <?= strftime("%A %d %B %G") ?></p>
</body>
</html>