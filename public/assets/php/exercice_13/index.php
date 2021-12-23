<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 13</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 13</h1>
    <?php
        $tests = ['Hello World', true, false, 25, 'numéro 5'];
        
        foreach($tests as $test) {
            if (is_bool($test) === true) {
                $test = json_encode($test);
                echo "<p><i>$test</i> est un booléen.</p>";
            } else {
                echo "<p><i>$test</i> n'est pas un booléen.</p>";
            }
        }
    ?>
</body>
</html>