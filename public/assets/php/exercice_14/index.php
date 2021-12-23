<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 14</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 14</h1>
    <?php
        $arr = array('Hello', 'World!', 'Beautiful', 'Day!');
        
        function arrItems ($array) {
            $string = "";
            $arrayLength = count($array);
            for($i = 0; $i < $arrayLength; $i++) {
                if ($i == $arrayLength - 1) {
                $string .= "et '$array[$i]'";
                } else {
                    $string .= "'$array[$i]', ";
                }
            }
            return $string;
        }
        
        function joinString ($array) {
            $string = join(" ", $array);
            return $string;
        }
    ?>
    <p>Je prends des mots&nbsp;: <?= arrItems($arr) ?>.</p>
    <p>Je les colle et j'obtiens&nbsp;: "<?= joinString($arr) ?>"</p>
</body>
</html>