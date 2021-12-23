<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 16</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 16</h1>
    <?php
        $rand_1 = rand(1, 15);
        $rand_2 = rand(1, 15);

        function compareNums ($num_1, $num_2) {
            echo "<p>Nombres à comparer : $num_1 et $num_2</p>";
            switch ($num_1) {
                case $num_1 > $num_2 :
                    echo "<p>$num_1 est plus grand que $num_2.</p>";
                    break;
                case $num_1 < $num_2 :
                    echo "<p>$num_1 est plus petit que $num_2.</p>";
                    break;
                case $num_1 == $num_2 :
                    echo "<p>$num_1 est égal à $num_2.</p>";
                    break;
            }
        };
        
        compareNums($rand_1, $rand_2);
    ?>
</body>
</html>