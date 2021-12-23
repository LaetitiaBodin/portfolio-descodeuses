<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 6</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 6</h1>
    <?php
        $magnitude = rand(1, 9);
        
        echo "<p>D'après nos informations, le dernier séisme avait une magnitude de {$magnitude}.<br>Cela correspond à : \"";
        switch ($magnitude) {
            case 1 :
                echo "Micro-séisme impossible à ressentir.\"</p>";
                break;
            case 2 :
                echo "Micro-séisme impossible à ressentir mais enregistrable par les sismomètres.\"</p>";
                break;
            case 3 :
                echo "Ne cause pas de dégats mais commence à pouvoir être légèrement ressenti.\"</p>";
                break;
            case 4 :
                echo "Séisme capable de faire bouger des objets mais ne causant généralement pas de dégats.\"</p>";
                break;
            case 5 :
                echo "Séisme capable d'engendrer des dégats importants sur de vieux bâtiments ou bien des bâtiments présentants des défauts de construction.<br>
                        Peu de dégats sur des bâtiments modernes.\"</p>";
                break;
            case 6 :
                echo "Fort séisme capable d'engendrer des destructions majeures sur une large distance (180 km) autour de l'épicentre.\"</p>";
                break;
            case 7 :
                echo "Séisme capable de destructions majeures à modérées sur une très large zone en fonction de la distance.\"</p>";
                break;
            case 8 :
                echo "Séisme capable de destructions majeures sur une très large zone de plusieurs centaines de kilomètres.\"</p>";
                break;
            case 9 :
                echo "Séisme capable de tout détruire sur une très vaste zone.\"</p>";
                break;
        }
    ?>
</body>
</html>