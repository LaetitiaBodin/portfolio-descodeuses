<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 18</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 18</h1>
    <?php
        function randomAdd () {
            $num_1 = rand(0, 20);
            $num_2 = rand(0, 20);
            $num_3 = rand(0, 20);
            $sum = $num_1 + $num_2 + $num_3;
            echo "<p>$num_1  + $num_2 + $num_3 = " . $sum . "</p>"; 
        }
        
        randomAdd();
    ?>
</body>
</html>