<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 36</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 36</h1>
    <h2>Informations contenues dans $_SERVER</h2>
    <h3><a href="http://phpweb.hostnet.com.br/manual/fr/reserved.variables.server.php" target="_blank">
        Documentation officielle de $_SERVER</a></h3>
    <?php foreach ($_SERVER as $param => $value) { echo "<p>$param = $value </p>"; } ?>
</body>
</html>