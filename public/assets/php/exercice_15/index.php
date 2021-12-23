<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 15</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 15</h1>
    <?php
        $string_1 = 'Hello';
        $string_2 = 'World';
        
        function concateString ($str_1, $str_2) {
            $newstring = "$str_1 $str_2!";
            return $newstring;
        }
    ?>
    <p><?= concateString($string_1, $string_2) ?></p>
</body>
</html>