<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 27</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 27</h1>

<?php

$paras = ["English", ""];
$lang = $paras[rand(0, 1)];
    
function contentHTML () {

    global $lang;

    $str =
'<!DOCTYPE html>';
if ($lang == 'English') {
    $str .= '
<html lang="en">';
} else {
    $str .= '
<html lang="fr">';
};
    $str .= '
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 27</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Exercice 27</h1>
    ';
    if ($lang == 'English') {
        $str .= 
    '<p>Welcome!</p>
    <p>This is the English page!</p>
    ';
    } else {
        $str .=
    '<p>Bienvenue !</p>
    <p>C\'est la page française !</p>
    ';
    };
    $str .=
    '<a href="index.php">Retour</a>
</body>
</html>
';

    return $str;

};

function checkParas () {

    global $lang;

    if ($lang == 'English') {
        $link = "English.php";
    } else {
        $link = "French.php";
    }

    $createPHP = fopen($link, 'w');
    fwrite($createPHP, contentHTML());
    fclose($createPHP);
    echo "<a href='$link'>Surprise</a>";

}

?>
    <p><?= checkParas() ?></p>
</body>
</html>