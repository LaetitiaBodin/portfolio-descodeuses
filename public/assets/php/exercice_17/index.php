<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 17</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 17</h1>
    <?php
        function randomString ($length) {
            $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $string = '';
            for ($i = 0; $i < $length; $i++) {
                $string .= $chars[rand(0, strlen($chars)-1)];
            }
            return $string;
        };

        function randomDuo () {
            $str_length = rand(1, 20);
            $number = rand(0, 999);
            echo "<p>Chaîne aléatoire : " . randomString($str_length) . "<br> Nombre aléatoire : $number</p>";
        }

        randomDuo();
    ?>
</body>
</html>