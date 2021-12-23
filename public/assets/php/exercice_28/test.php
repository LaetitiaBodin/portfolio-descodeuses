<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 28</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 28</h1>
    <?php
        if (isset($_GET["lang"])) {
            // Enlève tout ce qui n'est pas une minuscule sans accent.
            $lang = preg_replace('/[^a-z]/', '', $_GET["lang"]);
            if ($lang == '') {
                echo "<p>Paramètre <i>lang</i> erronné.</p>";
            } else {
                echo "<p>Paramètre <i>lang</i> = $lang</p>";
            }
        } else {
            header("location:test.php?lang=fr");
        }
    ?>
    <p><a href="index.html">Retour</a></p>
</body>
</html>