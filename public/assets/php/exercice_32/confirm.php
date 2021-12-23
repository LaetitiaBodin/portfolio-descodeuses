<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 32</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 32</h1>
    <?php
    
    function cleanName ($var) {
        // Enlève les tags html.
        $var_clean = strip_tags($var);
        // Enlève tout ce qui n'est pas une lettre ou un trait d'union ou une apostrophe.
        $var_clean = preg_replace('/[^\p{L}\-\']/u', '', $var_clean);
        // Remplace 2 traits d'union consécutifs par un seul.
        $var_clean = preg_replace('/-{2,}/u', '-', $var_clean);
        // Remplace 2 apostrophes consécutives par une seule.
        $var_clean = preg_replace('/\'{2,}/u', '\'', $var_clean);
        
        // Retourne la chaîne passée en argument après nettoyage.
        return $var_clean;
    }

    $gender = $_POST["gender"];
    $name = cleanName($_POST["name"]);
    $surname = cleanName($_POST["surname"]);
    
    if ($name != '' && $surname != '') {
        echo 
        "<p>$gender</p>
        <p>PRENOM : $name </p>
        <p>NOM : $surname </p>";
    } else {
        header("location:index.html");
    }
    
    ?>  
</body>
</html>